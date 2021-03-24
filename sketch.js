let ming;
let quizA;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mingA = new Person(800, 300, 1, true);
  quiz = new ReportCard(450, 250, 1, 'Quiz');
  idea = new Lightbulb();
}

function draw() {
  background(255);
  fill(0);

  mingA.display();
  mingA.update();
  mingA.display();

  quiz.display();
  idea.makeShape();
  idea.lightUp();
}
