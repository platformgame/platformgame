export default class Enemy {
  constructor(type) {
    this.type = type;
    this.x = canvas.width;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, canvas.height - (canvas.height/15) - canvas.width/20, canvas.width/20, canvas.width/20);
    ctx.fillStyle = "#E81515";
    ctx.fill();
    ctx.closePath();
    this.x -= 5;
  }
}  