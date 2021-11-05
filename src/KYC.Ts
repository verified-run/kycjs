import { WS } from "./WS";
import { VerificationManager } from "./VerificationManager";
import { EventManager } from "./EventManager";
export class KYC {
    private ws: WS;
    public eventManager = new EventManager;
    constructor(
        sessionId: string,
        container: HTMLElement,
    ) {
        this.ws = new WS(sessionId);
        new VerificationManager(this.ws, container, this.eventManager)
        this.ws.start()
    }


    cleanup() {
        this.ws.close()
    }
}
