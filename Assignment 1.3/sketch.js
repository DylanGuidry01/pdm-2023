let spelunkyBoySheet;
let spelunkyGirlSheet;
let blueSheet;
let limeSheet;
let ninjaSheet;
let purpleSheet;

let spelunkyBoyAnimation;
let spelunkyGirlAnimation;
let blueAnimation;
let limeAnimation;
let ninjaAnimation;
let purpleAnimation;

function preload() {
  spelunkyBoySheet = loadImage("assets/SpelunkyGuy.png");
  spelunkyGirlSheet = loadImage("assets/SpelunkyGirl.png");
  blueSheet = loadImage("assets/Blue.png");
  limeSheet = loadImage("assets/Lime.png");
  ninjaSheet = loadImage("assets/Ninja.png");
  purpleSheet = loadImage("assets/Purple.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  
  spelunkyBoyAnimation = new WalkingAnimation(spelunkyBoySheet,80,80,100,200,9);
  spelunkyGirlAnimation = new WalkingAnimation(spelunkyGirlSheet,80,80,200,200,9);
  blueAnimation = new WalkingAnimation(blueSheet,80,80,300,200,9);
  limeAnimation = new WalkingAnimation(limeSheet,80,80,100,300,9);
  ninjaAnimation = new WalkingAnimation(ninjaSheet,80,80,200,300,9);
  purpleAnimation = new WalkingAnimation(purpleSheet,80,80,300,300,9);
  
}


function draw() {
  background(220);

  spelunkyBoyAnimation.draw();
  spelunkyGirlAnimation.draw();
  blueAnimation.draw();
  limeAnimation.draw();
  ninjaAnimation.draw();
  purpleAnimation.draw();
}

function keyPressed() { 
  spelunkyBoyAnimation.keyPressed(RIGHT_ARROW, LEFT_ARROW);
  spelunkyGirlAnimation.keyPressed(RIGHT_ARROW, LEFT_ARROW);
  blueAnimation.keyPressed(RIGHT_ARROW,LEFT_ARROW);
  limeAnimation.keyPressed(RIGHT_ARROW,LEFT_ARROW);
  ninjaAnimation.keyPressed(RIGHT_ARROW,LEFT_ARROW);
  purpleAnimation.keyPressed(RIGHT_ARROW,LEFT_ARROW);
}

function keyReleased() {
  spelunkyBoyAnimation.keyReleased(RIGHT_ARROW, LEFT_ARROW);
  spelunkyGirlAnimation.keyReleased(RIGHT_ARROW, LEFT_ARROW);
  blueAnimation.keyReleased(RIGHT_ARROW,LEFT_ARROW);
  limeAnimation.keyReleased(RIGHT_ARROW,LEFT_ARROW);
  ninjaAnimation.keyReleased(RIGHT_ARROW,LEFT_ARROW);
  purpleAnimation.keyReleased(RIGHT_ARROW,LEFT_ARROW);

}

class WalkingAnimation {
  constructor(spritesheet, sw, sh, dx, dy, animationLength, offsetX = 0, offsetY = 0) {
    this.spritesheet = spritesheet;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.u = 0;
    this.v = 0;
    this.animationLength = animationLength;
    this.currentFrame = 0;
    this.moving = 0;
    this.direction = 1;
    this.offsetX = offsetX;
    this.offsetY = offsetY
  }

  draw() {

    this.u = (this.moving != 0) ? this.currentFrame % this.animationLength: 0;
    push();
    translate(this.dx,this.dy);
    scale(this.xDirection,1);
    image(this.spritesheet,0,0, this.sw, this.sh, this.u*this.sw, this.v*this.sh, this.sw, this.sh);
    pop();
    if (frameCount % 6 == 0) {
      this.currentFrame++;
    }

    this.dx += this.moving;
  }

  keyPressed(right, left) {

    if(keyCode === right) {
      this.moving = 1;
      this.xDirection = 1;
      this.currentFrame = 1;
    } else if (keyCode === left) {
      this.moving = -1;
      this.xDirection = -1;
      this.currentFrame = 1;
    }
  }

  keyReleased(right, left) {
    if(keyCode === right || keyCode === left)
      this.moving = 0;
  }
}
