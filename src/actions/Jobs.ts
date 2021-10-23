import { ServerRequest } from "../wsMessages";
import { Verification } from "./Verification";

export class Jobs extends Verification {

    async initialize(): Promise<void> {

        this.eventManager.dispatchEvent('jobs', {
            jobs: this.serverRequest.jobs.job.map((item: ServerRequest.IJob) => {
                return {
                    id: item.id,
                    action: item.action,
                    verified: item.verified
                }
            }),
        });
    }

    async cleanup(): Promise<void> {
    }
    
    isJob(): boolean {
        return false;
    }
}