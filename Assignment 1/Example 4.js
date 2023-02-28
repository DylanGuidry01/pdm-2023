function setup() {
  createCanvas(400,400);
}

function draw() {
  
  background(11,7,138);

  fill(55,138,51);
  ellipse(200,200,200,200);
  stroke(255); 
  strokeWeight(5);
  
  // Star
  fill(245,49,15);
  beginShape(); 
  vertex(100,175); // 1

  vertex(175,175); // 2
  
  vertex(200,100); // 3
  
  vertex(225,175); // 4
  
  vertex(300,175); // 5
  
  vertex(240,225); // 6
  
  vertex(260,290); // 7
  
  vertex(200,250); // 8
  
  vertex(150,290); // 9
  
  vertex(160,225); // 10
  
  endShape(CLOSE);
  
  stroke(255); 
  strokeWeight(5);



}