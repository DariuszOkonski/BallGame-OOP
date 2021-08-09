export default class Ball {
    #canvas;
    #posX; 
    #posY;
    #speedX;
    constructor(canvas) {
        this.#canvas = canvas;
        this.#posX = this.#canvas.getWidth() / 2;
        this.#posY = this.#canvas.getHeight() / 2;
        this.#speedX = 5;
    }

    drawBall() {
        this.#canvas.refresh();

        this.#canvas.getCTX().beginPath();
        this.#canvas.getCTX().fillStyle = 'white';
        this.#canvas.getCTX().arc(this.#posX, this.#posY, 15, 0, 2*Math.PI);
        this.#canvas.getCTX().fill();

        this.#moveBall();
    }

    #moveBall() {
        this.#posX += this.#speedX;

        if(this.#posX > this.#canvas.getWidth() || this.#posX < 0) {
            this.#speedX *= -1;
        }
    }
}