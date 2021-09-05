import { FaceText } from "./FaceText";

export class FaceAgreement extends FaceText {
    protected dispatchJobInfo(){
        this.eventManager.dispatchEvent('next_job', {
            job:"face_agreement",
            whatToSay:this.serverRequest.faceAgreement.text,
        })
    }

}