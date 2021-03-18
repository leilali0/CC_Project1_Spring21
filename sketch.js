let ming;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ming = new Person(300, 300, 200, 200);
}

function draw() {
  background(255);
  fill(0);

  ming.display();
}
