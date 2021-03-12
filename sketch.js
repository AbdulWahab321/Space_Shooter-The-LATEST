var missile,shooter,invader,edges,invader1,missile1,missile1Gr,BigInvader,music1,music2,music3,next,rty,Try,spac,mou;
var PLAY=2;
var START=3;
var END=1;
var INST=4
var SETT=5
var SPACEC=6
var ROCKE=7
var NOROCKE=8
var MOUSOU=9
var NOMOUSOU=10
var OUT=13
var ENDTEXT=0
var GARAGE=11
var SHSPACE=12
var gameState=GARAGE;
var biginvader;
var score=0;
var life=5;
var MISSILE;
var earth,earth1,sh,shieldc,Notinpc,shot, stop1,stopleft,stopright;
var nomusic,yessound,nosound,invader2GR;
function preload(){;
shooterImg=loadImage("2.png")
shooter2IMG=loadImage("1.png")
inv=loadImage("3.png")
 space=loadImage("space.png") 
  miss=loadImage("missile22.png")
  miss1=loadImage("missile2.png")
  over=loadImage("over.png")
  song=loadSound("sonicastronomia.mp3")
  rocket=loadSound("launc.wav")
  overSnd=loadSound("over.wav")
  invaderBIG=loadImage("Big invader.png")
  earth1=loadImage("EARTH.png")
  spec=loadSound("spectre.mp3")
  alo=loadSound("alone.mp3")

  invad=loadImage("new.png")
}
function setup(){
 createCanvas(1000,600 );
  gameState=START;
  edges=createEdgeSprites()



 earth=createSprite(500,400,30,30);
 earth.addImage(earth1);
 earth.visible=false
  
 shooter=createSprite(200,200,20,20);
 shooter.scale=0.11
 shooter.addImage(shooterImg)

 stop1=createSprite(500,300,1100,10);
 stop1.visible=false
 stopleft=createSprite(0,300,10,1100)
 stopleft.visible=false;
 stopright=createSprite(1000,300,10,1100)
 stopright.visible=false;

  missileGr=new Group();
  invaderGr=new Group();
  invader2GR=new Group();
  missile1Gr=new Group();
  
  
}
function draw(){
  background(space)
  edges=createEdgeSprites();
  shooter.debug=true
  shooter.setCollider("rectangle",0,0,1500,1500);
  if(gameState===GARAGE){
    
  }
  
   if(gameState===NOROCKE){
    shooter.x=World.mouseX
    shooter.y=World.mouseY
    
    shooter.scale=0.11
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    shooter.visible=true;
   

    

    earth.visible=false;
    spawnInvader();
    if(frameCount%200===0){
      spawnBigInvader();
      }

      
    if(keyDown("space")){
      spmiss();
      
    }
  if(missileGr.isTouching(invaderGr)){
  invaderGr.destroyEach();
  missileGr.destroyEach();
  rocket.stop();
  score=score+1
  }
  if(missileGr.isTouching(invader2GR)){
    invader2GR.destroyEach();
    missileGr.destroyEach();
    rocket.stop();
    score=score+1
    }
  if(life=0){
  invaderGr.destroyEach();
  }
  if(invaderGr.isTouching(shooter)){
   overSnd.play()
   gameState=END
  }
  if(invader2GR.isTouching(shooter)){
    overSnd.play()
    gameState=END
   }
  }
 
  if(gameState===MOUSOU){
    shooter.x=World.mouseX
    shooter.y=World.mouseY
    shooter.addImage(shooterImg);
    shooter.scale=0.11
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    shooter.visible=true;
    
    earth.visible=false;
    spawnInvader();
      if(frameCount%200===0){
      spawnBigInvader();
      }

     
    if(mousePressedOver(shooter)){
      spmiss();
      rocket.play();
    }
  if(missileGr.isTouching(invaderGr)){
  invaderGr.destroyEach();
  missileGr.destroyEach();
  rocket.stop();
  score=score+1
  }
  if(missileGr.isTouching(invader2GR)){
    invader2GR.destroyEach();
    missileGr.destroyEach();
    rocket.stop();
    score=score+1
    }
  if(life=0){
  invaderGr.destroyEach();
  }
  if(invaderGr.isTouching(shooter)){
   overSnd.play()
   gameState=END
  }
  if(invader2GR.isTouching(shooter)){
    overSnd.play()
    gameState=END
   }
   }
  
   if(gameState===NOMOUSOU){
    shooter.x=World.mouseX
    shooter.y=World.mouseY
    shooter.addImage(shooterImg);
    shooter.scale=0.11
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    shooter.visible=true;

    earth.visible=false;
    spawnInvader();
    if(frameCount%200===0){
      spawnBigInvader();
      }

   
    if(mousePressedOver(shooter)){
      spmiss();
      
    }
  if(missileGr.isTouching(invaderGr)){
  invaderGr.destroyEach();
  missileGr.destroyEach();
  rocket.stop();
  score=score+1
  }
  if(missileGr.isTouching(invader2GR)){
    invader2GR.destroyEach();
    missileGr.destroyEach();
    rocket.stop();
    score=score+1
    }
  if(life=0){
  invaderGr.destroyEach();
  }
  if(invaderGr.isTouching(shooter)){
   overSnd.play()
   gameState=END
  }
  if(invader2GR.isTouching(shooter)){
    overSnd.play()
    gameState=END
   }
   }




 if(gameState===ROCKE){
  shooter.x=World.mouseX
  shooter.y=World.mouseY
  shooter.addImage(shooterImg);
  shooter.scale=0.11
  music1.visible=false;
  music2.visible=false;
  music3.visible=false;
  shooter.visible=true;

  earth.visible=false;
  spawnInvader();
  if(frameCount%200===0){
  spawnBigInvader();
  }

 
  if(keyDown("space")){
    spmiss();
    rocket.play();
  }
if(missileGr.isTouching(invaderGr)){
invaderGr.destroyEach();
missileGr.destroyEach();
rocket.stop();
score=score+1
}
if(missileGr.isTouching(invader2GR)){
  invader2GR.destroyEach();
  
  missileGr.destroyEach();
  rocket.stop();
  score=score+5
  }
if(life=0){
invaderGr.destroyEach();
}
if(invaderGr.isTouching(shooter)){
 overSnd.play()
 gameState=END
}
if(invader2GR.isTouching(shooter)){
  overSnd.play()
  gameState=END
 }
 }

 if(gameState===NOROCKE){
  shooter.x=World.mouseX
  shooter.y=World.mouseY
  shooter.addImage(shooterImg);
  shooter.scale=0.11
  music1.visible=false;
  music2.visible=false;
  music3.visible=false;
  shooter.visible=true;
  
  earth.visible=false;
  spawnInvader();
  if(frameCount%250===0){
    spawnBigInvader();
  }

  
 

  if(keyDown("space")){
    spmiss();
    
  }
if(missileGr.isTouching(invaderGr)){
invaderGr.destroyEach();

missileGr.destroyEach();
rocket.stop();
score=score+1
}
if(missileGr.isTouching(invader2GR)){
  invader2GR.destroyEach();
  
  missileGr.destroyEach();
  rocket.stop();
  score=score+5
  }
if(life=0){
invaderGr.destroyEach();
}
if(invaderGr.isTouching(shooter)){
 overSnd.play()
 gameState=END
}
if(invader2GR.isTouching(shooter)){
  overSnd.play()
  gameState=END
 }

 }

  if(gameState===SETT){
    textSize(30)
    fill("white")
    text("How do you need to shoot rocket using mouse or space",50,100);
    
    text("___________________________________________________________________________________________________________________",0,180)

    spac=createSprite(100,150,150,50);
    mou=createSprite(400,150,150,50);
 
    text("(Space)",spac.x,spac.y);
    text("(Mouse)",mou.x,mou.y);
 
    spac.visible=false;
    mou.visible=false;

    if(mousePressedOver(spac)){
      gameState=SPACEC
    }
    if(mousePressedOver(mou)){
      gameState=PLAY
    }

    }
    if(gameState===SPACEC){

      textSize(30)
      fill("white")
      text("Do you need rocket sound when shooting rocket",70,250);
      yessound=createSprite(230,300,200,40);
      nosound=createSprite(600,300,200,40);
      text("(YES)",yessound.x,yessound.y+10);
      text("(NO)",nosound.x,nosound.y+10);
      yessound.visible=false;
      nosound.visible=false;
      if(mousePressedOver(yessound)){
        gameState=ROCKE;
      }

   if(mousePressedOver(nosound)){
       gameState=NOROCKE;   
    }
  }

  
  
  if(gameState===INST){
    
    textSize(40)
    fill("red")
    stroke("red")
    strokeWeight(2)
    text("__________________________________________________________________________________________",1,100)
    strokeWeight(4)
    textSize(40)
    
    text("WARNING:",20,100);
    fill("white")
    textSize(30)
    noStroke();
    text("THIS GAME ONLY WORKS ON PC",230,100);
    
    text("You are created to save the earth kill all the 100 invaders to save earth",20,150);
    text("Press the shooter to shoot rocket or press over shooter",100,200);
     next=createSprite(850,300,150,40);
    
     textSize(30)
     text("(NEXT>>)",next.x-60,next.y+10)
    
     shooter.visible=false;
     next.visible=false;
     if(frameCount%1===0){
     if(mousePressedOver(next)){
       gameState=SETT;
}
}
}

  if(gameState===START){
    music1=createSprite(150,300,230,40);
    music1.shapeColor="white";
    music2=createSprite(800,305,200,40);
    music2.shapeColor="white";
    music3=createSprite(400,350,200,40);
    nomusic=createSprite(500,355,200,40)
    music3.shapeColor="white";
    shooter.visible=false;
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    nomusic.visible=false;
    textSize(40)
    fill("red")
    stroke("red")
    strokeWeight(2)
    text("__________________________________________________________________________________________",1,100)
    strokeWeight(4)
    textSize(40)
    score=0
    text("WARNING:",20,100);
    fill("white")
    textSize(30)
    noStroke();
    text("THIS GAME ONLY WORKS ON PC",230,100);
    textSize(30)
    fill("white")
    text("(ASTRONOMIA)",music1.x-110,music1.y+10);
    text("(SPECTRE)",music2.x-60,music2.y+10);
    text("(ALONE)",music3.x-50,music3.y+10);
    text("(NONE)",nomusic.x-10,nomusic.y+5)
    stroke("white");
    textSize(30)
    strokeWeight(1)
    text("Press which music you need",280,200)
    if(frameCount%1===0){
    if(mousePressedOver(music1)){
      
      song.play();
      
      gameState=SETT;
    
    }
  }

  if(frameCount%1===0){
    if(mousePressedOver(music2)){
      
      spec.play();
      gameState=SETT;
    
    }
  }

  if(frameCount%1===0){
    if(mousePressedOver(music3)){
      
      alo.play();
      gameState=SETT;
    
    }
  }

  if(frameCount%1===0){
    if(mousePressedOver(nomusic)){
      gameState=SETT;
    
    }
  }
    
  }
  
  if(gameState===ENDTEXT){
    shooter.visible=false;
       textSize(35)
       fill("white")
      text("Press Retry button",350,200);
      text("___________________",310,200) 
      text("YOU LOSE",400,300)
      text("TRY to win",390,350)
      Try=createSprite(500,500,150,50)
      Try.visible=false;
      text("<(RETRY)>",Try.x-40,Try.y)
      if(mousePressedOver(Try)){
          gameState=START;
      }
      
 
  }

  if(gameState===PLAY){
    textSize(30)
    fill("white")
    text("Do you need rocket sound when shooting rocket",70,250);
  
    yessound=createSprite(230,300,200,40);
    nosound=createSprite(600,300,200,40);
    
    text("(YES)",yessound.x,yessound.y+10);
    text("(NO)",nosound.x,nosound.y+10);
    nosound.visible=false;
    yessound.visible=false;
    if(mousePressedOver(yessound)){
      gameState=MOUSOU

    }

 if(mousePressedOver(nosound)){
     gameState=NOMOUSOU
 }
  }
  if(gameState===END){
    shooter.x=450;
    shooter.y=300;
    shooter.addImage(over);
    shooter.scale=1;
    invaderGr.setVelocityYEach(0);
    shooter.setCollider("rectangle",0,0,-5,-5);
    invaderGr.destroyEach();
   
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    
    rty=createSprite(800,290,200,40)
    rty.visible=false;
    textSize(30)
    fill("white")
    text("NEXT>>",800,300)
    spec.stop();
    alo.stop();
    sound1()
    if(mousePressedOver(rty)){
      gameState=ENDTEXT
    }
    reset()
  }
 

 
  if(score===100){
  
  earth.scale=0.2
  fill("black")
  textSize(35)
  text("YOU WON",350,200);
  text("You saved the Earth from the invaders",200,300);
  shooter.visible=false;
  earth.visible=true; 
  invaderGr.destroyEach();
  invader1GR.destroyEach();
  missile.visible=false;
  rocket.stop();
  
  if(keyCode===82){
    
    gameState=PLAY;
    score=0
  }
  }

  drawSprites();
  textSize(15);
  noStroke();
  fill("white")
  text("Score:"+score,530,20);
  text("score 100 to win",500,590);

}
function spawnInvader(){
  if(frameCount%50===0){
    invader=createSprite(Math.round(random(10,590)),-50)
    invader.velocityY=28
    invader.addImage(inv) 
    invader.scale=0.1
    invader.lifetime=-1
    invaderGr.add(invader)

}}

function spawnBigInvader(){
   
  
    invader1=createSprite(Math.round(random(10,590)),-100)
    invader1.velocityY=45
    invader1.addImage(invad) 
    invader1.scale=2
    invader1.lifetime=-1
    invader1.bounceOff(stopleft)
    
    invader2GR.add(invader1)
   









  
  
  
  
  }

function spmiss(){
   missile= createSprite(100,100,12,12) 
 missile.addImage(miss);
 missile.scale=0.1 
 missile.velocityY=-14; 
  missile.x=shooter.x
  missile.y=shooter.y
  missile.lifetime=-1
 missileGr.add(missile) 
 
 
}
function reset(){

  
}
function sound(){
 if(frameCount-5===0){
  
 }
  
  
 

}
function sound1(){
  song.stop();
  
}
function asd(){
  BigInvader=createSprite(500,300,10,10)
  BigInvader.addImage(inv)
  BigInvader.scale=0.2
  MISSILE=createSprite(520,500,20,10)
  MISSILE.addImage(miss1)
  MISSILE.scale=0.2; 
}

