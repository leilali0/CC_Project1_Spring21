class Lightbulb {
	constructor(){
		this.x = 1000;
		this.y = 200;
	}

	makeShape(){ // make outline 
		stroke(0);
		strokeWeight(5);
		noFill();
		ellipse(this.x, this.y, 80, 80);

		fill(255);
		rect(this.x - 14, this.y + 40, 30, 40);
		line(this.x - 14, this.y + 55, this.x + 16, this.y + 55);
		line(this.x - 14, this.y + 68, this.x + 16, this.y + 68);
	}

	lightUp(){
		this.fillShape();
		this.lines();
	}
	
	fillShape(){ //light up lightbulb
		fill(255, 204, 0);
		ellipse(this.x, this.y, 80, 80);
	}

	lines(){ 
		stroke(0);
		strokeWeight(5);
		translate(280, -200);//translate to the right place 
		translate(width/2, height/2); //translate to center to make lines 
		//this doesn't always line up, I 
  		rotate(PI/3);
  		for (let i = 0; i <20; i += 2){
    		rotate(PI / 6);
  			line(70, 70, 50, 50);
		}
	}
}