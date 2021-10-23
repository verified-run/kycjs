import { Verification } from "./Verification";
import { Camera } from "./components/Camera";
import { FaceDetectorBlazeFace } from "./components/FaceDetectorBlazeFace";
import { FaceFeatureExtractor } from "./components/FaceFeatureExtractor";
import { FaceDetectorInterface } from "./components/FaceDetectorInterface";
import { ClientRequest } from "../wsMessages";
import { FaceSpeakerValidator } from "./components/FaceSpeakerValidator";
import { ImageInfo } from "../types";

export class IdCard extends Verification {
    protected Camera: Camera;
    protected faceDetector: FaceDetectorInterface;
    protected faceFeatureExtractor: FaceFeatureExtractor;
    protected faceSpeakerValidator: FaceSpeakerValidator;
    protected canvasBox = {
        width: 150,
        height: 200,
    };
    protected videoBox = {
        width: 0,
        height: 0,
    };

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('loading', {
            isLoaded: false,
        });

        this.dispatchJobInfo();
        this.Camera = new Camera(this.cameraStream);
        await this.Camera.setup("environment");

        this.videoBox = {
            width: this.cameraStream.videoWidth,
            height: this.cameraStream.videoHeight,
        };

        this.faceDetector = new FaceDetectorBlazeFace(this.cameraStream);
        await this.faceDetector.Load()
        this.faceFeatureExtractor = new FaceFeatureExtractor(
            this.faceDetector,
            this.canvasBox,
            this.videoBox,
        );
        this.faceFeatureExtractor.getImageInfo()
        this.faceSpeakerValidator = new FaceSpeakerValidator(
            this.faceFeatureExtractor,
            (ffe: FaceFeatureExtractor) => {
                const faceInfo = ffe.getImageInfo();
                return !((100 / this.videoBox.width * faceInfo.width > 15)
                    && faceInfo.centerX < this.videoBox.width / 3
                    && !faceInfo.outOfView);
            }
        );
        this.eventManager.dispatchEvent('loading', {
            isLoaded: true,
        });

        let validCounter = 0;
        this.faceSpeakerValidator.start(
            () => {
                validCounter = 0;
                this.eventManager.dispatchEvent('capture_progress', {
                    job: "id_card",
                    progress: validCounter,
                });

            },
            async (ii: ImageInfo) => {
                validCounter++;
                if (validCounter % 10 == 0)
                    this.eventManager.dispatchEvent('capture_progress', {
                        job: "id_card",
                        progress: validCounter,
                    });

                if (validCounter > 100) {
                    this.faceSpeakerValidator.cleanup()
                    let blob = await this.Camera.capture();
                    let reader = new FileReader();
                    reader.readAsArrayBuffer(blob);
                    reader.onloadend = () => {
                        let message = this.response(<ArrayBuffer>reader.result, ii)
                        let buffer = ClientRequest.encode(message).finish();
                        this.ws.send(buffer)
                    };
                }
            }
        );

    }

    async cleanup(): Promise<void> {
        this.Camera.cleanup();
        this.faceDetector.cleanup();
        this.faceFeatureExtractor.cleanup();
        this.faceSpeakerValidator.cleanup();
    }

    isJob(): boolean {
        return true;
    }

    protected dispatchJobInfo() {
        this.eventManager.dispatchEvent('next_job', {
            job: "id_card",
            placeholderUrl: this.serverRequest.idCard.placeholder,
        });
    }

    protected response(res: ArrayBuffer, faceBox: ImageInfo): ClientRequest {
        return ClientRequest.create({
            id: this.serverRequest.id,
            idCard: {
                image: new Uint8Array(res),
                faceBox: {
                    x: faceBox.centerX,
                    y: faceBox.centerY,
                    h: faceBox.height,
                    w: faceBox.width,
                }
            }
        });
    }
}