let ming;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ming = new Person(100, 100, 1, 1);
}

function draw() {
  background(255);
  fill(0);
  //rect(100,100,100,100);
  ming.makeEye();
}
