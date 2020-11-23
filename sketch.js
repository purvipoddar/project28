const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1,tree_img;
var ground1;
var stone1;
var man,man_img;
var mango1;
var launcher1;

 function preload(){
	 man_img = loadImage("sprites/boy.png");
 }


function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	tree1 =new Tree(1030,630,100,200);
	ground1 = new Ground(600,590,1200,20);
	mango1 = new Mango(990,400,20);
	mango2 = new Mango(1030,350,20);
	mango3 = new Mango(970,300,20);
	mango4 = new Mango(1070,300,20);
	mango5 = new Mango(1090,400,20);
	mango6 = new Mango(1100,350,20);
	mango7 = new Mango(950,350,20);
	stone1 = new Stone(60,475,20,20);
	launcher1 = new Launcher(stone1.body,{x:70,y:480});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(220);

  image(man_img,40,435,150,200);
  tree1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();
  launcher1.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);

  drawSprites();
}
function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}
function mouseDragged(){
		Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
		launcher1.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:70,y:480})
		launcher1.attach(stone1.body);
}
}