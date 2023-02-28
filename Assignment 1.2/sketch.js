let R = 0;
let G = 0;
let B = 0;
let canvasWidth = 700;
let canvasLength = 700;

function setup() {
  createCanvas(canvasWidth, canvasLength);
  background(255,255,255);
  colorMode(RGB);

}

function draw() {
// Palette:
  // red
  noStroke();
  fill(234,65,44);
  square(5,5,25); 
  // orange
  fill(239,135,52);
  square(5,35,25);
  // yellow
  fill(255,248,74);
  square(5,65,25);
  // green
  fill(119,242,59);
  square(5,95,25);
  // cyan
  fill(116,249,252);
  square(5,125,25);
  // blue
  fill(0,68,247);
  square(5,155,25);
  // magenta
  fill(233,93,250);
  square(5,185,25);
  // brown
  fill(119,67,21);
  square(5,215,25);
  // white
  fill(255,255,255);
  square(5,245,25);
  // black
  fill(0,0,0);
  square(5,275,25);

// Upper Right Corner:

  // current color
  stroke(0);
  strokeWeight(1);
  fill(R,G,B);
  circle(canvasWidth-20,20,25);

  // clear button
  fill(230,230,230);
  rect(canvasWidth-93,11,55,20);
  textSize(20);
  fill(0);
  text('Clear', canvasWidth-90,27);
  
}

function mouseDragged() {
  strokeWeight(10);
  stroke(R,G,B);
  line(mouseX,mouseY,pmouseX,pmouseY);
  noFill();

}

function mouseReleased() {}

function mousePressed() {
  // red branch
  if (mouseX > 5 && mouseX < 5+25 && mouseY > 5 && mouseY < 5+25) {
    R = 234;
    G = 65;
    B = 44;
  } 
  // orange branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 35 && mouseY < 35+25) {
    R = 239;
    G = 135;
    B = 52;
  } 
  // yellow branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 65 && mouseY < 65+25) {
    R = 255;
    G = 248;
    B = 74
  } 
  // green branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 95 && mouseY < 95+25) {
    R = 119;
    G = 242;
    B = 59;
  } 
  // cyan branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 125 && mouseY < 125+25) {
    R = 116;
    G = 249;
    B = 252;
  } 
  // blue branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 155 && mouseY < 155+25) {
    R = 0;
    G = 68;
    B = 247;
  } 
  // magenta branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 185 && mouseY < 185+25) {
    R = 233;
    G = 93;
    B = 250;
  }
  // brown branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 215 && mouseY < 215+25) {
    R = 119;
    G = 67;
    B = 21;
  } 
  // white branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 245 && mouseY < 245+25) {
    R = 255;
    G = 255;
    B = 255;
  }  
  // black branch
  else if (mouseX > 5 && mouseX < 5+25 && mouseY > 275 && mouseY < 275+25) {
    R = 0;
    G = 0;
    B = 0;
  } 
  // clear branch
  else if(mouseX > canvasWidth-93 && mouseX < canvasWidth-38 && mouseY > 10 && mouseY < 31){
    background(255,255,255);
  }
  // If not on any object, draw
  else {
    strokeWeight(10);
    stroke(R,G,B);
    line(mouseX,mouseY,pmouseX,pmouseY);
    noFill();
  }

}
