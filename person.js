class Person {
	constructor(xPos, yPos, size, mood){
		this.x = xPos;
		this.y = yPos;
		this.s = size;
		//this.d = direction
		this.m = mood; //boolean true = good mood, and false = bad mood
	}

	display(){
		this.makeEye();
		this.makeMouse();
		this.makeHead();
	}

	changeMood(){
		if(this.m ){
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
		if(this.m){
			fill(0);
			ellipse(this.x - 50, this.y - 10, 20, 20);
		} else {

		}
	}

	makeMouse(){
		if(this.m){
			stroke(0);
			noFill();
			arc(this.x - 70, this.y + 40, 80, 40, 0, HALF_PI);
		}
	}

	makeHead(){
		noFill();
		strokeWeight(4);
		stroke(0);
		ellipse(this.x, this.y, 200, 200);
	}
}	