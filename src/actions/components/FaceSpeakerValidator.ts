import { FaceFeatureExtractor } from "./FaceFeatureExtractor";
import { ImageInfo } from "../../types";

export class FaceSpeakerValidator {
    protected validationInterval: NodeJS.Timer;
    protected recordDuration: number;

    constructor(
        private faceFeatureExtractor: FaceFeatureExtractor,
        private validatorCondition: (ffe: FaceFeatureExtractor) => boolean
            = (ffe: FaceFeatureExtractor) => ffe.getImageInfo().outOfView
    ) { }

    start(invalid: () => void, valid?: (ii: ImageInfo) => void) {
        this.recordDuration = (new Date).getTime()
        this.validationInterval = setInterval(() => {
            if (this.validatorCondition(this.faceFeatureExtractor)) {
                invalid();
                return;
            }
            if(valid) valid(this.faceFeatureExtractor.getImageInfo());
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