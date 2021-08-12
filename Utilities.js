export const BALL = {
    diameter: 10,
    speedX: 5, // horizontal speed
    speedY: 11, // vertical speed 
    leftHardPaddleHit: -19,
    leftEasyPaddleHit: -13,
    middlePaddleHit: 0,
    rightEasyPaddleHit: 13,
    rightHardPaddleHit: 19
}

export const PADDLE = {
    width: 200,
    height: 10
}

export const CANVAS = {
    width: 1200,
    height: 800
}

export const BRICK = {
    width: CANVAS.width / 10,
    height: 30,
    color: 'blue',
    gap: 0.2
}