import { Verification } from "./Verification";

export class Finish extends Verification {

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('finish', {});
    }

    async cleanup(): Promise<void> {
    }

    isJob(): boolean {
        return true;
    }
}