let ming;
let quizA;
let step;
let names = ['Final', 'Test', 'Exam', 'Midterm'];
let exams = [];

function setup() {
  	step = 1;

   	createCanvas(1440, 787);
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

  	if(step == 1){ //don't want them to loop 
  		setTimeout(sceneOne, 1200);
  		print('Press any key to start');
	} 
}

function keyPressed(){
	if(step == 1){
		step++;
		quiz.setVectorV(5, 0);
		mingA.setVectorV(5, 0);
	} else if (step > 8) {
		step = 1;
	}
}

function draw() {
	if(step == 2){ // move out of frame
		ellipse(200, 200, 80, 80);
 		background(255);
 		quiz.display();
 		mingA.display();

 		mingA.move(-110, 300, 1);
 		mingA.display();

 		quiz.move(-300, 250, 1);
 		quiz.display();
 		if(mingA.check()){ // prep for step 3
 			step++;
 			mingA.setVectorP(windowWidth + 350, 300); //start out of the canvas 
			quiz.setVectorP(windowWidth, 250);
			quiz.setVectorV(5, 0);
			mingA.setVectorV(5, 0);
 		}
 	} else if(step == 3){ //walk into another room 
 	    background(255);
 		mingA.move(1300, 300, 1);
 		mingA.display();

 		quiz.changeGrade();
 		quiz.move(950, 250, 1);
 		quiz.display();

 		makeWall();

 		if(mingA.check()){
 			step++;
 			quiz.setVectorV(3, 0.8);
			mingA.setVectorV(5, 0.8);
 		}
 	} else if (step == 4){
 		background(255);
 		makeWall();
 		quiz.changeGrade();
 		quiz.move(690, 160, 0.5);
 		mingA.move(870, 200, 0.5);
 		mingA.display();
 		quiz.display();

 		if(quiz.check()){
 			step = 5;
 			mingA.setVectorV(5, 0.8);
 		}
 	} else if (step == 5){
 		background(255);      
 		makeWallTwo();
 		mingA.move(400, 600, 1);
 		mingA.display();

 		if(mingA.check()){
 			step++;
 			mingA.setVectorV(0, 5);
 		}
 	} else if (step == 6) {
 		background(255);
 		makeWallTwo();
 		mingA.moveDown(400, 400);
 		mingA.display();

 		if(mingA.check()){
 			step++;
 			mingA.setVectorV(5, 0);
 		}
 	} else if (step == 7){
 		background(255);
 		makeWallTwo();
 		mingA.moveDown(650, 400);
 		mingA.display();

 		if(mingA.check()){
 			gpa();
 			step++;
 		}
 	} else if (step == 8){
 		background(255);
 		makeWallTwo();
 		gpa();
 		mingA.turn();
 	}
}

function makeWallTwo(){ //new quiz added
	makeWall();
	quiz.changeGrade();
	quiz.display();
}

function makeWall() { //original wall 
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
  	setTimeout(light, 1000);
}

function light() {idea.lightUp()}

function gpa() {
	textSize(40);
	stroke(255, 0, 0);
	fill(255,0,0);
	text('GPA 3.0 -->', 360, 500);
}