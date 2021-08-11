import Brick from './Brick.js';
import { BRICK, CANVAS } from './Utilities.js';

export default class BrickWall {
    #canvas;
    #bricks;
    #wallDrawStartPoint = 3;
    #numberOfRows = 4;
    #bricksQuantity = 0;
    constructor(canvas) {
        this.#canvas = canvas;
        this.#bricks = []

        this.createBricks();
    }

    createBricks() {
        
        for(let i = 0; i < this.#numberOfRows; i++) {
            let tempBricks = [];
            for(let j = 0; j < CANVAS.width; j += BRICK.width) {
                tempBricks.push(new Brick(j, ((i + this.#wallDrawStartPoint) * BRICK.height), this.#canvas))
                this.#bricksQuantity++;
            }
            this.#bricks.push(tempBricks)            
        }
    
        console.log(this.#bricksQuantity)
    }

    drawBricks() {
        for(let i = 0; i < this.#bricks.length; i++) {
            for(let j = 0; j < this.#bricks[i].length; j++) {
                if(!this.#bricks[i][j].getIsHit()) {
                    this.#bricks[i][j].drawBrick();                    
                }
            }
        }
    }
}