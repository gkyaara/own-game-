var player;
var ground;
var tunnel1, tunnel2, tunnel3;
var groundImage;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10;
var marioImage1, marioImage2, marioCollide, marioStand;
var plantImage1, plantImage2, plantImage3, plantImage4;
var turtleImage, turtleDying,turtleHiding;
var brickImage, coinImage,CloudImage;
var tunnelImage1, tunnelImage2;
var fullBG;
function preload(){
  groundImage=loadImage("IMAGES/ground.png");

  marioMove=loadAnimation("IMAGES/mario1.png", "IMAGES/mario2.png");
  //marioImage2=loadImage();
  marioCollide=loadImage("IMAGES/mario_collide.png");
  marioStand=loadAnimation("IMAGES/mariostand.png");

  plantImage1=loadImage("IMAGES/plant1.png");
  plantImage2=loadImage("IMAGES/plant2.png");
  plantImage=loadImage("IMAGES/plant3.png"); 
  plantImage=loadImage("IMAGES/plant4.png");

  turtleImage=loadImage("IMAGES/movingturtle.png");
  turtleDying=loadImage("IMAGES/dyingtutle.jpeg");
  turtleHiding=loadImage("IMAGES/hidingturtle.png");

  tunnelImage1 = loadImage("IMAGES/tunnel1.png");
  tunnelImage2 = loadImage("IMAGES/tunnel2.png");

  brickImage=loadImage("IMAGES/brick.png");

  coinImage=loadImage("IMAGES/coin.png");

  CloudImage=loadImage("IMAGES/clouds.jpg");

  fullBG = loadImage("IMAGES/fullBG.png");

}
function setup() {
  createCanvas(1300,600);
  player=createSprite(140, 505, 50, 50);
  player.scale = 1.4;
  player.addAnimation("stand",marioStand);
  player.addAnimation("move", marioMove);
  ground=createSprite(300,50);
  ground.addImage(groundImage);
  ground.scale=2;

 

  
  
  //** ANIMATIONS */
}

function draw() {
  background(0); 
  image(fullBG, 0, 0, 10000, 600);
  player.changeAnimation("stand");
  if(keyDown(UP_ARROW)) {
    player.velocityY=-2;
  }
  if(keyDown(DOWN_ARROW)) {
    //CROUCHING ANIMATION
  }
  if(keyDown(LEFT_ARROW)) {
    player.x=player.x-5;
  }
  if(keyDown(RIGHT_ARROW)) {
    player.x=player.x+35;
    player.changeAnimation("move");
    camera.position.x = player.x+510;
  } 

  
  //** CONTROLS OF PLAYER */
   Tunnel();
   Turtles();
   Coins();
   XPcoins();
   Brick();
  drawSprites();
}