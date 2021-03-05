
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var chain1,chain2,chain3,chain4,chain5;
var bob1,bob2,bob3,bob4,bob5;
var bobDiameter = 50;
// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	bobDiameter = 40;

	startBobPositionX = width / 2;
	startBobPositionY = height / 4 + 500;

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,600,50);
	

	bob1 = new Bob(startBobPositionX - bobDiameter * 2, startBobPositionY, bobDiameter);
	bob2 = new Bob(startBobPositionX - bobDiameter, startBobPositionY, bobDiameter);
	bob3 = new Bob(startBobPositionX, startBobPositionY, bobDiameter);
	bob4 = new Bob(startBobPositionX + bobDiameter, startBobPositionY, bobDiameter);
	bob5 = new Bob(startBobPositionX + bobDiameter * 2, startBobPositionY, bobDiameter);
	chain1=new Chain(bob1.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  drawSprites();
 
}



