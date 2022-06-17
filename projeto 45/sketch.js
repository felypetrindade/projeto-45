var bg,bgImg;
var player, shooterImg, shooter_shooting;
var ground,topGround;
var zombieGroup;
var zombie, zombieImg;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");

  bgImg = loadImage("assets/bg.jpeg");

}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2+130,windowWidth,windowHeight);
  bg.addImage(bgImg);
  bg.scale = 1.1;
  
  topGround = createSprite(width/2,420,displayWidth,20);
  topGround.visible = false;

  ground = createSprite(width/2,650,displayWidth,20);
  ground.visible = false;
  
  
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg);
  player.scale = 0.3;
  player.debug = true;
  player.setCollider("rectangle",0,0,300,300);
  player.collide(ground);
  
  zombieGroup = new Group();
}

function draw() {
  background("white"); 

  text("aperte para cima para se mover para cima", width / 2 + 100, 150);
  text.size = 100;
  text.depth = bg.depth ;
  text.depth ++;
  text.color = "red" ;
  
  
  
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-10;
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+10;
  }

  if(!keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x +10;
    
  }  
  if(!keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x -10;
    
  }  
  if(keyWentDown("space")){  
    player.addImage(shooter_shooting);
  }
  
  else if(keyWentUp("space")){
    player.addImage(shooterImg);
  }
  
  drawSprites();
  
}
