const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var backround;
var serpiente = 5;
var direcion = "derecha"
var Xinicio =0, Yinicio=250;

var serpienteX = []
var serpienteY = []


function preload() {
  backround = loadImage("backround.jpg")
  
}

function setup() {
  canvas = createCanvas(1200,600);
  
}

function draw() {
  background(500);
  image(backround,0,0,width,height);
  
  for (var i=0;i<serpiente-1;i++){
    line(serpienteX[i],serpienteY[i],serpienteX[i+1], serpienteY[i+1])

  }

  push();
  fill("green")
   rect(600,300,30,20);
  pop();
}    

function movimiento(){
  
  switch(keyCode){
     case 37:
      if(direcion!=="derecha"){
        direcion="izquierda"

      }
      brake;
      case 39:
        if(direcion!=="izquierda"){
          direcion="derecha"
  
        }
        brake;
        case 40:
          if(direcion!=="arriba"){
            direcion="abajo"
    
          }
          brake;
          case 38:
          if(direcion!=="abajo"){
            direcion="arriba"
    
          }
          brake;
  }
  
}
