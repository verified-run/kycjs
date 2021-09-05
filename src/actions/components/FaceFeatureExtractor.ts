import { ImageInfo, BoxSize, NormalizedFace } from "../../types";
import { FaceDetectorInterface } from "./FaceDetectorInterface";

export class FaceFeatureExtractor {
    private imageInfo: ImageInfo = {
        outOfView: true,
        angle: 0,
        scale: 1,
        centerX: 0,
        centerY: 0,
        width: 0,
        height: 0,
    };

    private face!: NormalizedFace | null
    private isActive = true;


    constructor(
        private faceDetector: FaceDetectorInterface,
        private canvasBox: BoxSize,
        private videoBox: BoxSize,
    ) {
        this.calcFacePos()
     }


    getImageInfo(): ImageInfo {
        return this.imageInfo;
    }

    cleanup() {
        this.isActive = false;
    }

    private normalTransition(
        orgValue: number,
        newValue: number,
        threshold: number,
    ): number {
        let change = orgValue - newValue
        if (change < -threshold) {
            return orgValue - change / 2;
        }

        if (change > threshold) {
            return orgValue - change / 2;
        }
        return orgValue
    }

    private calcFacePos() {
        if (!this.isActive) return;

        this.face = this.faceDetector.getFace();

        if (!this.face) {
            this.imageInfo.outOfView = true;
            setTimeout(() => this.calcFacePos(), 40);
            return;
        }
        const landmarks = <number[][]>this.face.landmarks;
        const start = <[number, number]>this.face.topLeft;
        const end = <[number, number]>this.face.bottomRight;
        const size = [end[0] - start[0], end[1] - start[1]];

        this.imageInfo.outOfView
            = start[0] < 0 || end[0] > this.videoBox.width
            || start[1] < 0 || end[1] > this.videoBox.height;

        const a = landmarks[1][0] - landmarks[0][0];
        const b = landmarks[0][1] - landmarks[1][1];

        const hypot = Math.hypot(a, b);
        let sinOfAngleX = b / hypot;

        this.imageInfo.width = end[0] - start[0];
        this.imageInfo.height = end[1] - start[1];

        this.imageInfo.angle = this.normalTransition(
            this.imageInfo.angle,
            sinOfAngleX,
            0.1,
        );

        this.imageInfo.centerX = this.normalTransition(
            this.imageInfo.centerX,
            landmarks[2][0],
            10,
        );

        this.imageInfo.centerY = this.normalTransition(
            this.imageInfo.centerY,
            landmarks[2][1],
            10,
        );

        this.imageInfo.scale = this.normalTransition(
            this.imageInfo.scale,
            (1 / size[0]) * this.canvasBox.width,
            0.1,
        );
        setTimeout(() => this.calcFacePos(), 40);
    }

}