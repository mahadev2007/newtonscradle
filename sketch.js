
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1
var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new roof(300,148,300,20)

	bob1=new bob(190,430,50);
	bob2=new bob(240,430,50);
	bob3=new bob(290,430,50);
	bob4=new bob(340,430,50);
	bob5=new bob(390,430,50);

	rope1= new Rope(bob1.body,roof1.body,-50*2,0);


	


  
    
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");



  

roof1.display();


bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


rope1.display();






  
  drawSprites();

  fill("blue")
 text(mouseX + ',' +mouseY,10,45)
 
}



