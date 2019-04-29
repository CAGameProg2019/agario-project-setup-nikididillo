class Player extends Food {

    constructor(x, y, radius, color, stroke, name, maxSpeed) {
      super (x, y, radius, color);
      this.stroke = stroke;
      this.name = name;
      this.maxSpeed = maxSpeed;
    }

    update(mouse){
      let vel = new Vector(mouse.x, mouse.y);
      vel.subVector(this);
      let dist = vel.magnitude();
      if(dist > 0) {
        vel.toDirVec();
        vel.scale(this.maxSpeed);
        if(dist<this.radius) {
          vel.scale(dist/this.radius);
        } this.addVector(vel);
      }
    }

    draw(c) {
      c.lineWidth = this.radius*.075;
      c.strokeStyle = this.sroke;
      super.draw(c);
      c.stroke();
      c.fillStyle = 'lightGrey';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.font= 'monospace 20px';
      c.strokeStyle = '#ffffff';
      c.lineWidth = 2;
      c.strokeText(this.name, this.x, this.y);
      c.fillText(this.name, this.x, this.y);
    }

}
Object.assign(Player, Food);
