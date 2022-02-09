const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var watermelon;
var wtrmln;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  rope = new Rope(14,{x: 250,y: 30});
  watermelon = Bodies.circle(300,300,15);
  Matter.Composite.add(rope.body,watermelon);
  wtrmln = new Wtrmln(rope,watermelon);
  
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
  ellipse(watermelon.position.x,watermelon.position.y,15,15);
  rope.show();
 
   
}
