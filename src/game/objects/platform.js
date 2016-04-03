export default class platform {
  constructor(x, y, height, length) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.length = length;
  }
  
  get x() {
    return this.x;
  }
  
  get y() {
    return this.x;
  }
  
  get height() {
    return this.height;
  }
  
  get length() {
    return this.length;
  }
  
  set x(xpos) {
    this.x = xpos;
  }
  
  set y(ypos) {
    this.y = ypos;
  }
  
  set height(h) {
    this.height = h;
  }
  
  set length(l) {
    this.length = l;
  }
  
  draw(ctx) {
    ctx.rect(this.x,this.y,this.length,this.height);
    ctx.stroke();
  }
}