import {BALL, PADDLE} from './Utilities.js';

export default class Paddle {
    #canvas;
    #ball;
    #brickWall;
    #paddleWidth = PADDLE.width;
    #paddleHeight = PADDLE.height;
    #paddleHorizontalPosition;

    #paddlePositionXLeft;
    #paddlePositionXRight;

    constructor(canvas, ball, brickWall) {
        this.#canvas = canvas;
        this.#ball = ball;
        this.#brickWall = brickWall;

        this.#paddleHorizontalPosition = this.#canvas.getHeight() * 0.9;
        this.#paddlePositionXLeft = this.#canvas.getWidth() / 2 - this.#paddleWidth / 2;
    }

    
    drawPaddle() {
        this.#canvas.getCTX().beginPath();
        this.#canvas.getCTX().fillStyle = 'white';
        this.#canvas.getCTX().rect(this.#getMouseXPosition(), this.#paddleHorizontalPosition, this.#paddleWidth, this.#paddleHeight);
        this.#canvas.getCTX().fill();
        

        this.#updatePaddleEdgePosition();
        this.#checkIfHitByBall();    
    }
    
    #updatePaddleEdgePosition() {
        this.#paddlePositionXLeft = this.#getMouseXPosition();
        this.#paddlePositionXRight = this.#paddlePositionXLeft + this.#paddleWidth;
    }

    #checkIfHitByBall() {
        let ball = this.#ball.getCurrentPosition();
        if(ball.posY >= this.#paddleHorizontalPosition && ball.posY <= this.#paddleHorizontalPosition + this.#paddleHeight 
            && ball.posX >= this.#paddlePositionXLeft && ball.posX <= this.#paddlePositionXRight) {
            let oneFifthOfPaddle = this.#paddleWidth / 5;
            let twoFifthOfPaddle = oneFifthOfPaddle * 2;

            
            // if end game, then renew it
            if(this.#brickWall.isGameEnd()) {
                this.#brickWall.createBricks();
            }

            // console.log('OneFifth: ', oneFifthOfPaddle, twoFifthOfPaddle)

            // console.log("ball: ", ball.posX)
            // console.log("paddlePosition: ", this.#paddlePositionXLeft, this.#paddlePositionXRight)

            // left hard
            if(ball.posX >= this.#paddlePositionXLeft && ball.posX <= this.#paddlePositionXLeft + oneFifthOfPaddle) {
                let leftSpeed = Math.round(BALL.leftHardPaddleHit * Math.random());
                // console.log(leftSpeed)

                this.#ball.hitPaddle(leftSpeed, BALL.speedY);
                // console.log("left hard")
                return;
            }

            if(ball.posX >= this.#paddlePositionXLeft + oneFifthOfPaddle && ball.posX <= this.#paddlePositionXLeft + twoFifthOfPaddle) {
                let leftSpeed = Math.round(BALL.leftEasyPaddleHit * Math.random());
                // console.log(leftSpeed)

                
                this.#ball.hitPaddle(leftSpeed, BALL.speedY);
                // console.log("left easy")
                return;
            }            
            
            // right easy
            if(ball.posX <= this.#paddlePositionXRight - oneFifthOfPaddle && ball.posX >= this.#paddlePositionXRight - twoFifthOfPaddle) {
                let rightSpeed = Math.round(BALL.rightEasyPaddleHit * Math.random());
                // console.log(rightSpeed)

                this.#ball.hitPaddle(rightSpeed, BALL.speedY);
                // console.log("right easy")
                return;
            }

            // right hard
            if(ball.posX <= this.#paddlePositionXRight && ball.posX >= this.#paddlePositionXRight - oneFifthOfPaddle) {
                let rightSpeed = Math.round(BALL.rightHardPaddleHit * Math.random());
                // console.log(rightSpeed)

                
                this.#ball.hitPaddle(rightSpeed, BALL.speedY);
                // console.log("right hard")
                return;
            }
            
            
            this.#ball.hitPaddle(BALL.middlePaddleHit, BALL.speedY)
            // console.log("middle")

        }

    }
    
    #getMouseXPosition() {
        return this.#canvas.getMouseX() - this.#canvas.getOffSetLeft() - this.#paddleWidth / 2;
    }
}