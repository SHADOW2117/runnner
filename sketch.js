const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    pig=new Pig(850,370,50,50);
    pig2 = new Pig(850,330,50,50);
    box5=new Box (850,270,50,50); 
    box1 = new Box(950,370,50,50);
    box2 = new Box(750,370,50,50);
    box3=new Box(950,330,50,50);
    box4= new Box(750,330,50,50);
    log=new Log(850,330,300,10,0);
    log2=new Log(850,270,300,10,0);
    log3=new Log(800,250,10,100,PI/6); 
    log4=new Log(900, 250,10,100,-PI/6);
    ground = new Ground(600,height,1200,20)
    bird = new Bird (100,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    log2.display();
    log.display();
    log4.display();
    log3.display();
    bird.display();
    pig.display();
    pig2.display();
}