// sketch.js
let soundClassifier;
let label = "waiting...";
let violinImg, celloImg, fluteImg, clarinetImg, pianoImg;

function preload() {
  const modelURL = 'https://teachablemachine.withgoogle.com/models/0DFbqdqVs/';
  soundClassifier = ml5.soundClassifier(modelURL + 'model.json');
  violinImg = loadImage('violin.png');
  celloImg = loadImage('cello.png');
  fluteImg = loadImage('flute.png');
  clarinetImg = loadImage('clarinet.png');
  pianoImg = loadImage('piano.png');
}

function setup() {
  createCanvas(640, 520);
  soundClassifier.classify(gotResults);
  
  // Resize the images
  violinImg.resize(640, 520);
  celloImg.resize(640, 520);
  fluteImg.resize(640, 520);
  clarinetImg.resize(640, 520);
  pianoImg.resize(640, 520);
}

function draw() {
  background(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  let imageToShow;
  if (label === "violin") {
    imageToShow = violinImg;
  } else if (label === "cello") {
    imageToShow = celloImg;
  } else if (label === "flute") {
    imageToShow = fluteImg;
  } else if (label === "clarinet") {
    imageToShow = clarinetImg;
  } else if (label === "piano") {
    imageToShow = pianoImg;
  }

  if (imageToShow) {
    image(imageToShow, 0, 0);
  }
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  soundClassifier.classify(gotResults);
}
