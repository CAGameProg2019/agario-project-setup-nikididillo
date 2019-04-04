class Vector {
    // constructor Vector(x: any, y: any): Vector
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVector(pos) {
      this.x += pos.x;
      this.y += pos.y;
      return this;
    }

    toString() {
      return '<' + this.x + ', ' + this.y + '>';
    }

print() {
  console.log(this.toString());
}

}
