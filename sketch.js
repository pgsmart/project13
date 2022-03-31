var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var balloonNum;
var balloon;


function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0    

  createBalloon();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }

  //Creates balloons every 100 frames
  if(frameCount%125 === 0){
    createBalloon();
  }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();  
  }
    
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  arrow = createSprite(400,bow.y,50,50);
  arrow.addImage(arrowImage);
  arrow.scale = 0.5;
  arrow.velocityX = -4;
  arrowMade = true;
}

// Creates the balloons
function createBalloon(){
  balloon = createSprite(0,random(1,400),50,50);
  balloonNum = Math.round(random(1,4))  
  switch(balloonNum){
    case 1 : balloon.addImage(green_balloonImage)
    break;
    case 2 : balloon.addImage(pink_balloonImage), balloon.scale = 5;
    break;
    case 3 : balloon.addImage(blue_balloonImage)
    break;
    case 4 : balloon.addImage(red_balloonImage)
    break;
  }

  balloon.velocityX = 3;
  balloon.scale = 0.1;
  balloon.lifetime = 175;

  if(balloonNum === 2){balloon.scale = 1.5;}
}



