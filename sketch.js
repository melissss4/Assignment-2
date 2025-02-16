
let userInput, userinputtext;
let button;
let userLine;
let poem = [];

let webcam;
let ballSystem = [];
let scale = 18;
let images = [];
let gifSticker1, gifSticker2;

let showVideo = false;
let cdButton, cloudsButton;

let showText = true;
let journalButton;
let journalTextInput; 

let journalEntries = [];
let entryAdded = false; 

function preload() {
  images.push(loadImage('CDs/CD1.png'));
  images.push(loadImage('CDs/Clouds.png'));
  images.push(loadImage('CDs/book.png'));
}

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

  cdButton = createImg('CDs/CD1.png', 'cd1');
  cdButton.size(100, 100);
  cdButton.position(width / 2 - 150, height / 2 - 50);
  cdButton.mousePressed(showPoemInputs);

  cloudsButton = createImg('CDs/Clouds.png', 'clouds');
  cloudsButton.size(100, 100);
  cloudsButton.position(width / 2 + 50, height / 2 - 50);
  cloudsButton.mousePressed(hideUIAndShowClouds);

  userInput = createInput();
  userInput.position(10, height - 40);
  userInput.hide();

  button = createButton('Add to Poem');
  button.position(userInput.x + userInput.width + 10, height - 40);
  button.mousePressed(newLine);
  button.hide();

  journalButton = createButton('Add to Journal');
  journalButton.position(width / 2 - 125, height / 1.15);
  journalButton.mousePressed(newJournalEntry);
  journalButton.hide();

  journalTextInput = createInput();
  journalTextInput.position(journalButton.x + journalButton.width + 10, height / 1.15);
  journalTextInput.size(200);
  journalTextInput.hide();

  for (let x = 0; x < 500; x++) {
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(2, 20);
    ballSystem[x] = new Ball(rx, ry, rr);
  }

  gifSticker1 = createImg('CDs/hellogif.gif', 'Hello Gif Sticker');
  gifSticker1.position(100, 50);
  gifSticker1.size(50, 50);
  gifSticker1.style('object-fit', 'contain');

  gifSticker2 = createImg('CDs/oldlady.gif', 'Old Lady Gif Sticker');
  gifSticker2.position(100, 150);
  gifSticker2.size(300, 50);
  gifSticker2.style('object-fit', 'contain');

  gifSticker1.hide();
  gifSticker2.hide();
}

function showPoemInputs() {
  cdButton.hide();
  cloudsButton.hide();
  userInput.show();
  button.show();
  journalButton.hide();
  journalTextInput.hide();
  toggleVideo();
  showText = false;
}

function hideUIAndShowClouds() {
  cdButton.hide();
  cloudsButton.hide();
  userInput.hide();
  button.hide();
  journalButton.show();
  journalTextInput.show();

  showVideo = false;
  image(images[2], 0, 0, width, height); 
  gifSticker1.show();
  gifSticker2.show();

  if (webcam) {
    webcam.remove();
  }
  showText = false;
}

function toggleVideo() {
  clear();
  showVideo = !showVideo;
  if (showVideo) {
    webcam = createCapture(VIDEO);
    webcam.size(width / scale, height / scale);
    webcam.hide();
  }
}

function draw() {
  if (showVideo) {
    webcam.loadPixels();
    for (let x = 0; x < ballSystem.length; x++) {
      ballSystem[x].move();
      ballSystem[x].show();
      ballSystem[x].checkEdges();
    }
    webcam.updatePixels();
  }

  fill(255);
  noStroke();
  writePoem();

  if (showText) {
    fill(0, 0, 255);
    textSize(15);
    textAlign(CENTER, CENTER);
    text('Choose one', width / 2, height / 2 - 100);
  }

  if (journalEntries.length > 0) {
    for (let entry of journalEntries) {
      displayTextOnImage(entry.text, entry.x, entry.y, 200, 100);
    }
  }
}

function newLine() {
  userLine = userInput.value();
  userInput.value('');
  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  let rhymes = RiTa.rhymesSync(words[r]);
  if (rhymes.length === 0) {
    print("No rhyme found");
    poem.push(userLine);
  } else {
    let changedWord = random(rhymes);
    words[r] = changedWord;
    userLine = RiTa.untokenize(words);
    poem.push(userLine);
  }
}

function writePoem() {
  let maxWidth = width - 20; 
  let maxHeight = height - 100;
  let textHeight = 0;
  let maxSize = 20;
  let minSize = 10;
  
  for (let x = 0; x < poem.length; x++) {
    let poemText = poem[x];
    let textSizeToFit = getTextSize(poemText, maxWidth, maxHeight, minSize, maxSize);
    
    textSize(textSizeToFit);
    textAlign(LEFT, TOP);
    text(poemText, 10, textHeight + 20);
    textHeight += textSizeToFit + 10;
  }
    
}

function getTextSize(poemText, maxWidth, maxHeight, minSize, maxSize) {
  let textSizeToFit = maxSize;
  let testTextWidth = textWidth(poemText);
  
  while (testTextWidth > maxWidth && textSizeToFit > minSize) {
    textSizeToFit--;
    testTextWidth = textWidth(poemText);
  }

  return textSizeToFit;
}

function newJournalEntry() {
  let userLine = journalTextInput.value();  
  journalTextInput.value('');  

  if (userLine !== '') {
    let randX = random(0, width - 200); 
    let randY = random(0, height - 100); 
    journalEntries.push({ text: userLine, x: randX, y: randY }); 
  }
}

function displayTextOnImage(inputText, x, y, w, h) {
  // Adjust text size and position
  let maxWidth = w - 20;
  let maxHeight = h - 100;
  let textSizeToFit = getTextSize(inputText, maxWidth, maxHeight, 8, 15);

  fill(0);
  textSize(textSizeToFit);
  textAlign(CENTER, CENTER);
  text(inputText, x + w / 2, y + h / 2); 
}

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-8, 8);
    this.y = this.y + random(-8, 8);
  }

  show() {
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColour = webcam.get(pX, pY);
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    noStroke();
    ellipse(this.x, this.y, this.r);
  }

  checkEdges() {
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width - 15) {
      this.x = width - 15;
    }
    if (this.y < 15) {
      this.y = 15;
    } else if (this.y > height - 15) {
      this.y = height - 15;
    }
  }
}









