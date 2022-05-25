import { Verification } from "./Verification";
import { Camera } from "./components/Camera";
import { FaceDetectorBlazeFace } from "./components/FaceDetectorBlazeFace";
import { FaceFeatureExtractor } from "./components/FaceFeatureExtractor";
import { CanvasRender } from "./components/CanvasRender";
import { FaceDetectorInterface } from "./components/FaceDetectorInterface";
import { Recorder } from "./components/Recorder";
import { PressHold } from "./components/pressHoldBtn";
import { ClientRequest } from "../wsMessages";
import { FaceSpeakerValidator } from "./components/FaceSpeakerValidator";
import { VideoElement } from "../types";

export class FaceText extends Verification {
    protected Camera: Camera;
    protected faceDetector: FaceDetectorInterface;
    protected faceFeatureExtractor: FaceFeatureExtractor;
    protected faceSpeakerValidator: FaceSpeakerValidator;
    protected canvasRender: CanvasRender;
    protected recorder: Recorder;
    protected pressHoldBtn: HTMLButtonElement;
    protected pressHold: PressHold;
    protected cameraStream: VideoElement;
    protected controlContainer: HTMLElement;
    protected countDownInterval: NodeJS.Timer;

    protected canvasBox = {
        width: 150,
        height: 200,
    };
    protected videoBox = {
        width: 0,
        height: 0,
    };

    public draw(): void {
        this.cameraStream = <VideoElement>document.createElement("video");
        this.cameraStream.autoplay = true;
        this.cameraStream.muted = true;
        this.cameraStream.controls = false;
        this.cameraStream.controls = false;
        this.cameraStream.playsInline = true;
        this.cameraStream.className = "camera-stream"
        this.container.appendChild(this.cameraStream)
        this.controlContainer = <HTMLDivElement>document.createElement("div");
        this.controlContainer.className = "action-box"
        this.container.appendChild(this.controlContainer)
        this.pressHoldBtn = <HTMLButtonElement>document.createElement("button");
        this.pressHoldBtn.innerText = 'record';
        this.controlContainer.appendChild(this.pressHoldBtn)
    }

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('loading', {
            isLoaded: false,
        });

        this.dispatchJobInfo();

        this.Camera = new Camera(this.cameraStream);
        await this.Camera.setup("user");
        this.videoBox = {
            width: this.cameraStream.videoWidth,
            height: this.cameraStream.videoHeight,
        };

        this.faceDetector = new FaceDetectorBlazeFace(this.cameraStream);
        await this.faceDetector.Load()
        this.faceFeatureExtractor = new FaceFeatureExtractor(
            this.faceDetector,
            this.canvasBox,
            this.videoBox,
        );
        this.faceSpeakerValidator = new FaceSpeakerValidator(
            this.faceFeatureExtractor,
        );
        this.canvasRender = new CanvasRender(
            this.cameraStream,
            this.canvasBox,
            this.faceFeatureExtractor,
        );

        let stream = this.canvasRender.getStream();
        stream.addTrack(this.Camera.getStream().getAudioTracks()[0]);
        this.recorder = new Recorder(stream);

        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });

        this.pressHold = new PressHold(
            <HTMLButtonElement>this.pressHoldBtn,
            () => {
                this.recorder.start();
                let i = 3;
                this.countDownInterval = setInterval(() => {
                    this.eventManager.dispatchEvent('countdown', {
                        countdown: i--,
                    });
                    if (i === -1) clearInterval(this.countDownInterval);
                }, 1000);
                this.faceSpeakerValidator.start(() => {
                    this.faceSpeakerValidator.cleanup()
                    this.recorder.stop();
                    this.pressHold.stop();
                    this.eventManager.dispatchEvent('error', {
                        errorCode: "out_of_frame",
                        errorMessage: "recording stopped, stay in frame!",
                    })
                });
            },
            () => {
                this.recorder.stop().then((chunks: Blob[]) => {
                    clearInterval(this.countDownInterval);
                    this.eventManager.dispatchEvent('countdown', {
                        countdown: 0,
                    });

                    this.pressHoldBtn.className = "inactive";
                    if (!this.faceSpeakerValidator.isReadyToSend()) {
                        this.eventManager.dispatchEvent('error', {
                            errorCode: "invalid_recording",
                            errorMessage: "video is less than 3 second!",
                        });
                        this.faceSpeakerValidator.cleanup();
                        return;
                    }
                    this.faceSpeakerValidator.cleanup();
                    this.eventManager.dispatchEvent('validating', {
                        isValidating: true,
                    });
            
                    let blob = new Blob(chunks, { type: "video/mp4;" });
                    let reader = new FileReader();
                    reader.readAsArrayBuffer(blob);
                    reader.onloadend = () => {
                        let message = this.response(<ArrayBuffer>reader.result)
                        let buffer = ClientRequest.encode(message).finish();
                        this.ws.send(buffer)
                    };
                });
            },
        );
    }

    async cleanup(): Promise<void> {
        
        if (this.Camera) this.Camera.cleanup();
        if (this.faceDetector) this.faceDetector.cleanup();
        if (this.faceFeatureExtractor) this.faceFeatureExtractor.cleanup();
        if (this.canvasRender) this.canvasRender.cleanup();
        if (this.recorder) this.recorder.cleanup();
        if (this.pressHold) this.pressHold.cleanup();
        if (this.faceSpeakerValidator) this.faceSpeakerValidator.cleanup();
        this.pressHoldBtn.remove();
        this.cameraStream.remove()
        this.controlContainer.remove();
    }

    isJob(): boolean {
        return true;
    }

    protected dispatchJobInfo() {
        this.eventManager.dispatchEvent('next_job', {
            job: "face_text",
            whatToSay: this.serverRequest.faceText.text,
        });
    }

    protected response(res: ArrayBuffer): ClientRequest {
        return ClientRequest.create({
            id: this.serverRequest.id,
            faceText: { video: new Uint8Array(res) }
        });
    }
}