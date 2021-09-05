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
        this.dispatchJobInfo();

        this.Camera = new Camera(this.cameraStream);
        await this.Camera.setup("user");
        this.videoBox = {
            width: this.cameraStream.videoWidth,
            height: this.cameraStream.videoHeight,
        };

        this.faceDetector = new FaceDetectorBlazeFace(this.cameraStream);
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

        this.recorder = new Recorder(this.canvasRender.getStream());

        this.pressHold = new PressHold(
            <HTMLButtonElement>this.controlContainer.getElementsByClassName('record-btn')[0],
            () => {
                this.recorder.start();
                this.faceSpeakerValidator.start(() => {
                    this.recorder.stop();
                    this.pressHold.stop();

                    this.eventManager.dispatchEvent('error', {
                        errorCode:"out_of_frame",
                        errorMessage:"recording stopped, stay in frame!",
                    })
                });
            },
            () => {
                this.recorder.stop().then((chunks: Blob[]) => {
                    if (!this.faceSpeakerValidator.isReadyToSend()) {
                        this.eventManager.dispatchEvent('error', {
                            errorCode:"invalid_recording",
                            errorMessage:"video is less than 1 second!",
                        })
    
                        this.faceSpeakerValidator.cleanup();
                        return;
                    }

                    let blob = new Blob(chunks, { type: "video/mp4;" });
                    let reader = new FileReader();
                    reader.readAsArrayBuffer(blob);
                    reader.onloadend = () => {
                        var message = ClientRequest.create({
                            id: "1",
                            faceText: { video: new Uint8Array(<ArrayBuffer>reader.result) }
                        });
                        var buffer = ClientRequest.encode(message).finish();
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
        this.faceSpeakerValidator.cleanup()
    }

    protected dispatchJobInfo(){
        this.eventManager.dispatchEvent('next_job', {
            job:"face_text",
            whatToSay:this.serverRequest.faceText.text,
        })
    }
}