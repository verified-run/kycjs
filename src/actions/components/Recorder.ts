export class Recorder {
    private chunks: Blob[] = [];
    private mediaRecorder!: MediaRecorder;
    private recordStopTimeout!: NodeJS.Timeout | null;

    constructor(stream: MediaStream, options: MediaRecorderOptions = {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 400000,
    }) {
        let vm = this;

        this.mediaRecorder = new MediaRecorder(stream, options);
        this.mediaRecorder.ondataavailable = (e) => {
            vm.chunks.push(e.data);
        }
    }

    start() {
        this.chunks = [];
        this.mediaRecorder.start();

        if (this.recordStopTimeout) {
            this.recordStopTimeout = setTimeout(() => {
                this.recordStopTimeout = null;
                this.stop();
            }, 15000);
        }
    }


    async stop(): Promise<Blob[]> {
        if (this.recordStopTimeout) {
            clearTimeout(this.recordStopTimeout);
            this.recordStopTimeout = null;
        }

        return new Promise((resolve) => {
            this.mediaRecorder.onstop = () => {
                resolve(this.chunks)
            }
            this.mediaRecorder.stop();
        })
    }

    isRecording(): boolean {
        return this.mediaRecorder.state === 'recording';
    }
    cleanup() {
        if (this.mediaRecorder.state !== 'inactive')
            this.stop();
    }
}
