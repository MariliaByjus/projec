var sea;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png, ship-2.png, ship-3.png, ship-4.png");

}

function setup(){
  createCanvas(400,400);
sea=createSprite(50,50);
sea.addImage(seaImg);
sea.scale=5;

}

function draw() {
  background("blue");
    drawSprites();
  }


