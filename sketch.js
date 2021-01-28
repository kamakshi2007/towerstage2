const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;


function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //block = (color(random(100,200),random(100,200),random(100,200)))
    //blok =  (color(random(100,200),random(100,200),random(100,200)))

    block1 = new Block(330+90,235+70,30,40);
    block2 = new Block(360+90,235+70,30,40);
    block3 = new Block(390+90,235+70,30,40);
    block4 = new Block(420+90,235+70,30,40);
    block5 = new Block(450+90,235+70,30,40);
    block6 = new Block(360+90,195+70,30,40);
    block7 = new Block(390+90,195+70,30,40);
    block8 = new Block(420+90,195+70,30,40);
    block9 = new Block(390+90,155+70,30,40);

    blok1 = new Block(690,100+50,30,40);
    blok2 = new Block(720,100+50,30,40);
    blok3 = new Block(750,100+50,30,40);
    blok4 = new Block(780,100+50,30,40);
    blok5 = new Block(810,100+50,30,40);
    blok6 = new Block(720,60+50,30,40);
    blok7 = new Block(750,60+50,30,40);
    blok8 = new Block(780,60+50,30,40);
    blok9 = new Block(750,20+50,30,40);
    
    stone = new Stone(50,200);

    slingshot = new SlingShot(stone.body,{x:150, y:110});

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(480,350,200,5);
    ground2 = new Ground(750,200,200,5);

    bg = (color(random(50,100),random(50,100),random(50,100)))

}

function draw(){
    background(bg);
    //background(color(random(0,100),random(0,100),random(0,100)));
    push();
    stroke("white");
    strokeWeight(5);
    textSize(30);
    fill(bg);
    text("drag the polygon with mouse and hit the blocks",50,30);
    text("press 'SPACE' to get second chance",50,70);
    pop();
    Engine.update(engine);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    blok1.display();
    blok2.display();
    blok3.display();
    blok4.display();
    blok5.display();
    blok6.display();
    blok7.display();
    blok8.display();
    blok9.display();
    
    ground.display();
    ground1.display();
    ground2.display();

    stone.display();

    slingshot.display();

    

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()  {
    if(keyCode===32)  {
        Matter.Body.setPosition(stone.body, { x: 120, y: 200 });
        slingshot.attach(stone.body);
    }
   }
  