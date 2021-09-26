import { Verification, VerificationList } from "./actions/Verification";
import { FaceText } from "./actions/FaceText";
import { IdCard } from "./actions/IdCard";
import { VideoElement } from "./types";
import { WS } from "./WS";
import { ServerRequest } from "./wsMessages";
import { FaceAgreement } from "./actions/FaceAgreement";
import { EventManager } from "./EventManager";


export class VerificationManager {

    private actions: VerificationList = {
        "faceAgreement": FaceAgreement,
        "faceText": FaceText,
        "idCard": IdCard,
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
        if (this.currentAction) this.currentAction.cleanup()
        this.currentAction = new this.actions[actionName](
            serverRequest,
            this.ws,
            this.cameraStream,
            this.controlContainer,
            this.eventManager
        )

        this.currentAction.initialize()
    }
}