class Person {
	constructor(xPos, yPos, size, mood){
		this.x = xPos;
		this.y = yPos;
		this.s = 1;
		//this.d = direction
		this.m = mood; //boolean true = good mood, and false = bad mood
	}

	display(){
		this.makeEye();
		this.makeMouse();
		this.makeHead();
		this.makeBody();
	}

	changeMood(){ // not tested
		if(this.m){
			this.m == false;
			makeEye();
			makeMouse();
		} else {
			this.m == true;
			makeEye();
			makeMouse();
		}
	}

	makeEye() {
		stroke(0);
		if(this.m){
			fill(0);
			ellipse((this.x - 50) * this.s, (this.y - 10)* this.s, 20 * this.s, 20 * this.s);
		} else {
			stroke(0);
			strokeWeight(6 * this.s);
			line((this.x -50) * this.s, (this.y - 5) * this.s, (this.x - 30) * this.s, (this.y - 10) * this.s);
		}
	}

	makeMouse(){
		stroke(0);
		strokeWeight(6 * this.s);
		if(this.m){
			stroke(0);
			noFill();
			arc((this.x - 70) * this.s, (this.y + 40) * this.s, 80 * this.s, 40 * this.s, 0, HALF_PI);
		} else{
			line((this.x - 90) * this.s, (this.y + 40) * this.s, (this.x - 25) * this.s, (this.y + 60) * this.s);
		}
	}

	makeHead(){
		stroke(0);
		noFill();
		strokeWeight(6 * this.s);
		stroke(0);
		ellipse(this.x * this.s, this.y * this.s, 200 * this.s, 190 * this.s);

		//nose
	}

	makeBody(){
		stroke(0);
		let x1 = (this.x - 40) * this.s;
		let y1 = (this.y + 95) * this.s;
		fill(0, 200, 0);
		quad(x1, y1, x1 + 80 * this.s, y1, x1 + 100 * this.s, y1 + 200 * this.s, x1 - 20 * this.s, y1 + 200 * this.s);

		//arms 

	}
}	







