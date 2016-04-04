export default class Platform {
  constructor(x, y, height, length) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.length = length;
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.length, this.height);
    ctx.fillStyle = "#2ecc71";
    ctx.fill();
    ctx.closePath();
  }
}