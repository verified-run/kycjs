export interface KycEventError {
    errorCode: string,
    errorMessage: string,
}
export interface KycEventNextJob {
    job: string,
    whatToSay: string,
}
export type eventName = 'error' | 'next_job';
export type KycEvent = KycEventError | KycEventNextJob;
export type EventCb = (e: KycEvent) => void;

export interface EventList {
    [key: string]: EventCb;
}

export class EventManager {
    private events: EventList = {};

    public registerEvent(name: eventName, cb: EventCb) {
        this.events[name] = cb
    }

    public dispatchEvent(name: eventName, e: KycEvent) {
        if (!this.events[name]){
            console.log(`event ${name} is not registered!`);
            return;
        }
        console.log(`dispatching event: ${name}`);
        this.events[name](e);
    }
}
