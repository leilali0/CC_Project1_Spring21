class ReportCard{
	constructor(xPos, yPos, size, name){
		this.x = xPos;
		this.y = yPos;
		this.s = size;
		this.n = name;
	}

	display(){
		this.makeReportCard();
	}

	makeReportCard(){
		//paper
		noFill();
		stroke(0);
		rect(this.x, this.y, 200 * this.s, 300 * this.s);

		//name 
		textSize(42);
		strokeWeight(2);
		text(this.n, this.x + 20 * this.s, this.y + 40 * this.s);

		//F
		textSize(50);
		stroke(255, 0, 0);
		fill(255,0,0);
		text('F', this.x + 150 * this.s, this.y + 45 * this.s);

		//1. 
		textSize(28);
		stroke(0);
		fill(0);
		text('1.', this.x + 10 * this.s, this.y + 90 * this.s);
		//1. question
		textSize(24);	
		strokeWeight(1);
		text('What is 1 + 1?', this.x + 35 * this.s, this.y + 88 * this.s);
		//1.answer 
		textSize(22);
		stroke(0,0,255);
		fill(0, 0, 255);
		text('Answer: 11', this.x + 35 * this.s, this.y + 120 * this.s);
		// X
		textSize(32);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		text('X', this.x + 10 * this.s, this.y + 90 * this.s);	

		//2.
		stroke(0);
		strokeWeight(2);
		textSize(28);
		stroke(0);
		fill(0);
		text('2.', this.x + 10 * this.s, this.y + 170 * this.s);	
		//2. quetion 
		textSize(18);	
		strokeWeight(1);
		text('What color is grass?', this.x + 33 * this.s, this.y + 165 * this.s);
		//2.answer 
		textSize(22);
		stroke(0,0,255);
		fill(0, 0, 255);
		text('Answer: bule', this.x + 35 * this.s, this.y + 200 * this.s);
		//X
		textSize(32);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		text('X', this.x + 10 * this.s, this.y + 170 * this.s);	

		//3.
		strokeWeight(2);
		textSize(28);
		stroke(0);
		fill(0);
		text('3.', this.x + 10 * this.s, this.y + 250 * this.s);
		//3. quetion 
		textSize(24);	
		strokeWeight(1);
		text('What is H2O?', this.x + 33 * this.s, this.y + 250 * this.s);
		//3.answer 
		textSize(22);
		stroke(0,0,255);
		fill(0, 0, 255);
		text('Answer: oxygen', this.x + 35 * this.s, this.y + 280 * this.s);
		//X
		textSize(32);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		text('X', this.x + 10 * this.s, this.y + 250 * this.s);		
	}
}