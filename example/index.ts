import { KycEventCaptureProgress, KycEventError, KycEventNextJob } from '../src/EventManager'
import { KYC } from '../src/KYC'
import "./index.css";

let container = <HTMLElement>document.getElementById("kyc-container")

let kyc = new KYC(
    "87654c6e-3c40-4b5e-8d55-7a348bb85a3e",
    container,
)

kyc.registerEvent('error', (e: KycEventError) => {
    alert(`${e.errorCode} => ${e.errorMessage}`);
})
kyc.registerEvent('next_job', (e: KycEventNextJob) => {
    switch(e.job){
        case "face_agreement":
        case "face_text":
            alert(`${e.job} => plz say "${e.whatToSay}"`);
            return;
        case "id_card":
            alert(`${e.job} => hold your id card in front of camera`);
            return;
    }
})
kyc.registerEvent('capture_progress', (e: KycEventCaptureProgress) => {
    let x = <HTMLProgressElement>document.getElementById("capture-progress");
    x.value = e.progress
})