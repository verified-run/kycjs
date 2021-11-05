import { EventManager } from "../EventManager"
import { VideoElement } from "../types"
import { WS } from "../WS"
import { ServerRequest } from "../wsMessages"

type ValidatorConstructor = {
    new(serverRequest: ServerRequest, ws: WS, container: HTMLElement, eventManager: EventManager): Verification;
}

export interface VerificationList {
    [key: string]: ValidatorConstructor;
}

export abstract class Verification {
    abstract initialize(): void;
    abstract cleanup(): void;
    abstract isJob(): boolean;


    constructor(
        protected serverRequest: ServerRequest,
        protected ws: WS,
        protected container: HTMLElement,
        protected eventManager: EventManager
    ) {
        this.draw()
    }

    getJobId(): string {
        return this.serverRequest.id;
    }

    protected draw(): void {

    }
    public retry(): void {

    }
}
