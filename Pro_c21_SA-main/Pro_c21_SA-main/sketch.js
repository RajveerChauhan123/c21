const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  btn1 = createImg("right.png")
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(Hforce)
  
  btn2 = createImg("up.png")
  btn2.position(150,30)
  btn2.size(50,50)
  btn2.mouseClicked(Vforce)
  
  var ball_option = {
    restitution:0.9
  }
  ball = Bodies.circle(200,10,20,ball_option)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)

}

function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}
function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
