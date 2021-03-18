class Person {
	constructor(xPos, yPos, size, mood){
		this.x = xPos;
		this.y = yPos;
		this.s = size;
		//this.d = direction
		this.m = mood; //boolean true = good mood, and false = bad mood
	}

	/*display(){
		makeEye();
	}*/

	/*changeMood(){
		if(this.m == 1){
			this.m == 2;
			makeEye();
			makeMouse();
		} else {
			this.m == 1;
			makeEye();
			makeMouse();
		}
	}*/

	makeEye() {
		//if(this.m == 1){
		fill(0);
		rect(100,100,100,100);
		circle(200, 200, 100, 100);
		//}
	}
}	