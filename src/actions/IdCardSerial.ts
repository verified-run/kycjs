import { Verification } from "./Verification";
import { ClientRequest } from "../wsMessages";

export class IdCardSerial extends Verification {
    protected controlContainer: HTMLElement;
    protected captureBtn: HTMLButtonElement;
    protected captureInput: HTMLInputElement;

    public draw(): void {
        this.controlContainer = <HTMLDivElement>document.createElement("div");
        this.controlContainer.className = "action-box"
        this.container.appendChild(this.controlContainer)
        this.captureInput = <HTMLInputElement>document.createElement("input");
        this.controlContainer.appendChild(this.captureInput)
        this.captureBtn = <HTMLButtonElement>document.createElement("button");
        this.captureBtn.innerText = 'send';
        this.controlContainer.appendChild(this.captureBtn)

    }

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('loading', {
            isLoaded: false,
        });

        this.dispatchJobInfo();

        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });

        this.retry();
    }

    public retry(): void {
        this.captureBtn.addEventListener('click', (ev: MouseEvent) => {
            let message = this.response(this.captureInput.value)
            let buffer = ClientRequest.encode(message).finish();
            this.ws.send(buffer)
        });
    }

    async cleanup(): Promise<void> {
        this.controlContainer.remove();
    }

    isJob(): boolean {
        return true;
    }

    protected dispatchJobInfo() {
        this.eventManager.dispatchEvent('next_job', {
            job: "id_card_serial",
        });
    }

    protected response(serial: string): ClientRequest {
        return ClientRequest.create({
            id: this.serverRequest.id,
            idCardSerial: {
                serial,
            }
        });
    }
}