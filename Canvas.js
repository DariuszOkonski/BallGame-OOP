export default class Canvas {
     #canvas;
     #ctx;
     #color;
     #mouseX;
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
    
    addInnerEventListener(callBack) {
        this.#canvas.addEventListener('mousemove', this.mouse, false);
    }

    mouse = (evt) => {
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