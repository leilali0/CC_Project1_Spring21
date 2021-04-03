class Person {
	constructor(xPos, yPos, size, mood){
		//this.x = xPos;
		//this.y = yPos;
		this.s = size;
		this.m = mood; //boolean true = good mood, and false = bad mood

		this.p = new createVector(xPos, yPos);
		this.v = new createVector();
	}

	setVectorP(xPos, yPos){
		this.p.set(xPos, yPos);
	}

	setVectorV(xSpeed, ySpeed){
		this.v.set(xSpeed, ySpeed); 
	}

	/*check(x, y){
		if(this.p.x == x && this.p.y == y){
			return true;
		} else {
			return false;
		}
	}*/

	check(){ //slightly different (maybe better checking machinism)
		if(this.v.x == 0 && this.v.y == 0){ // check if the move function change the velocity to zero. 
			return true;
		} else {
			return false;
		}
	}
	
	move(x, y, size){ //move to x, y point
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

	moveDown(x, y){
		if(this.p.x >= x){
			this.v.x = 0;
		} 
		if (this.p.y >= y){
			this.v.y = 0;
		}

		this.p.add(this.v);
	}

	display(){
		this.makeHead();
		this.makeEye();
		this.makeMouse();
		this.makeBody();
	}

	update(){
		this.m = true;
	}

	updateBad(){
		this.m = false;	
	}

	makeEye() {
		stroke(0);
		if(this.m){
			fill(0);
			ellipse(this.p.x - 50 * this.s, this.p.y - 10 * this.s, 20 * this.s, 20 * this.s);
		} else {
			stroke(0);
			strokeWeight(6 * this.s);
			line(this.p.x - 50 * this.s, this.p.y - 5 * this.s, this.p.x - 30 * this.s, this.p.y - 10 * this.s);
		}
	}

	makeMouse(){
		stroke(0);
		strokeWeight(6 * this.s);
		if(this.m){
			stroke(0);
			noFill();
			arc(this.p.x - 70 * this.s, this.p.y + 40 * this.s, 80 * this.s, 40 * this.s, 0, HALF_PI);
		} else{
			line(this.p.x - 90 * this.s, this.p.y + 40 * this.s, this.p.x - 25 * this.s, this.p.y + 60 * this.s);
		}
	}

	makeHead(){
		stroke(0);
		fill(255);
		strokeWeight(6 * this.s);
		stroke(0);
		ellipse(this.p.x, this.p.y, 200 * this.s, 190 * this.s);
	}

	makeBody(){
		stroke(0);
		strokeWeight(6 * this.s);
		let x1 = this.p.x - 40 * this.s;
		let y1 = this.p.y + 95 * this.s;
		fill(0, 200, 0);
		quad(x1, y1, x1 + 80 * this.s, y1, x1 + 100 * this.s, y1 + 200 * this.s, x1 - 20 * this.s, y1 + 200 * this.s);
	}


	turn(){ //smerk at the end 
		//make head
		stroke(0);
		fill(255);
		strokeWeight(6 * this.s);
		stroke(0);
		ellipse(this.p.x, this.p.y, 200 * this.s, 190 * this.s);

		//make body
		stroke(0);
		strokeWeight(6 * this.s);
		fill(0, 200, 0);
		rect(this.p.x - 80 * this.s, this.p.y + 95 * this.s, 80, 100);

		//shoulder 
		rect(this.p.x - 110 * this.s, this.p.y + 95 * this.s, 15, 20);
		rect(this.p.x + 80 * this.s, this.p.y + 95 * this.s, 15, 20);

		//arms and hands
		noFill();
		rect(this.p.x - 100 * this.s, this.p.y + 135 * this.s, 3, 80);
		rect(this.p.x + 92 * this.s, this.p.y + 135 * this.s, 3, 80);
		fill(255);
		ellipse(this.p.x - 97 * this.s, this.p.y + 300 * this.s, 15);
		ellipse(this.p.x + 97 * this.s, this.p.y + 300 * this.s, 15);

		//eyes
		fill(0);
		ellipse(this.p.x - 30 * this.s, this.p.y - 10 * this.s, 15 * this.s, 25 * this.s);
		ellipse(this.p.x + 50 * this.s, this.p.y - 10 * this.s, 15 * this.s, 25 * this.s);
		stroke(1);
		rect(this.p.x - 60 * this.s, this.p.y - 25 * this.s, 20, 1);
		rect(this.p.x + 20 * this.s, this.p.y - 25 * this.s, 20, 1);

		//mouse
		line(this.p.x, this.p.y + 65 * this.s, this.p.x + 10 * this.s, this.p.y + 65 * this.s);
		line(this.p.x + 55 * this.s, this.p.y + 35 * this.s, this.p.x + 10 * this.s, this.p.y + 65 * this.s);
		line(this.p.x + 52 * this.s, this.p.y + 30 * this.s, this.p.x + 57 * this.s, this.p.y + 40 * this.s);
	}

}	







