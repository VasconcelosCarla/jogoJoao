var ushala, ushalaRunning;
var pista, pistaImg;
var bomb, bombImg;
var explosion, explosionBlowing;
var bau, bauImg;
var invisibleWall1, invisibleWall2;


function preload(){
ushalaRunning = loadAnimation(
"../assets/ushala1.png",
"../assets/ushala2.png",
"../assets/ushala3.png",
"../assets/ushala4.png",
"../assets/ushala5.png",
"../assets/ushala6.png"
)
pistaImg = loadImage(
"../assets/ground1.webp"
)
bombImg = loadImage(
"../assets/bomb.png"
)
explosionBlowing = loadAnimation(
"../assets/explosion1.png",
"../assets/explosion2.png",
"../assets/explosion3.png",
"../assets/explosion4.png"
)
bauImg = loadImage(
"../assets/bau.png"
)
}




function setup() {
  createCanvas(400,800);

  pista = createSprite(200,300);
  pista.addImage(pistaImg);
  pista.scale = 5
  pista.velocityY = 2;
  

  ushala = createSprite(200, 500);
  ushala.addAnimation("running", ushalaRunning);
  //ushala.scale = 1.5;

  invisibleWall1 = createSprite(15, 400, 20, 800);
  invisibleWall1.visible = false;
  invisibleWall2 = createSprite(380, 400, 20, 800);
  invisibleWall2.visible = false;

}

function draw() {
  background(225);
  console.log(pista.y);

  if(pista.y ===950){
    pista.y =  350
  }

  if(keyDown("left")){
    ushala.x = ushala.x - 10;
  }

  if(keyDown("right")){
    ushala.x = ushala.x + 10;
  }

      ushala.bounceOff(invisibleWall1);
  ushala.bounceOff(invisibleWall2);
  drawSprites();
}