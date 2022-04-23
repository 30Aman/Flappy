var bird,birdImage;
var pole,poleImage;
var bg, bgImg;
var invisibleGround,ground;
var polesGroup;
var gameoverImg,gameover;

function preload(){
  birdImage = loadImage("bird.png");
  poleImage = loadImage("pole.png");
  bgImg = loadImage("backround.png");
  gameoverImg = loadImage("gameover.png");

}

function setup() {
  createCanvas(1000,800); 
  //pole = createSprite(850,400,20,20);
//  pole.addImage(poleImage);
//pole.scale=1.5;
  bird = createSprite(100,400,20,20);
  bird.addImage(birdImage);
  bird.scale=0.3;
  if(bird.isTouching(pole)){
    gameover = createSprite(200,400);
    gameover.addImage(gameoverImg);
    gameover.visible=true;
  }

  

  invisibleGround = createSprite(100,700,400,10);
  invisibleGround.visible = false;
  invisibleGround.x = invisibleGround.width /2;
 
}
function spawnpoles() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var pole= createSprite(850,400,20,20);
    pole.x = Math.round(random(550,120));
    pole.y = Math.round(random(800,80));
    pole.addImage(poleImage);
    pole.scale = 1.5;
    pole.velocityX = -3;
    
     //assign lifetime to the variable
    pole.lifetime = 200;
    
    //adjust the depth
    pole.depth = bird.depth;
    bird.depth = bird.depth + 1;
    
    //add each pole to the group
    //polesGroup.add(pole);
  }
  
}

function draw() {
  background(bgImg);
  textSize(50);
  fill("black");
  text("FLAPPY BIRD", 50, 100);
  textSize(25);
  fill("blue");
  text("1.press space to jump.", 50, 200);

  if(keyDown("space")){
   bird.velocityY=-4
  }

 else{
  bird.velocityY = bird.velocityY + 0.5
 };
bird.bounceOff(invisibleGround);
spawnpoles();

  createEdgeSprites();
  drawSprites();
}

