import { NormalizedFace } from '../../types'
export interface FaceDetectorInterface {
    Load(): void;
    getFace(): NormalizedFace;
    cleanup():void;
}
  