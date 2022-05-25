export interface KycEventError {
    errorCode: string,
    errorMessage: string,
}
export interface KycEventNextJob {
    job: string,
    whatToSay?: string,
    placeholderUrl?: string,
}
export interface KycEventCaptureProgress {
    job: string,
    progress: number,
}
export interface KycEventJob {
    id: string,
    action: string,
    verified: boolean,
}
export interface KycEventJobs {
    jobs: KycEventJob[],
}
export interface KycEventFinish {}

export interface KycEventLoading {
    isLoaded: boolean,
}
export interface KycEventValidating {
    isValidating: boolean,
}
export interface KycEventCameraCountdown {
    countdown: number,
}
interface EventMap {
    "error": KycEventError;
    "next_job": KycEventNextJob;
    "capture_progress": KycEventCaptureProgress;
    "jobs": KycEventJobs;
    "finish": KycEventFinish;
    "loading": KycEventLoading;
    "validating": KycEventValidating;
    "countdown": KycEventCameraCountdown;
}

export interface EventList {
    [key: string]: (e: any) => void;
}

export class EventManager {
    private events: EventList = {};

    addListener<K extends keyof EventMap>(type: K, listener: (ev: EventMap[K]) => void): void{
        this.events[type] = listener
    }

    public dispatchEvent<K extends keyof EventMap>(type: K, e: EventMap[K]) {
        if (!this.events[type]) {
            console.log(`event ${type} is not registered!`);
            return;
        }
        this.events[type](e);
    }
}
