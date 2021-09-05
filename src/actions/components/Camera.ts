import { facingMode, VideoElement } from '../../types'
export class Camera {
    private cameraStream!: MediaStream;
    constructor(private video: VideoElement) { }

    async setup(facingMode: facingMode = 'user'): Promise<VideoElement> {
        this.video.muted = true;
        this.video.srcObject =
            this.cameraStream =
            await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: { facingMode },
            });

        return new Promise((resolve) => {
            if (!this.video) {
                return;
            }
            this.video.onloadeddata = () => {
                if (!this.video) {
                    return;
                }
                this.video.play();
                resolve(this.video);
            };
        });
    }

    cleanup(): void {
        this.cameraStream.getTracks().forEach(track => track.stop())
        this.video.pause();
        this.video.srcObject = null;
    }
    getStream(): MediaStream {
        return this.cameraStream;
    }
}