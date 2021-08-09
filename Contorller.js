import Canvas from './Canvas.js';

export default class Controller {
    #canvas;
    constructor() {
        this.#canvas = new Canvas(800,600,'black')
    }

    run() {
        console.log("run controller!!!")
    }
}

new Controller().run();