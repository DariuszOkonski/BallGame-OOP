export default class Ball {
    #canvas;
    #posX; 
    #posY;
    #speedX;
    #speedY;
    constructor(canvas) {
        this.#canvas = canvas;
        this.#posX = this.#canvas.getWidth() / 2;
        this.#posY = this.#canvas.getHeight() / 2;
        this.#speedX = 5;
        this.#speedY = 7;
    }

    drawBall() {

        this.#canvas.getCTX().beginPath();
        this.#canvas.getCTX().fillStyle = 'white';
        this.#canvas.getCTX().arc(this.#posX, this.#posY, 10, 0, 2*Math.PI);
        this.#canvas.getCTX().fill();

        this.#moveBall();
    }

    #moveBall() {
        this.#posX += this.#speedX;
        this.#posY += this.#speedY;

        if(this.#posX > this.#canvas.getWidth() || this.#posX < 0) {
            this.#speedX = -this.#speedX;
        }

        if(this.#posY > this.#canvas.getHeight() || this.#posY < 0) {
            this.#speedY = -this.#speedY;
        }
    }
}