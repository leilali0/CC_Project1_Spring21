let ming;
let quizA;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ming = new Person(800, 300, 1, false);
  quizA = new ReportCard(450, 250, 1, 'Quiz');
}

function draw() {
  background(255);
  fill(0);

  ming.display();

  quizA.display();
}
