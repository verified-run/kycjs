import { ClientRequest } from "../../../wsMessages";
import { FaceText } from "./FaceText";

export class FaceAgreement extends FaceText {
    protected dispatchJobInfo(){
        this.eventManager.dispatchEvent('next_job', {
            job:"face_agreement",
            whatToSay:this.serverRequest.faceAgreement.text,
        })
    }

    protected response(res: ArrayBuffer):ClientRequest {
        return ClientRequest.create({
            id: this.serverRequest.id,
            faceAgreement: { video: new Uint8Array(res) }
        });
    }
}