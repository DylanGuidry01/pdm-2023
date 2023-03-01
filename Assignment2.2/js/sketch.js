const synth = new Tone.PolySynth();

let notes = {

  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5',
  
  'z': 'C3',
  'x': 'D3',
  'c': 'E3',
  'v': 'F3',
  'b': 'G3',
  'n': 'A3',
  'm': 'B3',
  ',': 'C4',

  'q': 'C5',
  'w': 'D5',
  'e': 'E5',
  'r': 'F5',
  't': 'G5',
  'y': 'A5',
  'u': 'B5',
  'i': 'C6',

}

function setup() {
  createCanvas(400, 400);
  synth.toDestination();
}

function draw() {
  background(200);
  text("High Octave: Q W E R T Y U I",50,50);
  text("Middle Octave: A S D F G H J K", 50, 100);
  text("Low Octave: Z X C V B N M ,", 50, 150);
  
}

function keyPressed() {
  let whatNote = notes[key];
  console.log(whatNote);
  synth.triggerAttackRelease(whatNote, "8n");
}
