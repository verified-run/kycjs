import { VerificationList } from "../actions/Verification";
import { FaceText } from "../actions/alternative/lowPerformance/FaceText";
import { IdCard } from "../actions/alternative/lowPerformance/IdCard";
import { FaceAgreement } from "../actions/alternative/lowPerformance/FaceAgreement";
import { Jobs } from "../actions/Jobs";
import { Finish } from "../actions/Finish";
import { Error } from "../actions/Error";
import { Environment } from "./Environment";


export class LowPerformance extends Environment {
    protected actions: VerificationList = {
        "faceAgreement": FaceAgreement,
        "faceText": FaceText,
        "idCard": IdCard,
        "jobs": Jobs,
        "finish": Finish,
        "error": Error,
    }
}