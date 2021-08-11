export const BALL = {
    diameter: 10,
    speedX: 5, // horizontal speed
    speedY: 11, // vertical speed
    leftHardPaddleHit: -9,
    leftEasyPaddleHit: -3,
    middlePaddleHit: 0,
    rightEasyPaddleHit: 3,
    rightHardPaddleHit: 9
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
    height: 20,
    color: 'blue',
    gap: 2
}