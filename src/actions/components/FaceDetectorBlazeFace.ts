import * as tf from "@tensorflow/tfjs-core";
import * as tfjsWasm from "@tensorflow/tfjs-backend-wasm";
import { FaceDetectorInterface } from "./FaceDetectorInterface";
import { VideoElement, NormalizedFace } from "../../types";
import { BlazeFaceModel, load as blazeFace } from "@tensorflow-models/blazeface";
import wasmSimdPath from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-simd.wasm';
import wasmSimdThreadedPath from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-threaded-simd.wasm';
import wasmPath from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm.wasm';

export const minPredictTime = 100;
let model: BlazeFaceModel;
export class FaceDetectorBlazeFace implements FaceDetectorInterface {
    private isActive = false;
    private currentFaceLocation: NormalizedFace | null;
    ;

    constructor(private video: VideoElement) {}

    async Load(): Promise<void> {
        if(!model){
            tfjsWasm.setWasmPaths({
                'tfjs-backend-wasm.wasm': wasmPath,
                'tfjs-backend-wasm-simd.wasm': wasmSimdPath,
                'tfjs-backend-wasm-threaded-simd.wasm': wasmSimdThreadedPath
            });
            await tf.ready()
            tf.setBackend("wasm");
            model = await blazeFace({
                modelUrl: "/blazeface/model.json",
            });
        }
        this.isActive = true;
        this.predictLoop();
    }

    private async predictLoop() {
        if (!this.isActive) return;

        const predictions = await model.estimateFaces(this.video, false);

        this.currentFaceLocation = <NormalizedFace>predictions[0] || null
        setTimeout(() => this.predictLoop(), minPredictTime);
    }
    getFace(): NormalizedFace {
        return this.currentFaceLocation;
    }
    cleanup(): void {
        this.isActive = false;
    }
}