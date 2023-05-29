// sketch.js
let soundClassifier;
let label = "waiting...";

function preload() {
  const modelURL = 'https://teachablemachine.withgoogle.com/models/0DFbqdqVs/';
  soundClassifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  soundClassifier.classify(gotResults);
}

function draw() {
  background(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  soundClassifier.classify(gotResults);

  let emoji = "🚂";
  if (label === "violin") {
    emoji = "🌈";
  } else if (label === "cello") {
    emoji = "🦄";
  } else if (label === "flute") {
    emoji = "🔈";
  } else if (label === "clarinet") {
    emoji = "🎸";
  } else if (label === "piano") {
    emoji = "🎹";
  }

  textSize(256);
  text(emoji, width / 2, height / 2);
}
