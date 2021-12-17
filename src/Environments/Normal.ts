import { VerificationList } from "../actions/Verification";
import { FaceText } from "../actions/FaceText";
import { IdCard } from "../actions/IdCard";
import { FaceAgreement } from "../actions/FaceAgreement";
import { Jobs } from "../actions/Jobs";
import { Finish } from "../actions/Finish";
import { Error } from "../actions/Error";
import { Environment } from "./Environment";


export class Normal extends Environment {
    protected actions: VerificationList = {
        "faceAgreement": FaceAgreement,
        "faceText": FaceText,
        "idCard": IdCard,
        "jobs": Jobs,
        "finish": Finish,
        "error": Error,
    }
}