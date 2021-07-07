var sea 
//= createSprite(400,200,200,200);
var ship
var seaImg
var shipImg1

function preload() {
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  ship = createSprite(200,270,100,100);
  ship.addAnimation('myShip', shipImg1);
  ship.scale = 0.3
  sea.velocityX = -5
}

function draw() {
  background("blue");
  
  if(sea.x < 0) {
    sea.x = sea.width/2
  }

  drawSprites();
}