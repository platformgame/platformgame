export class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  get x() {
    return this.x;
  }
  
  get y() {
    return this.y;
  }
  
  set x(xpos) {
    this.x = xpos;
  }
  
  set y(ypos) {
    this.y = ypos;
  }
  
  draw() {
    //Draw character
  }
}