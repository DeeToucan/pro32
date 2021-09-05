
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var rubberBand;
var poduim;
var boxWidth = 30,boxHeight = 40;
var bg;

function preload() {
	getTime();
}



function setup() {
	createCanvas(800, 400);

  engine = Engine.create();
	world = engine.world;

  ground = new WALL(400, 400, width, 100);
  poduim = new WALL(390,255,300,30);

  ball = new CIRCLE(200,100,10);

  box1 = new BOX(330,235,boxWidth,boxHeight);
  box2 = new BOX(360,235,boxWidth,boxHeight);
  box3 = new BOX(390,235,boxWidth,boxHeight);
  box4 = new BOX(420,235,boxWidth,boxHeight);
  box5 = new BOX(450,235,boxWidth,boxHeight);

  box6 = new BOX(360,195,boxWidth,boxHeight);
  box7 = new BOX(390,195,boxWidth,boxHeight);
  box8 = new BOX(420,195,boxWidth,boxHeight);

  box9 = new BOX(390,155,boxWidth,boxHeight);
  


  rubberBand = new ROPE(ball.body, {x: 100, y:200});

	Engine.run(engine);
  
}


function draw() {
  if (bg == "day"){
    background(0,0,230);
    // console.log("day");
  } else if (bg == "night"){
    background(30,0,50);
    // console.log("night");
  } 
  if (mouseIsPressed){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
  }

  box1.display(0,0,50);
  box2.display(0,0,50);
  box3.display(0,0,50);
  box4.display(0,0,50);
  box5.display(0,0,50);
  box6.display(0,50,0);
  box7.display(0,50,0);
  box8.display(0,50,0);
  box9.display(50,0,0);

  box1.update();
  box2.update();
  box3.update();
  box4.update();
  box5.update();
  box6.update();
  box7.update();
  box8.update();
  box9.update();

  rubberBand.display();
  ball.display(100,0,100);
  ground.display(90,90,90);
  poduim.display(90,90,90);
  drawSprites();
}

// function mousePressed(){
  
// }

function mouseReleased(){
  rubberBand.fly();
}

function keyPressed(){
  rubberBand.attach(ball.body);
  Matter.Body.setPosition(ball.body, {x: 100, y:200})
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "day";
  } else {
      bg = "night";
  }

}

