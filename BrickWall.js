import Brick from './Brick.js';
import { BRICK, CANVAS } from './Utilities.js';

export default class BrickWall {
    #canvas;
    #bricks;
    #ball;
    #numberOfRows = 10;
    #isEndGame = false;
    constructor(canvas, ball) {
        this.#canvas = canvas;
        this.#ball = ball;
        this.#bricks = []

        this.createBricks();
    }

    createBricks() {
        
        for(let i = 0; i < this.#numberOfRows; i++) {
            let tempBricks = [];
            for(let j = 0; j < CANVAS.width; j += BRICK.width) {
                tempBricks.push(new Brick(j, (i * BRICK.height), this.#canvas))
            }
            this.#bricks.push(tempBricks)            
        }
    }

    drawBricks() {
        let allHit = true;
        for(let i = 0; i < this.#bricks.length; i++) {
            for(let j = 0; j < this.#bricks[i].length; j++) {
                this.#checkIfBrickHit(this.#bricks[i][j])
                
                if(!this.#bricks[i][j].getIsHit()) {
                    this.#bricks[i][j].drawBrick();
                    allHit = false;
                }
            }
        }
        this.#isEndGame = allHit;
    }

    #checkIfBrickHit(brick) {
        let tempBall = this.#ball.getCurrentPosition()
        let tempBrick = brick.getCurrentPosition();


        if(tempBall.posX > tempBrick.posXLeft && tempBall.posX < tempBrick.posXRight &&
            tempBall.posY < tempBrick.posYBottom && tempBall.posY > tempBrick.posYTop && !brick.getIsHit()) {
                brick.setHit();
                this.#ball.changeHorizontalDirection();
            }
    }
}