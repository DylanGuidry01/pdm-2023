
// let sound1 = new Tone.Player("sounds/chicken.wav");

let sounds = new Tone.Players({
  "Bonk": "sounds/bonk.mp3",
  "Aww": "sounds/wiiCrowd.mp3",
  "Water Drop": "sounds/water.mp3",
  "DuctTape": "sounds/ductTape.wav",
  "Fart": "sounds/fart.mp3",
  "Paris": "sounds/frenchSong.mp3",
  "Woah": "sounds/Woah.mp3",
  "Boom": "sounds/vineBoom.mp3",
  "Uh Oh": "sounds/UhOh.mp3",
  "White Lotus": "sounds/whiteLotus.mp3",
  "Unite Dub": "sounds/UniteWin.mp3",
  "Unite L": "sounds/UniteLose.mp3",
  "Clap if you Care": "sounds/Clap.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0);

let soundNames = ["Bonk","Aww", "Water Drop", "DuctTape","Fart","Paris","Woah","Boom", "Uh Oh", "White Lotus", "Unite Dub", "Unite L", "Clap if you Care"];
let buttons = [];

let dSlider;
let fSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    if(index <= 5) 
      buttons[index].position(10, (index*30)+100);
    else
      buttons[index].position(100, ((index-6)*30)+100);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0, 0.05);
  dSlider.position(20,350);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0., 1, 0, 0.05);
  fSlider.position(240,350);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

function draw() {
  background(230, 230, 230);
  textSize(20);
  text('Press the buttons for sound', 60, 60);
  text('Delay Time',30,345);
  text('Reverb', 250,345);

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}