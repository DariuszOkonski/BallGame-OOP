import Canvas from './Canvas.js';
import Ball from './Ball.js';
import Paddle from './Paddle.js';

import {BRICK, CANVAS} from './Utilities.js'
import Brick from './Brick.js';

export default class Controller {
    #canvas;
    #ball;
    #paddle;
    #framesPerSec = 1000 / 30;
    #indexInterval;

    #brick;
    constructor() {
        this.#canvas = new Canvas(CANVAS.width,CANVAS.height,'black')
        this.#ball = new Ball(this.#canvas);
        this.#paddle = new Paddle(this.#canvas, this.#ball);
        this.#brick = new Brick(10, 10, this.#canvas);
    }


    run() {
        this.#indexInterval = setInterval(() => {

            // console.log("run controller!!!")
            this.#canvas.refresh();


            this.#ball.drawBall();            
            this.#paddle.drawPaddle();
            this.#brick.drawBrick();
            
        }, this.#framesPerSec);
    }

    #clearInterval() {
        clearInterval(this.#indexInterval);
    }
}

new Controller().run();