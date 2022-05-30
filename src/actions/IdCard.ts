import { Verification } from "./Verification";
import { Camera } from "./components/Camera";
import { Recorder } from "./components/Recorder";
import { FaceDetectorBlazeFace } from "./components/FaceDetectorBlazeFace";
import { FaceFeatureExtractor } from "./components/FaceFeatureExtractor";
import { FaceDetectorInterface } from "./components/FaceDetectorInterface";
import { ClientRequest } from "../wsMessages";
import { FaceSpeakerValidator } from "./components/FaceSpeakerValidator";
import { ImageInfo } from "../types";

export class IdCard extends Verification {
    protected Camera: Camera;
    protected recorder: Recorder;
    protected faceDetector: FaceDetectorInterface;
    protected faceFeatureExtractor: FaceFeatureExtractor;
    protected faceSpeakerValidator: FaceSpeakerValidator;
    protected cameraStream: HTMLVideoElement;
    protected controlContainer: HTMLElement;
    protected canvasBox = {
        width: 150,
        height: 200,
    };
    protected videoBox = {
        width: 0,
        height: 0,
    };

    public draw(): void {
        this.cameraStream = <HTMLVideoElement>document.createElement("video");
        this.cameraStream.autoplay = true;
        this.cameraStream.muted = true;
        this.cameraStream.controls = false;
        this.cameraStream.controls = false;
        this.cameraStream.playsInline = true;
        this.cameraStream.className = "camera-stream"
        this.container.appendChild(this.cameraStream)
        this.controlContainer = <HTMLDivElement>document.createElement("div");
        this.controlContainer.className = "action-box"
        this.container.appendChild(this.controlContainer)
    }

    async initialize(): Promise<void> {
        this.eventManager.dispatchEvent('loading', {
            isLoaded: false,
        });

        this.dispatchJobInfo();
        this.Camera = new Camera(this.cameraStream);
        await this.Camera.setup("environment");
        let stream = this.Camera.getStream();
        stream.removeTrack(stream.getAudioTracks()[0])
        this.recorder = new Recorder(stream, {
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 1000000,
        });

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

        this.retry();
    }

    public retry(): void {
        let validCounter = 0;
        this.eventManager.dispatchEvent('capture_progress', {
            job: "id_card",
            progress: 0,
        });

        this.faceSpeakerValidator.start(
            () => {
                this.recorder.stop();
                validCounter = 0;
                this.eventManager.dispatchEvent('capture_progress', {
                    job: "id_card",
                    progress: validCounter,
                });

            },
            async (ii: ImageInfo) => {
                if (validCounter === 0) {
                    this.recorder.start();
                }
                validCounter++;
                if (validCounter % 10 == 0)
                    this.eventManager.dispatchEvent('capture_progress', {
                        job: "id_card",
                        progress: validCounter * 2,
                    });

                if (validCounter > 50) {
                    validCounter = 0;
                    this.eventManager.dispatchEvent('capture_progress', {
                        job: "id_card",
                        progress: validCounter,
                    });
                    this.faceSpeakerValidator.cleanup();
                    this.recorder.stop().then((chunks: Blob[]) => {
                        this.eventManager.dispatchEvent('validating', {
                            isValidating: true,
                        });

                        let blob = new Blob(chunks, { type: "video/mp4;" });
                        let reader = new FileReader();
                        reader.readAsArrayBuffer(blob);
                        reader.onloadend = () => {
                            let message = this.response(<ArrayBuffer>reader.result, ii)
                            let buffer = ClientRequest.encode(message).finish();
                            this.ws.send(buffer)
                        };
                    });
                }
            }
        );
    }

    async cleanup(): Promise<void> {
        if (this.Camera) this.Camera.cleanup();
        if (this.faceDetector) this.faceDetector.cleanup();
        if (this.faceFeatureExtractor) this.faceFeatureExtractor.cleanup();
        if (this.faceSpeakerValidator) this.faceSpeakerValidator.cleanup();
        this.cameraStream.remove()
        this.controlContainer.remove();
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