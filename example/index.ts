import "./index.css";
import { KYC } from '../src/KYC'
import { KycEventRecording, KycEventCaptureProgress, KycEventError, KycEventFinish, KycEventJobs, KycEventLoading, KycEventNextJob, KycEventValidating } from "../src/EventManager";

const sessionBtn = <HTMLButtonElement>document.getElementById("session-btn")
const sessionInput = <HTMLInputElement>document.getElementById("session-key");
const sessionEnvRadio = document.querySelectorAll<HTMLInputElement>('input[name="env"]');

let hash = (new URL(document.URL)).hash;

if (hash) {
    sessionInput.value = hash.substring(1)
}
export type EnvironmentName = "normal" | "low-performance" | "file-only"
var modal = <HTMLDivElement>document.getElementById("kyc-modal");

sessionBtn.onclick = () => {
    let selectedValue: EnvironmentName;
    for (let i in sessionEnvRadio) {
        if (sessionEnvRadio[i].checked) {
            selectedValue = <EnvironmentName>sessionEnvRadio[i].value;
            break;
        }
    }

    let sessionKey = sessionInput.value

    let container = <HTMLElement>document.getElementById("kyc-container")

    let kyc = new KYC(
        sessionKey,
        container,
        selectedValue
    )



    modal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            kyc.cleanup();
        }
    }


    kyc.eventManager.addListener('error', (e: KycEventError) => {
        alert(`${e.errorCode} => ${e.errorMessage}`);
    })

    kyc.eventManager.addListener('next_job', (e: KycEventNextJob) => {

        let textBox = <HTMLProgressElement>document.getElementById("text-box");

        switch (e.job) {
            case "face_agreement":
            case "face_text":
                textBox.innerText = `${e.job} => plz say "${e.whatToSay}"`
                return;
            case "id_card":
                textBox.innerText = `${e.job} => hold your id card in front of camera`
                return;
        }
    })
    kyc.eventManager.addListener('capture_progress', (e: KycEventCaptureProgress) => {
        let x = <HTMLProgressElement>document.getElementById("capture-progress");
        x.value = e.progress
    })

    kyc.eventManager.addListener('jobs', (e: KycEventJobs) => {
        let x = <HTMLProgressElement>document.getElementById("jobs-list");
        while (x.lastElementChild) x.removeChild(x.lastElementChild);
        e.jobs.forEach((item) => {
            let liEl = document.createElement('li');
            if (item.verified)
                liEl.classList.add("verified");
            liEl.innerText = `${item.id}. ${item.action}:${item.verified}`;
            x.appendChild(liEl);
        })
    })

    kyc.eventManager.addListener('loading', (e: KycEventLoading) => {
        let container = <HTMLProgressElement>document.getElementById("container");

        if (!e.isLoaded) {
            container.classList.add('loading');
            return;
        }
        container.classList.remove('loading');
    })

    kyc.eventManager.addListener('validating', (e: KycEventValidating) => {
        let container = <HTMLProgressElement>document.getElementById("container");

        if (e.isValidating) {
            container.classList.add('validating');
            return;
        }
        container.classList.remove('validating');
    })
    let countDownInterval: NodeJS.Timer;

    kyc.eventManager.addListener('recording', (e: KycEventRecording) => {
        let textBox = <HTMLProgressElement>document.getElementById("countdown");
        if(e.isRecording) {
            let startTime = new Date().getTime();
            countDownInterval = setInterval(() => {
                let time = new Date().getTime() - startTime;
                textBox.innerText = `${(time/1000).toFixed(2)}s`
            }, 16)
        } else {
            clearInterval(countDownInterval);
            textBox.innerText = ''
        }
    })
    kyc.eventManager.addListener('finish', (e: KycEventFinish) => {
        alert('finish');
        kyc.cleanup()
    })

}
