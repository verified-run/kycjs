import { WS } from "./WS";
import { VideoElement } from './types'
import { VerificationManager } from "./VerificationManager";
import { EventManager } from "./EventManager";
export class KYC {
    private ws: WS;
    public eventManager = new EventManager;
    private cameraStream: VideoElement;
    private controlContainer: HTMLElement;
    constructor(
        sessionId: string,
        container: HTMLElement,
    ) {
        this.createContainer(container)
        this.ws = new WS(sessionId,'ws://192.168.1.103:8080/ws');

        new VerificationManager(
            this.ws,
            this.cameraStream,
            this.controlContainer,
            this.eventManager
        )
        this.ws.start()
    }

    private createContainer(container: HTMLElement){
        this.cameraStream = <VideoElement>document.createElement("video");
        this.cameraStream.className = "camera-stream"
        container.appendChild(this.cameraStream)
        this.controlContainer = <HTMLDivElement>document.createElement("div");
        this.controlContainer.className = "action-box"
        container.appendChild(this.controlContainer)
    }

    cleanup(){
        this.cameraStream.remove()
        this.controlContainer.remove();
        this.ws.close()
    }
}
