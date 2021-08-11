import {BRICK} from './Utilities.js';

export default class Brick {
    #canvas;
    #posX;
    #posY;
    #width = BRICK.width;
    #height = BRICK.height;
    #color = BRICK.color;
    #isHit = false;
    
    constructor(posX, posY, canvas) {
        this.#canvas = canvas;
        this.#posX = posX;
        this.#posY = posY;
    }

    drawBrick() {
        this.#canvas.getCTX().beginPath();
        this.#canvas.getCTX().fillStyle = this.#color;
        this.#canvas.getCTX().rect(this.#posX, this.#posY, this.#width - BRICK.gap, this.#height - BRICK.gap);
        this.#canvas.getCTX().fill();
    }

    getCurrentPosition() {
        return {
            posXLeft: this.#posX,
            posXRight: this.#posX + this.#width,
            posYTop: this.#posY,
            posYBottom: this.#posY + this.#height
        }
    }

    getIsHit() {
        return this.#isHit;
    }

    setHit() {
        this.#isHit = true;
    }
}