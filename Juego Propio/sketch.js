  var Zombi,ZombiImg;
  var Fondo,FondoImg;
  var Alex,AlexImg;
  var spokySound;


function preload(){
    ZombiImg = loadImage("Zombi.png")
    FondoImg = loadImage("Fondo.jpg")
    AlexImg = loadImage("Alex.png")
    
}

function setup() {
  createCanvas(1600,712)

  Alex = createSprite(500,210,20,50)
  Alex.addImage("Alex",AlexImg)
  Alex.scale = 0.2
  


  
}


function draw() {
  background(FondoImg)

  //Condiciones para que se mueva Alex
  if(keyDown("Up")) {
   Alex.velocityY -=0.2;

  }
  if(keyDown("Down")) {
    Alex.velocityY +=0.2;
 
   }
   if(keyDown("Left")) {
    Alex.velocityX -=0.2;
 
   }
   if(keyDown("Right")) {
    Alex.velocityX +=0.2;
 
   }
  

   
  
 
  

   
  Zombi();


  drawSprites();




}   


function Zombi(){


  if (frameCount % 70 === 0) {
    Zombi = createSprite(random(500,1100),random(100,500),40,40)
    Zombi.addImage("Zombi",ZombiImg)
    Zombi.scale = 0.2
    Zombi = Math.round(random(120,400));
    Zombi.velocityX = -1
    Zombi.velocityY = -1
    Zombi.position.x = Alex.position.x;
    Zombi.position.y = Alex.position.y;

  }


}

    