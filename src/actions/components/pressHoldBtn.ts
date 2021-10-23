export class PressHold {
    private isPressed = false;

    private handlePress: () => void
    private handleRelease: () => void

    constructor(
        private element: HTMLButtonElement,
        private pressed: () => void,
        private released: () => void,
    ) {
        let vm = this;
        this.element.className = "inactive";

        this.handlePress = () => {
            if (vm.isPressed) return;
            this.element.className = "active";
            vm.isPressed = true;
            vm.pressed();
        }

        this.handleRelease = () => {
            if (!this.isPressed) return;
            this.element.className = "inactive";
            this.isPressed = false;
            this.released();
        }

        this.element.addEventListener("mousedown", this.handlePress);
        this.element.addEventListener("touchstart", this.handlePress);

        this.element.addEventListener("mouseup", this.handleRelease);
        this.element.addEventListener("mouseleave", this.handleRelease);
        this.element.addEventListener("touchend", this.handleRelease);
    }

    stop() {
        this.handleRelease()
    }

    cleanup() {
        this.element.removeEventListener("mousedown", this.handlePress);
        this.element.removeEventListener("touchstart", this.handlePress);

        this.element.removeEventListener("mouseup", this.handleRelease);
        this.element.removeEventListener("mouseleave", this.handleRelease);
        this.element.removeEventListener("touchend", this.handleRelease);
    }
}