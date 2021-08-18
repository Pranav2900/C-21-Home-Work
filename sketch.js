var astronaut, bgimg,sleepimg,brushimg,gymimg,eatimg,drinkimg,moveimg,bathimg;



function preload(){
  bgimg = loadImage("iss.png");
  
  brushimg = loadAnimation("brush.png");
  gymimg = loadAnimation("gym1.png","gym2.png");
  eatimg = loadAnimation("eat1.png","eat2.png");
  drinkimg = loadAnimation("drink1.png","drink2.png");
  moveimg = loadAnimation("move.png","move1.png");
  bathimg = loadAnimation("bath1.png","bath2.png");
  sleepimg = loadAnimation("sleep.png");
}

function setup() {
  createCanvas(400, 400);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  fill("black");
  textSize(30);
  text("Instructions:Up arrow = brushing Down arrow = gymming Left arrow = Eating Right arrow = Bathing M key = moving",200,200);
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brushimg);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.setVelocity(0,0);
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gymimg);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.setVelocity(0,0);
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eatimg);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.setVelocity(0,0);
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bathimg);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.setVelocity(0,0);
}
if(keyDown("m")){
  astronaut.addAnimation("moving",moveimg);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.setVelocity(0,0);
}





















drawSprites();
}




