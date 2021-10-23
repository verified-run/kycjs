import { Verification, VerificationList } from "./actions/Verification";
import { FaceText } from "./actions/FaceText";
import { IdCard } from "./actions/IdCard";
import { VideoElement } from "./types";
import { WS } from "./WS";
import { ServerRequest } from "./wsMessages";
import { FaceAgreement } from "./actions/FaceAgreement";
import { EventManager } from "./EventManager";
import { Jobs } from "./actions/Jobs";
import { Finish } from "./actions/Finish";
import { Error } from "./actions/Error";


export class VerificationManager {

    private actions: VerificationList = {
        "faceAgreement": FaceAgreement,
        "faceText": FaceText,
        "idCard": IdCard,
        "jobs": Jobs,
        "finish": Finish,
        "error": Error,
    }

    private currentAction: Verification | null = null;

    constructor(
        protected ws: WS,
        protected cameraStream: VideoElement,
        protected controlContainer: HTMLElement,
        protected eventManager: EventManager
    ) {
        for (let key in this.actions) {
            this.ws.registerEvent(key, (serverRequest: ServerRequest) => {
                this.execute(key, serverRequest)
            })
        }
    }

    execute(actionName: string, serverRequest: ServerRequest) {
        
        if (this.currentAction && serverRequest.id == this.currentAction.getJobId()) {
            console.log('same job requested, no change needed.');
            return;
        };

        let action = new this.actions[actionName](
            serverRequest,
            this.ws,
            this.cameraStream,
            this.controlContainer,
            this.eventManager
        )
        if (action.isJob()) {
            if (this.currentAction) this.currentAction.cleanup();
            this.currentAction = action;
        }
        action.initialize();
    }
}