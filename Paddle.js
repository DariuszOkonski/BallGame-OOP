export default class Paddle {
    #canvas;
    #ball;
    #paddleWidth = 100;
    #paddleHeight = 5;
    #paddleHorizontalPosition;
    #paddlePositionX;

    constructor(canvas, ball) {
        this.#canvas = canvas;
        this.#ball = ball;

        this.#paddleHorizontalPosition = this.#canvas.getHeight() * 0.9;
        this.#paddlePositionX = this.#canvas.getWidth() / 2 - this.#paddleWidth / 2;
    }

    #getMouseXPosition() {
        return this.#canvas.getMouseX() - this.#paddleWidth / 2;
    }

    drawPaddle() {
        this.#canvas.getCTX().beginPath();
        this.#canvas.getCTX().fillStyle = 'white';
        this.#canvas.getCTX().rect(this.#getMouseXPosition(), this.#paddleHorizontalPosition, this.#paddleWidth, this.#paddleHeight);
        this.#canvas.getCTX().fill();

    }
}