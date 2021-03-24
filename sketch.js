let ming;
let quizA;
let step;

function setup() {
  step= 0;

  createCanvas(windowWidth, windowHeight);
  mingA = new Person(800, 300, 1, false);
  quiz = new ReportCard(450, 250, 1, 'Quiz');
  idea = new Lightbulb();

  	mingA.display();
  	quiz.display();
}

function keyPressed(){
	step++;

	if(step == 1){ //don't want them to loop 
  		setTimeout(sceneOne, 1000);
	}
}

function draw() {
	if(step == 2){
 		background(255);
 		quiz.display();
 		mingA.display();
 	}
}


function sceneOne() {
	background(255);
	quiz.display();
  	mingA.update();
    mingA.display();
    idea.makeShape();
  	setTimeout(one, 1000);
}

function one() {idea.lightUp()}
