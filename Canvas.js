export default class Canvas {
     #canvas;
     #ctx;
     #color;
     #mouseX;
     #mouseMoved = false;
      constructor(width, height, color) {
        this.#color = color;
        
        this.#canvas = document.getElementById('canvas');
        this.#canvas.width = width;
        this.#canvas.height = height;
        

        this.#ctx = this.#canvas.getContext('2d');
        this.#ctx.fillStyle = color;
        this.#ctx.fillRect(0,0,width, height);
        this.addInnerEventListener();
        this.#mouseX = 200;
    }
    
    refresh() {
        this.#ctx.fillStyle = this.#color;
        this.#ctx.fillRect(0,0,this.#canvas.width, this.#canvas.height);
    }

    getMouseMoved() {
        return this.#mouseMoved;
    }

    getOffSetLeft() {
        return this.#canvas.offsetLeft;
    }
    
    addInnerEventListener(callBack) {
        this.#canvas.addEventListener('mousemove', this.mouse, false);
        // console.log(this.#canvas.offsetLeft)
    }

    keyDown = (evt) => {
        console.log(evt.target)
    }

    mouse = (evt) => {
        if(!this.#mouseMoved)
            this.#mouseMoved = true;
        this.#mouseX = evt.clientX;
    }

    getMouseX() {
        return this.#mouseX;
    }

    getHeight() {
        return this.#canvas.height;
    }

    getWidth() {
        return this.#canvas.width;
    }

    getCTX() {
        return this.#ctx;
    }
}