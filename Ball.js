import {BALL} from './Utilities.js';

export default class Ball {
    #ballDiameter = BALL.diameter;
    #canvas;
    #posX; 
    #posY;
    #speedX;
    #speedY;
    constructor(canvas) {
        this.#canvas = canvas;
        this.#resetBall();
        this.#speedX = Math.random() < 0.5 ? BALL.speedX : -BALL.speedX;
        this.#speedY = Math.random() < 0.5 ? BALL.speedY : -BALL.speedY; 
    }

    drawBall() {

        this.#canvas.getCTX().beginPath();
        this.#canvas.getCTX().fillStyle = 'white';
        this.#canvas.getCTX().arc(this.#posX, this.#posY, this.#ballDiameter, 0, 2*Math.PI);
        this.#canvas.getCTX().fill();

        this.#moveBall();
    }

    changeHorizontalDirection() {
        this.#speedY = -this.#speedY;
    }

    getCurrentPosition() {
        return {
            posX: this.#posX,
            posY: this.#posY
        }
    }

    hitPaddle(speedX, speedY) {
        this.#speedX = speedX;
        this.#speedY = speedY;
        this.#speedY = -this.#speedY;
    }

    #resetBall() {
        this.#posX = this.#canvas.getWidth() / 2;
        this.#posY = this.#canvas.getHeight() / 2;
        this.#speedX =  Math.random() < 0.5 ? -(BALL.speedX) : (BALL.speedX);
    }

    #moveBall() {
        this.#posX += this.#speedX;
        this.#posY += this.#speedY;

        // ball hits left or right edge, have to add && with speedX condition to prevent ball stack on the edge of canvas
        if((this.#posX > this.#canvas.getWidth() && this.#speedX > 0.0) || (this.#posX < 0 && this.#speedX < 0.0)) {
            this.#speedX = -this.#speedX;
        }

        // ball hits top or bottom
        if(this.#posY < 0 && this.#speedY < 0.0) {
            this.#speedY = -this.#speedY;
        }

        if(this.#posY > this.#canvas.getHeight()) {
            this.#resetBall();
        }
    }
}