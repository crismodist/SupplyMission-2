var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	packageIMG1 = loadImage("package.png")
	packageIMG2 = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	package1Sprite = createSprite(width/2,85,10,100);
	package1Sprite.addImage(packageIMG1)
	package1Sprite.scale = 0.2;

	package2Sprite = createSprite(width/2,100,10,100);
	package2Sprite.addImage(packageIMG2)
	package2Sprite.scale = 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1 = createSprite(width/2,650,300,20,20);
	line1.shapeColor=("red")

    line2 = createSprite(250,585,20,150)
	line2.shapeColor=("red")

	line3 = createSprite(550,585,20,150)
	line3.shapeColor=("red");




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	packageBody1 = Bodies.circle(width/2 , 210 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 210 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody2);
	

	//Create a Ground
    ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true});
 	World.add(world, ground);


    Engine.run(engine);
  
}
  

function draw() {
  rectMode(CENTER);
  background(0);

  



  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  package1Sprite.x= packageBody1.position.x 
  package1Sprite.y= packageBody1.position.y
  
  package2Sprite.x= packageBody2.position.x 
  package2Sprite.y= packageBody2.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(packageBody1,false);
	Matter.Body.setStatic(packageBody2,false);
    
  }
}