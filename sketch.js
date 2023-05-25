let scene = 0;
let score = 0;
let offset;
let timer = 0;

let carrot;
let garlic;
let limee;
let papaya;
let papaya2;
let pepper;
let pestle;
let mortar;
let shrimp;
let tomatoo;
let nut;
let knife;
let sauce;
let sugar;
let peel;

let pot1;
let pot2;
let pot3;
let pot4;
let pot5;
let pot6;
let pot7;
let pot8;
let pot9;
let pot10;
let pot11;
let pot12;
let pot13;
let pot14;
let pot15;

let peelIsClicked = false;
let papayaIsClicked = false;
let knifeIsClicked = false;
let tomatoIsClicked = false;
let carrotIsClicked = false;
let limeIsClicked = false;
let papaya2IsClicked = false;
let mortarIsClicked = false;
let pepperIsClicked = false;
let garlicIsClicked = false;
let shrimpIsClicked = false;
let pestleIsClicked = false;
let tamIsClicked = false;
let nutIsClicked = false;
let sugarIsClicked = false;
let sauceIsClicked = false;

function preload() {
  font1 = loadFont("BlackHanSans-Regular.ttf");
  carrot = loadImage("Carrot.png");
  garlic = loadImage("Garlic.png");
  limee = loadImage("Lime.png");
  papaya = loadImage("Papaya.png");
  pepper = loadImage("Pepper.png");
  pestle = loadImage("Pestle.png");
  mortar = loadImage("Pot.png");
  shrimp = loadImage("Shrimp.png");
  tomatoo = loadImage("Tomato.png");
  nut = loadImage("nut.png");
  knife = loadImage("knife.png");
  sauce = loadImage("sauce.png");
  sugar = loadImage("sugar.png");
  peel = loadImage("peel.png");

  papaya2 = loadImage("Papaya2.png");
  tomato2 = loadImage("Tomato2.png");
  carrot2 = loadImage("Carrot2.png");
  lime2 = loadImage("Lime2.png");

  pot1 = loadImage("pot1.png");
  pot2 = loadImage("pot2.png");
  pot3 = loadImage("pot3.png");
  pot4 = loadImage("pot4.png");
  pot5 = loadImage("pot5.png");
  pot6 = loadImage("pot6.png");
  pot7 = loadImage("pot7.png");
  pot8 = loadImage("pot8.png");
  pot9 = loadImage("pot9.png");
  pot10 = loadImage("pot10.png");
  pot11 = loadImage("pot11.png");
  pot12 = loadImage("pot12.png");
  pot13 = loadImage("pot13.png");
  pot14 = loadImage("pot14.png");
  pot15 = loadImage("pot15.png");
}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background("#3c6d88");
  noStroke();
  fill("#ffcc00");
  rect(200, 50, 1500, 100);

  if (scene === 0) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the papaya with the peeler", 580, 120);

    image(papaya, 94, 173);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);

    if (peelIsClicked == true) {
      image(peel, mouseX, mouseY);
      scene = scene + 1;
      score = score + 1;
    }
    papayaIsClicked = false;
  }

  if (scene === 1) {
    // peeler up
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the papaya with the peeler", 580, 120);
    image(papaya, 94, 173);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(peel, mouseX, mouseY);

    if (papayaIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 2) {
    //peeler move
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the papaya with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(peel, mouseX, mouseY);
    peelIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 3) {
    // papaya gone, papaya2 show
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the papaya with the peeler", 580, 120);
    // image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
  }

  if (scene === 4) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the papaya with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(peel, mouseX, mouseY);
    scene = scene + 1;
  }

  if (scene === 5) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the papaya with the peeler", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
  }

  if (scene === 6) {
    //end papaya start tomato
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slice the tomato with the knife", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
    knifeIsClicked = false;
  }

  if (scene === 7) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slice the tomato with the knife", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    if (knifeIsClicked == true) {
      image(knife, mouseX, mouseY);
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 8) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slice the tomato with the knife", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(knife, mouseX, mouseY);
    scene = scene + 1;
  }

  if (scene === 9) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slice the tomato with the knife", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(knife, mouseX, mouseY);
    tomatoIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 10) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slice the tomato with the knife", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomatoo, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(knife, mouseX, mouseY);

    if (tomatoIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 11) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slice the tomato with the knife", 580, 120);
    //image(peel, mouseX, mouseY);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(knife, mouseX, mouseY);
    scene = scene + 1;
  }

  if (scene === 12) {
    //end tomato start lime
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
  }

  if (scene === 13) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
  }

  if (scene === 14) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);

    // if (knifeIsClicked == true) {
    //   image(knife, mouseX, mouseY);
    scene = scene + 1;
    peelIsClicked = false;
    // }
  }

  if (scene === 15) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);

    if (peelIsClicked == true) {
      image(peel, mouseX, mouseY);
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 16) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    //image(carrot2,0,0)
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(peel, mouseX, mouseY);
    scene = scene + 1;
    carrotIsClicked = false;
  }

  if (scene === 17) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    image(carrot, 700, 415);
    //image(carrot2, 722, 480);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(peel, mouseX, mouseY);
    if (carrotIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 18) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Peel the carrot with the peeler", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 722, 480);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(peel, mouseX, mouseY);
    scene = scene + 1;
  }

  if (scene === 19) {
    //end carrot start lime
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slide the lime with the knife", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
    knifeIsClicked = false;
  }

  if (scene === 20) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slide the lime with the knife", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);

    if (knifeIsClicked == true) {
      image(knife, mouseX, mouseY);
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 21) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slide the lime with the knife", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    image(limee, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(knife, mouseX, mouseY);
    limeIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 22) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slide the lime with the knife", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    image(limee, 110, 720);
    //image(lime2, 110, 720);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    image(knife, mouseX, mouseY);
    if (limeIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 23) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Slide the lime with the knife", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
  }

  // START bring ingredients to mortar

  if (scene === 24) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put papaya into the mortar", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    scene = scene + 1;
    papaya2IsClicked = false;
  }

  if (scene === 25) {
    //drag papaya to mortar
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put papaya into the mortar", 580, 120);
    image(papaya2, 100, 220);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(mortar, 980, 560);
    if (papaya2IsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
    mortarIsClicked = false;
  }

  if (scene === 26) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put papaya into the mortar", 580, 120);
    image(mortar, 980, 560);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    image(papaya2, mouseX, mouseY);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 27) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put papaya into the mortar", 580, 120);
    image(pot1, 980, 560);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    scene = scene + 1;
    mortarIsClicked = false;
    pepperIsClicked = false;
  }

  if (scene === 28) {
    // pepper in mortar
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the pepper in the mortar", 580, 120);
    image(pot1, 980, 560);
    image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    //scene = scene + 1;
    if (pepperIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 29) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the pepper in the mortar", 580, 120);
    image(pot1, 980, 560);
    image(pepper, mouseX, mouseY);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    mortarIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 30) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the pepper in the mortar", 580, 120);
    image(pot1, 980, 560);
    image(pepper, mouseX, mouseY);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 31) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the pepper in the mortar", 580, 120);
    image(pot2, 980, 560);
    //image(pepper, mouseX, mouseY);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);

    mortarIsClicked = false;
    garlicIsClicked = false;
    //image(papaya2, mouseX, mouseY);
    scene = scene + 1;
  }

  if (scene === 32) {
    // garlic in mortar
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the garlic in the mortar", 580, 120);
    image(pot2, 980, 560);
    //image(pepper, 408, 212);
    image(garlic, 751, 273);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    //scene = scene + 1;
    if (garlicIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
    mortarIsClicked = false;
  }

  if (scene === 33) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the garlic in the mortar", 580, 120);
    image(pot2, 980, 560);
    //image(pepper, 408, 212);
    image(garlic, mouseX, mouseY);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      // score = score + 1;
    }
  }

  if (scene === 34) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the garlic in the mortar", 580, 120);
    image(pot3, 980, 560);
    //image(pepper, 408, 212);
    //image(garlic, mouseX, mouseY);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
    shrimpIsClicked = false;
  }

  if (scene === 35) {
    // shrimp in pot
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the shrimp in the mortar", 580, 120);
    image(pot3, 980, 560);
    //image(pepper, 408, 212);
    //image(garlic, mouseX, mouseY);
    image(shrimp, 112, 530);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    mortarIsClicked = false;
    if (shrimpIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 36) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the shrimp in the mortar", 580, 120);
    image(pot3, 980, 560);
    //image(pepper, 408, 212);
    //image(garlic, mouseX, mouseY);
    image(shrimp, mouseX, mouseY);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 37) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the shrimp in the mortar", 580, 120);
    image(pot4, 980, 560);
    //image(pepper, 408, 212);
    //image(garlic, mouseX, mouseY);
    //image(shrimp, mouseX, mouseY);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    //image(papaya2, mouseX, mouseY);
    scene = scene + 1;
    pestleIsClicked = false;
  }

  // Mash ingredients part 1
  if (scene === 38) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients with the pestle", 580, 120);
    image(pot4, 980, 560);
    //image(pepper, 408, 212);
    //image(garlic, mouseX, mouseY);
    //image(shrimp, mouseX, mouseY);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (pestleIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 39) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients with the pestle", 580, 120);
    image(pot4, 980, 560);
    image(tomato2, 407, 468);
    //image(carrot, 700, 415);
    image(carrot2, 759, 480);
    //image(limee, 110, 720);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    //image(knife, mouseX, mouseY);
    image(knife, 1250, 215);
    image(pestle, mouseX, mouseY);
    //if (tamIsClicked == true) {
    tamIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 40) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients with the pestle", 580, 120);
    image(pot4, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    if (tamIsClicked == true) {
      offset = 100;
      timer = timer + 1;

      
      if (timer > 10) {
        offset = 0; //reset offset
        tamisClicked = false; //reset state
      }
    }
    image(pestle, mouseX, mouseY + offset);

    if (timer > 100) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 41) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients with the pestle", 580, 120);
    image(pot5, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    image(pestle, 1673, 420);
    pestleIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 42) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients one more time", 580, 120);
    image(pot5, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    image(pestle, 1673, 420);
    if (pestleIsClicked == true) {
      image(pestle, mouseX, mouseY);
      scene = scene + 1;
      score = score + 1;
      timer = 0;
    }
    pestleIsClicked = false;
    tamIsClicked = false;
    mortarIsClicked = false;
  }

  if (scene === 43) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients one more time", 580, 120);
    image(pot5, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    image(pestle, 1673, 420);
    tamIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 44) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients one more time", 580, 120);
    image(pot5, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    if (tamIsClicked == true) {
      offset = 100;
      timer = timer + 1;
      
      if (timer > 10) {
        offset = 0; //reset offset
        tamisClicked = false; //reset state
      }
    }
    image(pestle, mouseX, mouseY + offset);

    if (timer > 100) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 45) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all ingredients one more time", 580, 120);
    image(pot6, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    image(pestle, 1673, 420);
    pestleIsClicked = false;
    carrotIsClicked = false;

    scene = scene + 1;
  }

  if (scene === 46) {
    // add carrot
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the carrot in the mortar", 580, 120);
    image(pot6, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, 759, 480);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    image(pestle, 1673, 420);
    pestleIsClicked = false;
    mortarIsClicked = false;
    if (carrotIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 47) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the carrot in the mortar", 580, 120);
    image(pot6, 980, 560);
    image(tomato2, 407, 468);
    image(carrot2, mouseX, mouseY);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);

    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 48) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the carrot in the mortar", 580, 120);
    image(pot7, 980, 560);
    image(tomato2, 407, 468);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      // score = score + 1;
    }
    limeIsClicked = false;
  }

  if (scene === 49) {
    //add Lime
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the Lime in the mortar", 580, 120);
    image(pot7, 980, 560);
    image(tomato2, 407, 468);
    image(lime2, 110, 680);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    if (limeIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 50) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the Lime in the mortar", 580, 120);
    image(pot7, 980, 560);
    image(tomato2, 407, 468);
    image(lime2, mouseX, mouseY);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 51) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the Lime in the mortar", 580, 120);
    image(pot8, 980, 560);
    image(tomato2, 407, 468);
    //image(lime2, mouseX, mouseY);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    nutIsClicked = false;
    scene = scene + 1;
  }
  if (scene === 52) {
    //add nut
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the nut in the mortar", 580, 120);
    image(pot8, 980, 560);
    image(tomato2, 407, 468);
    //image(lime2, mouseX, mouseY);
    image(nut, 450, 691);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    if (nutIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 53) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the nut in the mortar", 580, 120);
    image(pot8, 980, 560);
    image(tomato2, 407, 468);
    image(nut, mouseX, mouseY);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    // mortarIsClicked =  false
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 54) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put the nut in the mortar", 580, 120);
    image(pot9, 980, 560);
    image(tomato2, 407, 468);
    //image(nut, mouseX, mouseY);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      // score = score + 1;
    }
    sugarIsClicked = false;
  }

  if (scene === 55) {
    // add sugar
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put sugar in the mortar", 580, 120);
    image(pot9, 980, 560);
    image(tomato2, 407, 468);
    image(sugar, 80, 880);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    if (sugarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 56) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put sugar in the mortar", 580, 120);
    image(pot9, 980, 560);
    image(tomato2, 407, 468);
    image(sugar, mouseX, mouseY);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 57) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put sugar in the mortar", 580, 120);
    image(pot10, 980, 560);
    image(tomato2, 407, 468);
    //image(sugar, mouseX, mouseY);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    sauceIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 58) {
    // add sauce
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put sauce in the mortar", 580, 120);
    image(pot10, 980, 560);
    image(tomato2, 407, 468);
    image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    if (sauceIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }
  if (scene === 59) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put sauce in the mortar", 580, 120);
    image(pot10, 980, 560);
    image(tomato2, 407, 468);
    image(sauce, mouseX, mouseY);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 60) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Put sauce in the mortar", 580, 120);
    image(pot11, 980, 560);
    image(tomato2, 407, 468);
    //image(sugar, mouseX, mouseY);
    //image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    mortarIsClicked = false;
    pestleIsClicked = false;
    scene = scene + 1;
  }

  // Mash ingredients part 2
  if (scene === 61) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all the ingredients with the pestle", 580, 120);
    image(pot11, 980, 560);
    image(tomato2, 407, 468);
    //image(sugar, mouseX, mouseY);
    //image(sauce, 476, 825);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    tamIsClicked = false; ////
    mortarIsClicked = false;
    if (pestleIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 62) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all the ingredients eith the pestle", 580, 120);
    image(pot11, 980, 560);
    image(tomato2, 407, 468);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, mouseX, mouseY);
    pestleIsClicked = false;
    mortarIsClicked = false;
    tamIsClicked = false;
    timer = 0;
    scene = scene + 1;
  }

  if (scene === 63) {
    // similar to scene 40
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all the ingredients with the pestle", 580, 120);
    image(pot11, 980, 560);
    image(tomato2, 407, 468);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    if (tamIsClicked == true) {
      offset = 100;
      timer = timer + 1;
      if (timer > 10) {
        offset = 0; //reset offset
        tamisClicked = false; //reset state
      }
    }
    image(pestle, mouseX, mouseY + offset);
    if (timer > 100) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 64) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all the ingredients with the pestle", 580, 120);
    image(pot11, 980, 560);
    image(tomato2, 407, 468);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    pestleIsClicked = false;
    scene = scene + 1;
  }

  if (scene === 65) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all the ingredients one more time", 580, 120);
    image(pot13, 980, 560);
    image(tomato2, 407, 468);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    image(pestle, 1673, 420);
    // tamIsClicked = false
    if (pestleIsClicked == true) {
      image(pestle, mouseX, mouseY);
      timer = 0;
      scene = scene + 1;
      score = score + 1;
      tamIsClicked = false;
    }
  }
  if (scene === 66) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Mash all the ingredients one more time", 580, 120);
    image(pot13, 980, 560);
    image(tomato2, 407, 468);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    offset = 0;
    if (tamIsClicked == true) {
      offset = 100;
      timer = timer + 1;
      if (timer > 10) {
        offset = 0; //reset offset
        tamisClicked = false; //reset state
      }
    }
    image(pestle, mouseX, mouseY + offset);
    if (timer > 100) {
      scene = scene + 1;
      score = score + 1;
    }
    tomatoIsClicked = false;
  } // End Mash 2nd time

  if (scene === 67) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Finally, put the tomato in the mortar", 580, 120);
    image(pot14, 980, 560);
    image(tomato2, 407, 468);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (tomatoIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
    mortarIsClicked = false;
  }

  if (scene === 68) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Finally, put the tomato in the mortar", 580, 120);
    image(pot14, 980, 560);
    image(tomato2, mouseX, mouseY);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
    if (mortarIsClicked == true) {
      scene = scene + 1;
      score = score + 1;
    }
  }

  if (scene === 69) {
    fill(0);
    textFont(font1);
    textSize(40);
    text("Finally, put the tomato in the mortar", 580, 120);
    image(pot15, 980, 560);
    // image(tomato2, mouseX, mouseY);
    image(peel, 1000, 227);
    image(knife, 1250, 215);
    image(pestle, 1673, 420);
  }

  //mouse cordinate tracker by Tania Padilla Brainin; Basically what to say is to print the number of where the mouse is located + u have to put the mouse x so in can actully do what it says
  push();
  textSize(30);
  fill(0, 250, 0);
  text("(" + mouseX + "," + mouseY + ")", mouseX, mouseY);
  pop();

  print(scene, score);
}

function mousePressed() {
  if (mouseX > 1000 && mouseX < 1120) {
    if (mouseY > 264 && mouseY < 365) {
      print("click");
      peelIsClicked = true;
    }
  }
  if (mouseX > 142 && mouseX < 316) {
    if (mouseY > 305 && mouseY < 620) {
      print("click");
      papayaIsClicked = true;
    }
  }
  if (mouseX > 1253 && mouseX < 1290) {
    if (mouseY > 228 && mouseY < 458) {
      print("click");
      knifeIsClicked = true;
    }
  }
  if (mouseX > 408 && mouseX < 596) {
    if (mouseY > 509 && mouseY < 630) {
      print("clicktomato");
      tomatoIsClicked = true;
    }
  }
  if (mouseX > 718 && mouseX < 839) {
    if (mouseY > 482 && mouseY < 655) {
      print("clickcarrot");
      carrotIsClicked = true;
    }
  }

  if (mouseX > 122 && mouseX < 224) {
    if (mouseY > 735 && mouseY < 826) {
      print("clicklime");
      limeIsClicked = true;
    }
  }

  if (mouseX > 108 && mouseX < 280) {
    if (mouseY > 243 && mouseY < 400) {
      print("clickpapaya2");
      papaya2IsClicked = true; //papaya2
    }
  }

  if (mouseX > 1004 && mouseX < 1586) {
    if (mouseY > 598 && mouseY < 1007) {
      print("clickmortar");
      mortarIsClicked = true;
      //mortarbeforeingredients
    }
  }

  if (mouseX > 458 && mouseX < 589) {
    if (mouseY > 265 && mouseY < 402) {
      print("clickpepper");
      pepperIsClicked = true;
    }
  }

  if (mouseX > 761 && mouseX < 854) {
    if (mouseY > 273 && mouseY < 362) {
      print("clickgarlic");
      garlicIsClicked = true;
    }
  }
  if (mouseX > 135 && mouseX < 213) {
    if (mouseY > 554 && mouseY < 631) {
      print("clickshrimp");
      shrimpIsClicked = true;
    }
  }
  if (mouseX > 1722 && mouseX < 1841) {
    if (mouseY > 485 && mouseY < 964) {
      print("clickpestle");
      pestleIsClicked = true;
    }
  }
  if (mouseX > 1184 && mouseX < 1491) {
    if (mouseY > 124 && mouseY < 771) {
      print("clicktam");
      tamIsClicked = true;
      //timer = timer + 1;
    }
  }
  if (mouseX > 455 && mouseX < 540) {
    if (mouseY > 697 && mouseY < 774) {
      print("clicknut");
      nutIsClicked = true;
    }
  }
  if (mouseX > 103 && mouseX < 243) {
    if (mouseY > 901 && mouseY < 1011) {
      print("clicksugar");
      sugarIsClicked = true;
    }
  }
  if (mouseX > 481 && mouseX < 539) {
    if (mouseY > 841 && mouseY < 1016) {
      print("clicksauce");
      sauceIsClicked = true;
    }
  }
}
