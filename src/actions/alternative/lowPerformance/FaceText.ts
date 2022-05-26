import { Verification } from "../.././Verification";
import { Camera } from "../.././components/Camera";
import { Recorder } from "../.././components/Recorder";
import { PressHold } from "../.././components/pressHoldBtn";
import { ClientRequest } from "../../../wsMessages";

export class FaceText extends Verification {
    protected Camera: Camera;
    protected recorder: Recorder;
    protected pressHoldBtn: HTMLButtonElement;
    protected pressHold: PressHold;
    protected cameraStream: HTMLVideoElement;
    protected controlContainer: HTMLElement;
    protected recordDuration: number;

    protected canvasBox = {
        width: 150,
        height: 200,
    };
    protected videoBox = {
        width: 0,
        height: 0,
    };

    public draw(): void {
        this.cameraStream = <HTMLVideoElement>document.createElement("video");
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

        this.recorder = new Recorder(this.Camera.getStream());

        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });

        this.pressHold = new PressHold(
            <HTMLButtonElement>this.pressHoldBtn,
            () => {
                this.recorder.start();
                this.recordDuration = (new Date).getTime()
            },
            () => {
                this.recorder.stop().then((chunks: Blob[]) => {
                    this.pressHoldBtn.className = "inactive";
                    if (!this.isReadyToSend()) {
                        this.eventManager.dispatchEvent('error', {
                            errorCode: "invalid_recording",
                            errorMessage: "video is less than 1 second!",
                        });
                        return;
                    }

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
        this.recorder.cleanup();
        this.pressHold.cleanup();
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

    isReadyToSend(): boolean {
        return (new Date).getTime() - this.recordDuration > 1000
    }
}