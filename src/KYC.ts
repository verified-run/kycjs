import { WS } from "./WS";
import { VerificationManager } from "./VerificationManager";
import { EventManager } from "./EventManager";
import { EnvironmentName } from "./types";

export class KYC {
    private ws: WS;
    private vm: VerificationManager;
    public eventManager = new EventManager;
    constructor(
        sessionId: string,
        container: HTMLElement,
        environmentName: EnvironmentName = "normal"
    ) {
        this.ws = new WS(sessionId,"wss://hoomanna.com/ws");
        this.vm = new VerificationManager(this.ws, container, this.eventManager, environmentName)
        this.ws.start()
    }


    cleanup() {
        this.ws.close();
        this.vm.close();
    }
}
