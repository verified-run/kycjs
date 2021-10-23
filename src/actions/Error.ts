import { Verification } from "./Verification";

export class Error extends Verification {

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('error', {
            errorCode: this.serverRequest.error.code,
            errorMessage: this.serverRequest.error.Message,
        })
    }

    async cleanup(): Promise<void> {
    }

    isJob(): boolean {
        return false;
    }
}