import Canvas from './Canvas.js';
import Ball from './Ball.js';
import Paddle from './Paddle.js';

import {CANVAS} from './Utilities.js'
import BrickWall from './BrickWall.js';

export default class Controller {
    #canvas;
    #ball;
    #paddle;
    #framesPerSec = 1000 / 30;
    #indexInterval;
    #brickWall;

    constructor() {
        this.#canvas = new Canvas(CANVAS.width,CANVAS.height,'black')
        this.#ball = new Ball(this.#canvas);
        this.#brickWall = new BrickWall(this.#canvas, this.#ball);
        this.#paddle = new Paddle(this.#canvas, this.#ball, this.#brickWall);
    }


    run() {
        this.#indexInterval = setInterval(() => {
            this.#canvas.refresh();            
            this.#ball.drawBall();            
            this.#brickWall.drawBricks();
            this.#paddle.drawPaddle(this.#canvas.getMouseMoved());
            
        }, this.#framesPerSec);
    }

    #clearInterval() {
        clearInterval(this.#indexInterval);
    }
}

new Controller().run();