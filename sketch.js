let beach;
let weirdman;

function preload() {
 beach = loadImage("https://3.bp.blogspot.com/-dDa2j8PNxbc/UUycganU7II/AAAAAAAAUyQ/FheUVY9pE2c/s1600/Beach+Desktop+Backgrounds.jpg");
  
weirdman = loadImage("https://media.giphy.com/media/cjWCZOIRo82Vprpdj2/giphy-downsized.gif");
  
}
function setup() {
  createCanvas(500, 500);
  // textFont('Helvetica');
  // textSize(width / 3);
}

function draw() {
  background(beach);
  let t = millis()/1000;
  textSize(50);
  fill(255, 0, 0);
  text('Happy Holidays', width/2-150, height/2 + abs(sin(t * 1000)));
  
  fill(255);
  circle(width/2, height/2, 20);
  circle(width/2, height/2 + 30, 40);
  circle(width/2, height/2 + 80, 60);
  
  image(weirdman, 100, 50 + abs(10 * sin(t)), 100, 100);
  
//   for (int 
}
