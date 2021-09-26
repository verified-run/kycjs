import { WS } from "./WS";
import { VideoElement } from './types'
import { VerificationManager } from "./VerificationManager";
import { EventManager, EventCb, eventName } from "./EventManager";
export class KYC {
    private ws: WS;
    private eventManager = new EventManager;
    private cameraStream: VideoElement;
    private controlContainer: HTMLElement;
    constructor(
        sessionId: string,
        container: HTMLElement,
    ) {
        this.createContainer(container)
        this.ws = new WS(sessionId, 'ws://127.0.0.1:8020/ws');

        new VerificationManager(
            this.ws,
            this.cameraStream,
            this.controlContainer,
            this.eventManager
        )
        this.ws.start()
    }

    registerEvent(name: eventName, cb: EventCb) {
        this.eventManager.registerEvent(name, cb);
    }

    createContainer(container: HTMLElement){
        this.cameraStream = <VideoElement>document.createElement("video");
        this.cameraStream.className = "camera-stream"
        container.appendChild(this.cameraStream)
        this.controlContainer = <HTMLDivElement>document.createElement("div");
        this.controlContainer.className = "action-box"
        container.appendChild(this.controlContainer)
    }
}
