const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9;
var box10,box11,box12,box13,box14,box15,box16;
var pentagon;

function setup() {
  createCanvas(800,400);
  engine = Engine.create(); 
  world = engine.world;
  ground = new Ground(400,380,800,40);
  box1 = new Box(300,275,30,40)
  box2 = new Box(300,275,30,40)
  box3 = new Box(330,275,30,40)
  box4 = new Box(360,275,30,40)
  box5 = new Box(390,275,30,40)
  box6 = new Box(420,275,30,40)
  box7 = new Box(450,275,30,40)
  box8 = new Box(480,275,30,40)
  box9 = new Box(360,235,30,40)
  box10 = new Box(390,235,30,40)
  box11 = new Box(420,235,30,40)
  box12 = new Box(450,235,30,40)
  box13 = new Box(360,195,30,40)
  box14 = new Box(390,195,30,40)
  box15 = new Box(420,195,30,40)
  box16 = new Box(390,155,30,40)
  pentagon = new Pentagon(200,50)
  slingshot = new SlingShot(bird.body,{x:200, y:50});
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}