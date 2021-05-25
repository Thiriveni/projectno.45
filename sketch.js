
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plate,plateImg;
var bun;
var foodGroup;

function preload()
{
	plateImg=loadImage("images/plate.png");
	bg=loadImage("images/burbg.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	food1=new Food(400,0);


	var options={
		friction:0.5,
		density:1
	}

	var ground_options={
		isStatic:true
	}

	plate=Bodies.rectangle(displayWidth/2,displayHeight-200,200,100,options);
	World.add(world,plate);

   ground=Bodies.rectangle(displayWidth/2,displayHeight-150,displayWidth,10,ground_options);
   World.add(world,ground);
	
console.log(plate);


	
  
}


function draw() {
  imageMode(CENTER);
  background("yellow");
  image(bg,700,400,displayWidth,displayHeight);
  

  
  
  
  
  
  image(plateImg,plate.position.x,plate.position.y,200,100);
  Matter.Body.setPosition(plate,{x:mouseX,y:plate.position.y})

  food1.display();
  
  drawSprites();
 
}







