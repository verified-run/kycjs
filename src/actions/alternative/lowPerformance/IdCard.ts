import { Verification } from "../.././Verification";
import { Camera } from "../.././components/Camera";
import { ClientRequest } from "../../../wsMessages";

export class IdCard extends Verification {
    protected Camera: Camera;
    protected cameraStream: HTMLVideoElement;
    protected controlContainer: HTMLElement;
    protected captureBtn: HTMLButtonElement;
    
    public draw(): void {
        this.cameraStream = <HTMLVideoElement>document.createElement("video");
        this.cameraStream.autoplay = true;
        this.cameraStream.muted = true;
        this.cameraStream.controls = false;
        this.cameraStream.playsInline = true;
        this.cameraStream.className = "camera-stream"
        this.container.appendChild(this.cameraStream)
        this.controlContainer = <HTMLDivElement>document.createElement("div");
        this.controlContainer.className = "action-box"
        this.container.appendChild(this.controlContainer)
        this.captureBtn = <HTMLButtonElement>document.createElement("button");
        this.captureBtn.innerText = 'capture';
        this.controlContainer.appendChild(this.captureBtn)
    }

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('loading', {
            isLoaded: false,
        });

        this.dispatchJobInfo();
        this.Camera = new Camera(this.cameraStream);
        await this.Camera.setup("environment");

        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });
        this.captureBtn.addEventListener('click',async (ev:MouseEvent)=>{
            let blob = await this.Camera.capture();
            let reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onloadend = () => {
                let message = this.response(<ArrayBuffer>reader.result)
                let buffer = ClientRequest.encode(message).finish();
                this.ws.send(buffer)
            };
        })

    }
    

    async cleanup(): Promise<void> {
        this.Camera.cleanup();
        this.cameraStream.remove()
        this.controlContainer.remove();
    }

    isJob(): boolean {
        return true;
    }

    protected dispatchJobInfo() {
        this.eventManager.dispatchEvent('next_job', {
            job: "id_card",
            placeholderUrl: this.serverRequest.idCard.placeholder,
        });
    }

    protected response(res: ArrayBuffer): ClientRequest {
        return ClientRequest.create({
            id: this.serverRequest.id,
            idCard: {
                image: new Uint8Array(res),
                faceBox: null
            }
        });
    }
}