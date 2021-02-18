var man,manimg,manimg1
var thunderbolt,thunderboltimg

function preload(){
 manimg = loadImage("man/walking_1.png"); 
 manimg1 = loadImage("man/walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")  
 thunderbolt = loadImage("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png")
}

function setup(){
createCanvas(400,600)

man = createSprite(50,480,0,0);
man.addImage("run",manimg);
man.scale = 0.3
    
}

function draw(){
 background(0);

man.velocityX = 0

 if (keyDown("right_arrow")){
     man.velocityX = 3
   man.addImage("run1",manimg1);  
 }
 spawnThunderbolt();
 drawSprites();
}   

function spawnThunderbolt(){
    if (frameCount % 60 === 0){
        thunderbolt = createSprite(200,200)
        thunderbolt.addImage("thunderbolt",thunderboltimg)
        thunderbolt.x = Math.round(random(120,400))
        thunderbolt.lifetime = 700


    }
}

