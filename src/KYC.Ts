import { WS } from "./WS";
import { VideoElement } from './types'
import { VerificationManager } from "./VerificationManager";
import { EventManager, EventCb,eventName } from "./EventManager";
export class KYC {
    private ws = new WS('hooman', 'ws://127.0.0.1:8020/ws');
    private eventManager = new EventManager;
    private cameraStream: VideoElement;
    constructor(
        cameraStream: HTMLVideoElement,
        private controlContainer: HTMLElement,
    ) {
        this.cameraStream = <VideoElement>cameraStream
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
}
