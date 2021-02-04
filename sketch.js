
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	c1=new Bob(25,760,20)


	Engine.run(engine);
  
}


function draw() {

	c1.display()
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



