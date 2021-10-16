var spaceship , background , laser;
var spaceshipImg , backgroundImg , laserImg;
var explosionSound , laserSound;
var canvas;


function preload(){
  background = loadImage("background.png");
  spaceship = loadImage("spaceship.png");
  laser = loadImage("laser.png");
  explosionSound = loadSound("explosion.mp3");
  laserSound = loadSound("laser.mp3");
}

function setup(){
    canvas = createCanvas(displayWidth , displayHeight);
  space = createSprite(250,350,30,20);
  space.addImage(spaceImage);
  space.velocityY = (5 + score/10);

  spaceShip = createSprite(250,600);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale = 0.6;

}

function draw(){
    
drawSprites()
}