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

export class FaceText extends Verification {
    protected Camera: Camera;
    protected faceDetector: FaceDetectorInterface;
    protected faceFeatureExtractor: FaceFeatureExtractor;
    protected faceSpeakerValidator: FaceSpeakerValidator;
    protected canvasRender: CanvasRender;
    protected recorder: Recorder;
    protected pressHoldBtn: HTMLButtonElement;
    protected pressHold: PressHold;
    protected canvasBox = {
        width: 150,
        height: 200,
    };
    protected videoBox = {
        width: 0,
        height: 0,
    };

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

        this.pressHoldBtn = <HTMLButtonElement>document.createElement("button");
        this.pressHoldBtn.innerText = 'record';
        
        this.controlContainer.appendChild(this.pressHoldBtn)
        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });

        this.pressHold = new PressHold(
            <HTMLButtonElement>this.pressHoldBtn,
            () => {
                this.recorder.start();
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
                    this.pressHoldBtn.className = "inactive";
                    if (!this.faceSpeakerValidator.isReadyToSend()) {
                        this.eventManager.dispatchEvent('error', {
                            errorCode: "invalid_recording",
                            errorMessage: "video is less than 1 second!",
                        });
                        this.faceSpeakerValidator.cleanup();
                        return;
                    }
                    this.faceSpeakerValidator.cleanup();

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
        this.Camera.cleanup();
        this.faceDetector.cleanup();
        this.faceFeatureExtractor.cleanup();
        this.canvasRender.cleanup();
        this.recorder.cleanup();
        this.pressHold.cleanup();
        this.faceSpeakerValidator.cleanup();
        this.pressHoldBtn.remove();
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

    protected response(res: ArrayBuffer):ClientRequest {
        return ClientRequest.create({
            id: this.serverRequest.id,
            faceText: { video: new Uint8Array(res) }
        });
    }
}