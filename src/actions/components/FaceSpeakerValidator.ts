import { FaceFeatureExtractor } from "./FaceFeatureExtractor";

export class FaceSpeakerValidator {
    protected validationInterval: NodeJS.Timer;
    protected recordDuration: number;

    constructor(
        private faceFeatureExtractor: FaceFeatureExtractor,
    ) { }

    start(stop: () => void) {
        this.recordDuration = (new Date).getTime()
        this.validationInterval = setInterval(() => {
            if (this.faceFeatureExtractor.getImageInfo().outOfView) {
                clearInterval(this.validationInterval);
                stop();
            }
        }, 40)
    }

    isReadyToSend(): boolean {
        return (new Date).getTime() - this.recordDuration > 1000
    }

    cleanup() {
        clearInterval(this.validationInterval);
        this.validationInterval = null;
        this.recordDuration = null;
    }
}