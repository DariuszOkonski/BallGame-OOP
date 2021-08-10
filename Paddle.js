export default class Paddle {
    #canvas;
    #ball;
    #paddleWidth = 100;
    #paddleHeight = 5;
    #paddleHorizontalPosition;

    #paddlePositionXLeft;
    #paddlePositionXRight;

    constructor(canvas, ball) {
        this.#canvas = canvas;
        this.#ball = ball;

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
        if(ball.posY == this.#paddleHorizontalPosition && ball.posX >= this.#paddlePositionXLeft && ball.posX <= this.#paddlePositionXRight) {
            let oneFifthOfPaddle = this.#paddleWidth / 5;
            let twoFifthOfPaddle = oneFifthOfPaddle * 2;

            console.log('OneFifth: ', oneFifthOfPaddle, twoFifthOfPaddle)

            // console.log("ball: ", ball.posX)
            // console.log("paddlePosition: ", this.#paddlePositionXLeft, this.#paddlePositionXRight)

            // left hard
            if(ball.posX >= this.#paddlePositionXLeft && ball.posX <= this.#paddlePositionXLeft + oneFifthOfPaddle) {
                this.#ball.hitPaddle(-9, 5);
                console.log("left hard")
                return;
            }

            if(ball.posX >= this.#paddlePositionXLeft + oneFifthOfPaddle && ball.posX <= this.#paddlePositionXLeft + twoFifthOfPaddle) {
                this.#ball.hitPaddle(-3, 5);
                console.log("left easy")
                return;
            }            
            
            // right easy
            if(ball.posX <= this.#paddlePositionXRight - oneFifthOfPaddle && ball.posX >= this.#paddlePositionXRight - twoFifthOfPaddle) {
                this.#ball.hitPaddle(3, 5);
                console.log("right easy")
                return;
            }

            // right hard
            if(ball.posX <= this.#paddlePositionXRight && ball.posX >= this.#paddlePositionXRight - oneFifthOfPaddle) {
                this.#ball.hitPaddle(9, 5);
                console.log("right hard")
                return;
            }
            
            
            this.#ball.hitPaddle(0, 5)
            console.log("middle")
        }

    }
    
    #getMouseXPosition() {
        return this.#canvas.getMouseX() - this.#paddleWidth / 2;
    }
}