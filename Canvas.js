export default class Canvas {
     #canvas;
     #ctx;
      constructor(width, height, color) {
        this.#canvas = document.getElementById('canvas');
        this.#canvas.width = width;
        this.#canvas.height = height;
        
        this.#ctx = this.#canvas.getContext('2d');
        this.#ctx.fillStyle = color;
        this.#ctx.fillRect(0,0,width, height);
      }

      getHeight() {
          return this.#canvas.height;
      }

      getWidth() {
          return this.#canvas.width;
      }
}