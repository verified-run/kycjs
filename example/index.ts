import "./sentry";
import { KYC } from '../src/KYC'
import "./index.css";

const sessionBtn = <HTMLButtonElement>document.getElementById("session-btn")
const sessionInput = <HTMLInputElement>document.getElementById("session-key");
const sessionEnvRadio = document.querySelectorAll<HTMLInputElement>('input[name="env"]');

let hash = (new URL(document.URL)).hash;

if (hash) {
    sessionInput.value = hash.substring(1)
}
export type EnvironmentName = "normal" | "low-performance" | "file-only"

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

    kyc.eventManager.addListener('error', (e) => {
        alert(`${e.errorCode} => ${e.errorMessage}`);
    })

    kyc.eventManager.addListener('next_job', (e) => {

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
    kyc.eventManager.addListener('capture_progress', (e) => {
        let x = <HTMLProgressElement>document.getElementById("capture-progress");
        x.value = e.progress
    })
    kyc.eventManager.addListener('jobs', (e) => {
        let x = <HTMLProgressElement>document.getElementById("jobs-list");
        while (x.lastElementChild) x.removeChild(x.lastElementChild);
        e.jobs.forEach((item) => {
            let liEl = document.createElement('li');
            liEl.innerText = `${item.id}. ${item.action}:${item.verified}`;
            x.appendChild(liEl);
        })
    })

    kyc.eventManager.addListener('loading', (e) => {
        let container = <HTMLProgressElement>document.getElementById("container");

        if (!e.isLoaded) {
            container.classList.add('loading');
            return;
        }
        container.classList.remove('loading');
    })
    kyc.eventManager.addListener('finish', (e) => {
        alert('finish');
        kyc.cleanup()
    })

}
