class Monster {
  constructor(x,y,r) {
    var options = {
      'density':5,
       'frictionAir':0,
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
    this.image = loadImage("Monster-01.png");
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y-100);
    imageMode(CENTER);
	  image(this.image, 0,0,this.r, this.r)
    pop();
  }
}