class Lightbulb {
	constructor(){
		this.x = 1000;
		this.y = 200;
	}

	makeShape(){ // make outline 
		//the top bulb part 
		stroke(0);
		strokeWeight(5);
		noFill();
		ellipse(this.x, this.y, 80, 80);

		//the bottom part 
		fill(255);
		rect(this.x - 14, this.y + 40, 30, 40);
		line(this.x - 14, this.y + 55, this.x + 16, this.y + 55);
		line(this.x - 14, this.y + 68, this.x + 16, this.y + 68);
	}

	lightUp(){ // fill ellipse with color and create lines around it 
		this.fillShape();
		this.lines();
	}
	
	fillShape(){ //light up lightbulb
		fill(255, 204, 0); // same ellipse but with fill 
		ellipse(this.x, this.y, 80, 80);
	}

	lines(){ 
		stroke(0);
		strokeWeight(5);
		translate(280, -200);//translate to the right place 
		translate(width/2, height/2); //translate to center to make lines go around it 
  		rotate(PI/3);
  		for (let i = 0; i <20; i += 2){
    		rotate(PI / 6);
  			line(70, 70, 50, 50);
		}
	}
}