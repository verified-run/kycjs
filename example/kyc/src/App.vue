<template>
  <div id="app">
      <div id="session-form">
    <input id="session-key" name="session-key" type="text" placeholder="F8751D81-C4AD-471E-A0F5-CC8C48677A55">
    <form>
      <input type="radio" name="env" value="normal" id="env-normal" checked>
      <label for="env-normal">normal</label>
      <input type="radio" name="env" value="low-performance" id="env-low-performance">
      <label for="env-low-performance">low-performance</label>
    </form>
    <button id="session-btn">use</button>
  </div>

  <div id="kyc-modal" class="modal">
    <div id="container">
      <progress id="capture-progress" max="100" value="0">0%</progress>
      <ul id="text-box"></ul>
      <div id="kyc-container" class="row"></div>
      <ul id="jobs-list"></ul>
      <div id="countdown"></div>
      <!-- <div v-if="debug" class="col-6" id="debug-canvas"></div> -->
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { KYC } from '../../../src/KYC'
import { KycEventRecording, KycEventCaptureProgress, KycEventError, KycEventFinish, KycEventJobs, KycEventLoading, KycEventNextJob, KycEventValidating } from "../../../src/EventManager";
    export type EnvironmentName = "normal" | "low-performance" | "file-only";

@Component
export default class App extends Vue {
  init() {
    const sessionBtn = <HTMLButtonElement>document.getElementById("session-btn")
    const sessionInput = <HTMLInputElement>document.getElementById("session-key");
    const sessionEnvRadio = document.querySelectorAll<HTMLInputElement>('input[name="env"]');

    let hash = (new URL(document.URL)).hash;

    if (hash) {
        sessionInput.value = hash.substring(1)
    }
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


        function closeModel() {
            modal.style.display = "none";
            kyc.cleanup();
        }
        modal.style.display = "block";
        window.onclick = function (event: any) {
            if (event.target == modal) {
                closeModel();
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
        // let countDownInterval: NodeJS.Timer;
        let countDownInterval: any;

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
            closeModel();
            alert('finish');
        })

    }
  }

  mounted() {
    this.init()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
