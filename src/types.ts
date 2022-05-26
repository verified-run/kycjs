export interface BoxSize {
    width: number;
    height: number;
}

export interface CanvasElement extends HTMLCanvasElement {
    captureStream(frameRate?: number): MediaStream;
}
export interface ImageInfo {
    outOfView: boolean;
    angle: number;
    scale: number;
    centerX: number;
    centerY: number;
    width: number;
    height: number;
}


export type facingMode = "user" | "environment"

export type EnvironmentName = "normal" | "low-performance" | "file-only"

export interface NormalizedFace {
    /** The upper left-hand corner of the face. */
    topLeft: [number, number];
    /** The lower right-hand corner of the face. */
    bottomRight: [number, number];
    /** Facial landmark coordinates. */
    // landmarks?: number[][];
    landmarks: [
        [number, number], // right eye
        [number, number], // left eye
        [number, number], // nose
        [number, number], // mouth
        [number, number], // right ear
        [number, number], // left ear
    ]
}
