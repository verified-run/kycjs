import { facingMode } from '../../types'
export class Camera {
    private cameraStream!: MediaStream;
    constructor(private video: HTMLVideoElement) { }

    async setup(facingMode: facingMode = 'user'): Promise<HTMLVideoElement> {
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
                // this.video.play();
                resolve(this.video);
            };
        });
    }

    capture(): Promise<Blob> {
        return new Promise((resolve) => {
            var canvas = document.createElement('canvas');
            canvas.width = this.video.videoWidth;
            canvas.height = this.video.videoHeight;
            canvas.getContext('2d')?.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
            canvas.toBlob((blob) => {
                resolve(<Blob>blob);
            });
        })
    }

    cleanup(): void {
        if(this.cameraStream)
            this.cameraStream.getTracks().forEach(track => track.stop())
        this.video.pause();
        this.video.srcObject = null;
    }
    getStream(): MediaStream {
        return this.cameraStream;
    }
}