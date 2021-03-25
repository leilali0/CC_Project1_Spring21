let ming;
let quizA;
let step;
let names = ['Final', 'Test', 'Exam', 'Midterm'];
let exams = [];

function setup() {
  	step = 0;

   	createCanvas(windowWidth, windowHeight);
  	mingA = new Person(800, 300, 1, false);
  	quiz = new ReportCard(450, 250, 1, 'Quiz');

  	//exam array for the wall display
  	let x = 210;
  	for(let i = 0; i < names.length; i++){
  		exams.push(new ReportCard(x, 160, 0.5, names[i]));
  		x += 120;
  	}

  	idea = new Lightbulb();

  	mingA.display();
  	quiz.display();
}

function keyPressed(){
	step++;

	if(step == 1){ //don't want them to loop 
  		setTimeout(sceneOne, 500);
	} else if(step == 2){
		quiz.setVectorV(5, 0);
		mingA.setVectorV(5, 0);
	}else if (step == 3){
		mingA.setVectorP(windowWidth + 350, 300); //start out of the canvas 
		quiz.setVectorP(windowWidth, 250);
		quiz.setVectorV(5, 0);
		mingA.setVectorV(5, 0);
	}else if (step == 4){
		quiz.setVectorV(5, 2);
		mingA.setVectorV(8, 2);
	}else if (step == 5){
		mingA.setVectorV(8, 2);
	}
}

function draw() {
	//scene 1 move out of frame
	if(step == 2){
 		background(255);
 		quiz.display();
 		mingA.display();

 		mingA.move(-110, 300);
 		mingA.display();

 		quiz.move(-300, 250, 1);
 		quiz.display();
 	} else if(step == 3){
 	    background(255);
 		mingA.move(1300, 300);
 		mingA.display();

 		quiz.changeGrade();
 		quiz.move(950, 250, 1);
 		quiz.display();

 		makeWall();
 	} else if (step == 4){
 		background(255);
 		makeWall();
 		quiz.changeGrade();
 		quiz.move(690, 160, 0.5);
 		mingA.move(870, 200, 0.5);
 		mingA.display();
 		quiz.display();
 	} else if (step == 5){
 		background(255);
 		makeWallTwo();
 		mingA.move(400, 600);
 		mingA.display();
 	} else if (step == 6) {
 		background(255);
 		makeWallTwo();
 		mingA.setVectorV(0, 5);
 		mingA.moveDown(400, 400);
 		mingA.display();
 	} else if (step == 7){
 		background(255);
 		makeWallTwo();
 		gpa();
 		mingA.setVectorV(5, 0);
 		mingA.moveDown(600, 400);
 		mingA.display();
 	}
}

function makeWallTwo(){
	makeWall();
	quiz.changeGrade();
	quiz.display();
}

function makeWall() {
 	stroke(0);
 	strokeWeight(2);
	noFill();
	rect(200, 150, 600, 400);

	for(let i = 0; i < exams.length; i++){
		exams[i].changeGrade();
		exams[i].display();
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

function gpa() {
	textSize(40);
	stroke(255, 0, 0);
	fill(255,0,0);
	text('GPA 3.0', 400, 500);
}
