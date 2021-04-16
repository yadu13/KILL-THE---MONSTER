class Hero{
    constructor(x, y,radius) {
      var options = {
          'frictionAir':1,
          'density':1,
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("Superhero-01.png");
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image, 0, 0,this.radius*2, this.radius*2);
      pop();
    }
  };
  