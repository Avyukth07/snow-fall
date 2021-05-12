const Bodies = Matter.Bodies;
var engine, world;
var snow = [];
var rand;
var maxSnow=100;
function preload(){

}

function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(400,700);
   if(frameCount%150===0){
       for(var i=0;i<maxSnow;i++){
           snow.push(new createSnow(random(0,400),random(0,400)));
       }
   }
    
}

function draw(){
    Engine.update(engine);
    background(0);
    rand=Math.round(random(1,4));
    if(frameCount%80===0)


    for(var i=0;i<maxSnow;i++){
        snow[i].showSnow();
        snow[i].updateY();
    }
    drawSprites()
    
}   
