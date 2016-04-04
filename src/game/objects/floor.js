export default class Floor {
  static draw(ctx) {
    ctx.beginPath();
    ctx.rect(0, canvas.height - (canvas.height/15), canvas.width, (canvas.height/15));
    ctx.fillStyle = "#2ecc71";
    ctx.fill();
    ctx.closePath();
  }
}