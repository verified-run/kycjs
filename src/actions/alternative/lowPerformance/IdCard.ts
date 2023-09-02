import { Verification } from "../.././Verification";
import { Camera } from "../.././components/Camera";
import { ClientRequest } from "../../../wsMessages";
import { Recorder } from "../../components/Recorder";

export class IdCard extends Verification {
    protected Camera: Camera;
    protected recorder: Recorder;
    protected cameraStream: HTMLVideoElement;
    protected controlContainer: HTMLElement;
    protected captureBtn: HTMLButtonElement;
    protected recordInterval: number;
    
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
        let stream = this.Camera.getStream();
        stream.removeTrack(stream.getAudioTracks()[0])
        this.recorder = new Recorder(stream, {
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 1000000,
        });

        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });
        this.captureBtn.addEventListener('click',async (ev:MouseEvent)=>{
            this.recorder.start();
            let validCounter = 0;
            this.recordInterval = window.setInterval(async ()=>{
                if(validCounter > 50){
                    clearInterval(this.recordInterval);
                    validCounter = 0;
                    this.recorder.stop().then((chunks: Blob[]) => {
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
                }
                this.eventManager.dispatchEvent('capture_progress', {
                    job: "id_card",
                    progress: validCounter * 2,
                });
                validCounter++;
            }, 100);

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