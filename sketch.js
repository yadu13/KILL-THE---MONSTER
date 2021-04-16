const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function preload(){
    backgroundImg = loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);

    box7= new Box(800, 100, 70, 70);
    box8= new Box(800, 100, 70, 70);
    box9= new Box(800, 100, 70, 70);
    box10= new Box(800, 100, 70, 70);
    box11= new Box(800, 100, 70, 70);
    box12= new Box(800, 100, 70, 70);

    box13 = new Box(800, 100, 70, 70);
    box14 = new Box(700, 100, 70, 70);
    box15 = new Box(700, 100, 70, 70);
    box16 = new Box(700, 100, 70, 70);
    box17 = new Box(700, 100, 70, 70);
    box18 = new Box(700, 100, 70, 70);
    box19 = new Box(700, 100, 70, 70);
    box20 = new Box(700, 100, 70, 70);
    box21 = new Box(600, 100, 70, 70);
    box22 = new Box(600, 100, 70, 70);
    box23 = new Box(600, 100, 70, 70);
    box24 = new Box(600, 100, 70, 70);
    box25 = new Box(600, 100, 70, 70);
    box26 = new Box(600, 100, 70, 70);



    ground = new Ground(600, 600, 1500, 20);

    monster = new Monster(1100, 550, 300);

    hero = new Hero(400, 800, 250);

    rope = new Rope(hero.body, {x:500, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    



    hero.display();

    monster.display();

    ground.display();

    fill(37, 247, 58);
    stroke("black")
    strokeWeight(2);
    textSize(50)
    text("KILL THE MONSTER", 400, 690)
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}