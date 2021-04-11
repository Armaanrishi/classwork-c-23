const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //

    
   ground= new Ground(0,390,800,20);
    

   ball1=new Ball(100,40,20)
   ball2=new Ball(200,80,30)
   
  //  



   // console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ball1.display()
    fill ("yellow")
    ball2.display()
    fill ("brown")
    ground.display()
}
