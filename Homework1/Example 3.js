function setup() {
  createCanvas(400,200);
}

function draw() {

  background(0);
  // Pacman
  fill(242,235,27);
  ellipse(100,100,150,150);
  fill(0);
  angleMode(DEGREES);
  arc(100,100,150,150,135,220,PIE);
  // Ghost
  fill(242,22,22);
  ellipse(300,100,150,150);
  noStroke();
  rect(225,100,150,75);
  // Ghost Eyes
  fill(255);
  ellipse(270,100,40,40);
  ellipse(330,100,40,40);
  fill(40,35,204);
  ellipse(270,100,25,25);
  ellipse(330,100,25,25);

}