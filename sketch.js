
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
    background("blue");

	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
    bob1=new Bob(800,450,60);
	bob2=new Bob(740,450,60);
	bob3=new Bob(680,450,60);
	bob4=new Bob(860,450,60);
	bob5=new Bob(920,450,60);
    roof=new Roof(800,200,320,30)
    rope1= new Rope(bob1.bob,roof.roof,0,0)
    rope2=new Rope(bob2.bob,roof.roof,-60,0)
    rope3=new Rope(bob3.bob,roof.roof,-120,0)
    rope4=new Rope(bob4.bob,roof.roof,60,0)
    rope5=new Rope(bob5.bob,roof.roof,120,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  textFont("Audiowide")
  textSize(40)
  text ("Vaibhav Raj",50,100)
  textSize(15)
  text ("Press UP_ARROW to serve",690,500)
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob3.bob,bob3.bob.position,{x:-100,y:-100})
  }
}
