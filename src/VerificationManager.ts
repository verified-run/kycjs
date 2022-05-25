import { Verification } from "./actions/Verification";
import { WS } from "./WS";
import { ServerRequest } from "./wsMessages";
import { EventManager } from "./EventManager";
import { EnvironmentName } from "./types";
import { Environment } from "./Environments/Environment";
import { Normal } from "./Environments/Normal";
import { LowPerformance } from "./Environments/LowPerformance";
import { FileOnly } from "./Environments/FileOnly";

export class VerificationManager {
    private currentAction: Verification | null = null;
    private environment: Environment
    constructor(
        protected ws: WS,
        protected container: HTMLElement,
        protected eventManager: EventManager,
        protected environmentName: EnvironmentName
    ) {
        this.getEnv()
        for (let key in this.environment.getVerificationList()) {
            this.ws.registerEvent(key, (serverRequest: ServerRequest) => {
                this.execute(key, serverRequest)
            })
        }
    }

    execute(actionName: string, serverRequest: ServerRequest) {
        let action = new (this.environment.getVerification(actionName))(
            serverRequest,
            this.ws,
            this.container,
            this.eventManager
        )
        if (action.isJob()) {
            if (this.currentAction) this.currentAction.cleanup();
            this.currentAction = action;
        }

        if (actionName == 'error') {
            this.currentAction.retry();
        }
        
        this.eventManager.dispatchEvent('validating', {
            isValidating: false,
        });

        action.initialize();
    }
    getEnv() {
        switch (this.environmentName){
            case 'normal':
                this.environment = new Normal
            break
            case 'low-performance':
                this.environment = new LowPerformance
            break
            case 'file-only':
                this.environment = new FileOnly
            break
        }
    }
    close():void{
        if (this.currentAction) {
            console.dir(this.currentAction)
            this.currentAction.cleanup();
        }
    }
}