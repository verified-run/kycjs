import { KycEvent,KycEventError, KycEventNextJob } from '../src/EventManager'
import { KYC } from '../src/KYC'

let cameraStream = <HTMLVideoElement>document.getElementById("camera-stream")
let controlContainer = <HTMLElement>document.getElementsByClassName("action-box")[0]

let kyc = new KYC(
    cameraStream,
    controlContainer,
)

kyc.registerEvent('error', (e: KycEventError) => {
    alert(`${e.errorCode} => ${e.errorMessage}`);
})
kyc.registerEvent('next_job', (e: KycEventNextJob) => {
    alert(`${e.job} => plz say "${e.whatToSay}"`);
})