export class Enemy {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
  
  get x() {
    return this.x;
  }
  
  get y() {
    return this.y;
  }
  
  get type() {
    return this.type;
  }
  
  set x(xpos) {
    this.x = xpos;
  }
  
  set y(ypos) {
    this.y = ypos;
  }
  
  set type(t) {
    this.type = t;
  }
  
  draw() {
    //Draw enemy
  }
}