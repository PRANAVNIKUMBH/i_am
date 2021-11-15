var gameState = 0
var s = 0
function preload (){
  bgimg = loadImage('i/bg.png')
  bi = loadAnimation('0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png')
  wi = loadImage("i/w.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  b = createSprite(50,height/2)
  b.addAnimation('b',bi)
  b.scale = 0.6 
  wg  = createGroup()
}

function draw() {
  background(bgimg);
  textSize(20) 
  text ('SCORE = '+s,width-120,30)
  if (gameState===0){

  
  w() 
  if (keyDown("space")){
    b.velocityY = -5 
  }
  
  
  b.velocityY = b.velocityY+0.3

  if (b.isTouching(wg)){
    gameState = 1
  }

  for(var i = 0;i < wg.length ; i++){
    if (wg.get(i).x < -10){
      wg.get(i).destroy()
      s = s + 1
    }
  }
}


if (gameState===1){
  textSize(25)
 text("BETTER LUCK NEXT TIME",width/2-100,height/2)
 

}

b.debug = true
  drawSprites();
}

function w(){
  var r = [280,300,250,370]
  var n  = random(r)
  var w  =[height-100,height-60]
  var l = random(w)
  if(l===height-100){
    a = 100
  }else{
    a = 60
  }

  if (frameCount%n===0){
    wall1 = createSprite(width,l)
    wall1.addImage(wi)
    wall1.velocityX = -2
    wall1.scale = 1
    wall1.debug = true
    wall1.setCollider("rectangle", 0,0,90,317 )
    wg.add(wall1)

    wall2 = createSprite(width,60)
    wall2.addImage(wi)
    wall2.velocityX = -2
    wall2.scale = 1
    wall2.rotation=180
    wall2.debug = true
    wall2.setCollider("rectangle", 0,0,90,317 )
    wg.add(wall2)

  }
}

