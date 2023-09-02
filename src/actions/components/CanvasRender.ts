import { CanvasElement, BoxSize } from "../../types";
import { FaceFeatureExtractor } from "./FaceFeatureExtractor";


export class CanvasRender  {
    private ctx: CanvasRenderingContext2D;
    private canvas: CanvasElement;

    private isActive = true;

    constructor(
        // private video: HTMLVideoElement,
        private video: any,
        private canvasSize: BoxSize,
        private faceFeatureExtractor: FaceFeatureExtractor
    ) {
        this.canvas = <CanvasElement>document.createElement("CANVAS");

        this.canvas.width = this.canvasSize.width;
        this.canvas.height = this.canvasSize.height;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        this.debug()
        this.renderLoop()
    }
    debug() {
        const debugElement = document.getElementById('debug-canvas')
        if(debugElement){
            debugElement.appendChild(this.canvas)
        }
    }

    cleanup(){
        this.isActive = false;
        this.canvas.remove();
    }

    getStream(): MediaStream {
        return this.canvas.captureStream();
    }


    private renderImage(
        image: CanvasImageSource,
        x: number,
        y: number,
        width: number,
        height: number,
        centerX: number,
        centerY: number,
        angle: number,
        scale: number
    ) {
        if (!this.ctx) return;
        // save context's current transform state
        this.ctx.save();

        // move context's origin to image position
        this.ctx.translate(x, y);

        // apply transformations
        this.ctx.rotate(angle);
        this.ctx.scale(scale, scale);

        // draw image centered on its position
        this.ctx.drawImage(image, -centerX, -centerY, width, height);

        // restore context's previous transform state
        this.ctx.restore();
    }

    private async renderLoop() {
        if (!this.isActive) return;

        this.ctx.globalAlpha = 1;
        // this.ctx.fillStyle = "white";
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const imageInfo = this.faceFeatureExtractor.getImageInfo()
        this.renderImage(
            <HTMLVideoElement>this.video,
            this.canvas.width / 2,
            this.canvas.height / 2,
            <number>this.video?.videoWidth,
            <number>this.video?.videoHeight,
            imageInfo.centerX,
            this.canvas.height - imageInfo.centerY <
                this.canvas.height / 2
                ? imageInfo.centerY
                : this.canvas.height / 2,
            imageInfo.angle,
            imageInfo.scale
        );

        if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
            this.video.requestVideoFrameCallback(() => this.renderLoop());
            return
        }
        setTimeout(() => this.renderLoop(), 40);
    }

}