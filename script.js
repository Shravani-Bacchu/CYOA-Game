//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
//Spicy
let font;
function preload() {
  font = loadFont("assets/Borel-Regular.ttf");
}
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("lightgreen");
  text(
    "You're trapped in a hotel! "
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens and set position off screen
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  //Draw enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.text = "Enter";
  enterButton.color = "plum";

  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  //print("Enter the game")
  background("paleturquoise");
  text(
    "You were taken and are now trapped in a maze.\n You can either go straight ahead or right.",
    width / 2,
    height / 2 - 100
  );
  // Move extra buttons off screen
  enterButton.pos = { x: -100, y: -100 }; //do with x and y together first
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };

  // Add a1 button
  a1Button.pos = { x: width / 2 - 50, y: height / 2  +100};
  a1Button.w = 101;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "Go forward";

  // Add a2 button
  a2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  a2Button.w = 72;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  a2Button.text = "Go right";
}

function showScreen2() {
  print("Display screen 2");
  background("palegreen");
  text(
    "There wasn't any cranks ahead of you so you've survived.\n for now...\n ",
    width / 2,
    height / 2 - 100
  );
  // Move extra buttons off screen
  //enterButton.pos = { x: -100, y: -100 };
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
  // Add b1 Button
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b1Button.w = 101;
  b1Button.h = 50;
  b1Button.collider = "k";
  b1Button.color = "plum";
  b1Button.text = "go forward";
  // Add b2 Button
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
  b2Button.w = 55;
  b2Button.h = 50;
  b2Button.collider = "k";
  b2Button.color = "plum";
  b2Button.text = "go left";
}

function showScreen3() {
  background("pink");
  text("You survived the maze!.", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}

function showScreen4() {
  background("lavender");
  text("Bad luck. \nThere was a griever which murdered you.\n Better luck next time...", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}

function showScreen5() {
  print("Display screen 5");
  background("lightgreen");
  text("Victory!!! You've survived the maze.", width / 2, height / 2 - 100);
  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
}
