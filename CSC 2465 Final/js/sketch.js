const synth = new Tone.PolySynth();
const delay = new Tone.FeedbackDelay('8n',0);

let sounds = new Tone.Players({
  "correct": "assets/correct.mp3",
  "gameover": "assets/gameOver.mp3"
})

const GameState = {
  Start: "Start",
  Playing: "Playing",
  GameOver: "GameOver"
};

let game = { score: 0, state: GameState.Start, highScore: 0}
let patternArray = [];
let answerArray = [];

let colorOptions = [0,1,2,3];

// Red Saturated: 12, 65, 91
// Red NonSaturated: 12,30,91

// Yellow Saturated: 43, 55, 91
// Yellow NonSaturated: 43, 30, 91

// Green Saturated: 173, 73, 62
// Green NonSaturated: 173, 30, 62

// Blue Saturated: 197, 54, 33
// Blue NonSaturated: 197, 20, 33

let redH = 12;
let redS = 30;
let redB = 91;

let yellowH = 43;
let yellowS = 30;
let yellowB = 91;

let greenH = 173;
let greenS = 30;
let greenB = 62;

let blueH = 197;
let blueS = 20;
let blueB = 33;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  imageMode(CENTER);
  angleMode(DEGREES);
  
  for(let i = 0; i < 5; i++) {
    patternArray[i] = random(colorOptions);
  }

  synth.toDestination();
  sounds.toDestination();
}

function draw() { 
  switch(game.state) {

    case GameState.Start:
      background(255);
      colorMode(HSB);
        
      fill(173,73,62);
      textSize(50);
      textAlign(CENTER);
      text("Memory Game", 200, 200);

      textSize(30);
      text("Press Spacebar to Start", 200, 250);
    break;

    case GameState.Playing:
      background(255);
      noStroke();

      textSize(40);
      fill(blueH, blueS, blueB);
      text("Score: " + game.score, 100,50);
        
      fill(redH, redS, redB); //red square
      square(100, 100, 200);
        
      fill(yellowH, yellowS, yellowB); //yellow square
      square(300, 100, 200);
        
      fill(greenH, greenS, greenB); //green square
      square(500, 100, 200);
        
      fill(blueH, blueS, blueB); //blue square
      square(700, 100, 200);
        
      textSize(20);
      text("Press spacebar for notes", 500, 90);

      // Color Reaction for mouse pressed
      if(mouseIsPressed == true) {
        if((mouseX > 100) && (mouseX < 300) && (mouseY > 100) && (mouseY < 300)) { //red
          fill(12, 65, 91);
          square(100, 100, 200);
        } else if((mouseX > 300) && (mouseX < 500) && (mouseY > 100) && (mouseY < 300)) { //yellow
          fill(43, 55, 91);
          square(300, 100, 200);
        } else if((mouseX > 500) && (mouseX < 700) && (mouseY > 100) && (mouseY < 300)) { //green
          fill(173, 73, 62);
          square(500, 100, 200);
        } else if((mouseX > 700) && (mouseX < 900) && (mouseY > 100) && (mouseY < 300)) { //blue
          fill(197, 54, 33);
          square(700, 100, 200);
        }
      }
    break;

    case GameState.GameOver:
      background(255);
      colorMode(HSB);
        
      fill(173,73,62);
      textSize(50);
      textAlign(CENTER);
      text("Game Over", 200, 200);

      textSize(30);
      text("Score: " + game.score + "   High Score: " + game.highScore, 200,250);
      text("Press Spacebar to retry", 200, 300);
    break;

  }
}

function keyPressed() {
  switch(game.state) {

    case GameState.Start:
      if (key == ' '){
        game.state = GameState.Playing;
      }
    break;

    case GameState.Playing:
      if (key == ' ') {  
        for(let i = 0; i < 5; i++) {
          if(patternArray[i] == 0) { //red branch
            print("The color was red");
            synth.triggerAttackRelease('B4', "8n");
            wait(500);

          } else if(patternArray[i] == 1) { // yellow branch
            print("The color was yellow");
            synth.triggerAttackRelease('G4', "8n"); 
            wait(500);

          } else if(patternArray[i] == 2) { // green branch
            print("The color was green");
            synth.triggerAttackRelease('E4', "8n");
            wait(500);

          } else { // blue branch
            print("The color was blue");
            synth.triggerAttackRelease('C4', "8n");
            wait(500);
          }
        }
      } 
    break;

    case GameState.GameOver:
      if (key == ' '){
        resetPattern();
        game.score = 0;
        game.state = GameState.Start; 
      }
    break;

  }
}

function mousePressed() {
  switch(game.state) {
    case GameState.Playing:
      if((mouseX > 100) && (mouseX < 300) && (mouseY > 100) && (mouseY < 300)) {
        print("You pressed red");
        synth.triggerAttackRelease('B4', "8n");
        append(answerArray, "0");
        check();
      } else if((mouseX > 300) && (mouseX < 500) && (mouseY > 100) && (mouseY < 300)) {
        print("You pressed yellow");
        synth.triggerAttackRelease('G4', "8n");
        append(answerArray, "1");
        check();
      } if((mouseX > 500) && (mouseX < 700) && (mouseY > 100) && (mouseY < 300)) {
        print("You pressed green");
        synth.triggerAttackRelease('E4', "8n");
        append(answerArray, "2");
        check();
      } if((mouseX > 700) && (mouseX < 900) && (mouseY > 100) && (mouseY < 300)) {
        print("You pressed blue");
        synth.triggerAttackRelease('C4', "8n");
        append(answerArray, "3");
        check();
      } 
    break;
  }
}

function check() { 
  let stretch = answerArray.length;
  let correctCheck = 0;

  for(let i = 0; i < stretch; i++) {
    if(answerArray[i] == patternArray[i]) {
      correctCheck++;
    } else {
      if(game.score > game.highScore) {
        game.highScore = game.score;
      }
      game.state = GameState.GameOver;
      sounds.player('gameover').start();
    }
  }

  if(correctCheck == 5)  {
    game.score++;
    sounds.player('correct').start();
  }

  if(stretch == 5) {
    resetPattern();
  }
}
  
function resetPattern () {
  for(let i = 0; i < 5; i++) {
    patternArray[i] = random(colorOptions);
    answerArray.pop();
  }
}

function wait(time) {
  start = millis()
  do { current = millis()}
  while (current < start + time)
}