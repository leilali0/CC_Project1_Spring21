class ReportCard{
	constructor(xPos, yPos, size, name){
		//sthis.x = xPos;
		//this.y = yPos;
		this.s = size;
		this.n = name;

		this.p = new createVector(xPos, yPos);
		this.v = new createVector();
	}

	changeGrade(){ // wirte another grade directly on top of the first one 
		textSize(50 * this.s);
		strokeWeight(1 * this.s)
		stroke(255, 0, 0);
		fill(255,0,0);
		text('B', this.p.x + 150 * this.s, this.p.y + 45 * this.s);
	}

	display(){
		this.makeReportCard();
	}

	setVectorP(xPos, yPos){ //change the position
		this.p.set(xPos, yPos);
	}

	setVectorV(xSpeed, ySpeed){ // change the speed
		this.v.set(xSpeed, ySpeed); 
	}

	move(x, y, size){ //move the report around using velocity and position vectors 
		if(this.p.x <= x){
			this.v.x = 0;
		} 
		if (this.p.y <= y){
			this.v.y = 0;
		}

		this.p.sub(this.v);

		if(this.s > size){
			this.s = this.s - 0.01;
		}
	}

	check(){ //slightly different (maybe better checking machinism)
		if(this.v.x == 0 && this.v.y == 0){ // check if the move function change the velocity to zero. 
			return true;
		} else {
			return false;
		}
	}

//I didn't change the questions and answers for the quizes because of how this class was built.
	makeReportCard(){
		//paper
		noFill();
		strokeWeight(2 * this.s);
		stroke(0);
		rect(this.p.x, this.p.y, 200 * this.s, 300 * this.s);

		//name 
		textSize(42 * this.s);
		strokeWeight(2 * this.s);
		text(this.n, this.p.x + 20 * this.s, this.p.y + 40 * this.s);

		//F
		textSize(50 * this.s);
		stroke(255, 0, 0);
		fill(255,0,0);
		text('F', this.p.x + 150 * this.s, this.p.y + 45 * this.s);

		//1. 
		textSize(28* this.s);
		stroke(0);
		fill(0);
		text('1.', this.p.x + 10 * this.s, this.p.y + 90 * this.s);
		//1. question
		textSize(24* this.s);	
		strokeWeight(1* this.s);
		text('What is 1 + 1?', this.p.x + 35 * this.s, this.p.y + 88 * this.s);
		//1.answer 
		textSize(22* this.s);
		stroke(0,0,255);
		fill(0, 0, 255);
		text('Answer: 11', this.p.x + 35 * this.s, this.p.y + 120 * this.s);
		// X
		textSize(32* this.s);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		text('X', this.p.x + 10 * this.s, this.p.y + 90 * this.s);	

		//2.
		stroke(0);
		strokeWeight(2* this.s);
		textSize(28* this.s);
		stroke(0);
		fill(0);
		text('2.', this.p.x + 10 * this.s, this.p.y + 170 * this.s);	
		//2. quetion 
		textSize(18* this.s);	
		strokeWeight(1* this.s);
		text('What color is grass?', this.p.x + 33 * this.s, this.p.y + 165 * this.s);
		//2.answer 
		textSize(22* this.s);
		stroke(0,0,255);
		fill(0, 0, 255);
		text('Answer: blue', this.p.x + 35 * this.s, this.p.y + 200 * this.s);
		//X
		textSize(32* this.s);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		text('X', this.p.x + 10 * this.s, this.p.y + 170 * this.s);	

		//3.
		strokeWeight(2* this.s);
		textSize(28* this.s);
		stroke(0);
		fill(0);
		text('3.', this.p.x + 10 * this.s, this.p.y + 250 * this.s);
		//3. quetion 
		textSize(24* this.s);	
		strokeWeight(1* this.s);
		text('What is H2O?', this.p.x + 33 * this.s, this.p.y + 250 * this.s);
		//3.answer 
		textSize(22* this.s);
		stroke(0,0,255);
		fill(0, 0, 255);
		text('Answer: oxygen', this.p.x + 35 * this.s, this.p.y + 280 * this.s);
		//X
		textSize(32* this.s);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		text('X', this.p.x + 10 * this.s, this.p.y + 250 * this.s);		
	}
}