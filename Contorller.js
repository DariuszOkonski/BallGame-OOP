import Canvas from './Canvas.js';
import Ball from './Ball.js';

export default class Controller {
    #canvas;
    #ball;
    #framesPerSec = 1000 / 30;
    #indexInterval;

    constructor() {
        this.#canvas = new Canvas(800,600,'black')
        this.#ball = new Ball(this.#canvas);
    }

    run() {
        this.#indexInterval = setInterval(() => {

            console.log("run controller!!!")
            this.#ball.drawBall();            
        
        }, this.#framesPerSec);
    }

    #clearInterval() {
        clearInterval(this.#indexInterval);
    }
}

new Controller().run();