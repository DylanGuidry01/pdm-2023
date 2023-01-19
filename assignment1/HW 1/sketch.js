function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
}

function draw() {
  background(263,50,100);
  
  // Drawing eyes
  ellipse(200,100,50,50);
  ellipse(400,105,50,50);

  // Filling eyes using fill
  //fill(0);
  //ellipse(200,100,10,10);
  //ellipse(400,105,10,10);
  //fill(255);

  // Filling eyeys using push()/pop()
  push();
  noStroke();
  
  fill(120,100,100);
  ellipse(200,100,20,20);
  ellipse(400,105,20,20);
  
  fill(0);
  ellipse(200,100,10,10);
  ellipse(400,105,10,10);
  pop();


  // Drawing nose
  //triangle(300,100,290,200, 310,200);
  beginShape();
  vertex(300,100);
  vertex(280,200);
  vertex(300,205);
  vertex(320,200);
  vertex(305,100);
  endShape(CLOSE);

  // Drawing mouth

  push();
  fill(100,30,100);
  arc(300,220,200,100,0,PI,PIE);
  pop();

  // Drwaing eyebrows
  push();
  strokeWeight(6);
  line(175,65,225,65);
  line(375,70,425,65);
  pop();

}