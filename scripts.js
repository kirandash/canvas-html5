function canvasAnimation() {
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	var initialX = 50,
		finalX = 200;


	function drawCircle(){
		context.clearRect(0,0,300,300);//Clear canvas everytime animation runs [x,y,width,height]
		
		context.beginPath();
		context.arc(50,initialX-30,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.fillStyle = "#0000ff"; //Color to be used
		context.fill();//Fill the color
		context.stroke();
		
		context.beginPath();
		context.arc(initialX,100,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.fillStyle = "#00ff80"; //Color to be used
		context.fill();//Fill the color
		context.stroke();

		context.beginPath();
		context.arc(initialX,60,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.fillStyle = "#bf0ff0"; //Color to be used
		context.fill();//Fill the color
		context.stroke();

		if(initialX<finalX){
			initialX++;
		}
		requestAnimationFrame(drawCircle); //Build the animation with request - for smooth animation
	}

	function drawLine(){
		var myCanvas = document.getElementById("lineCanvas");
		var context = myCanvas.getContext("2d");
		context.fillStyle = "#ff1a1a";
		context.fillRect(0,0,300,300); //To fill color in a rectangle
		context.moveTo(0,0);
		context.lineTo(300,300);
		context.moveTo(300,0);
		context.lineTo(0,300);
		context.stroke();

		context.font = "20px Georgia Italic";
		context.fillStyle = "#f0f0f0";
		context.fillText("Text here", 90, 160);
	}

	function drawGradient() {
		var myCanvas = document.getElementById("gradientCanvas");
		var context = myCanvas.getContext("2d");

		var gd = context.createRadialGradient(150,150,50, 150,150,200); //x,y,rad of inner circle + x,y,rad of outer circle
		gd.addColorStop(0,"red"); // Start position - 0
		gd.addColorStop(1,"white"); //Color stops - fading white and more red, End position - 1
		context.fillStyle = gd; // Use gradient to fill style for the rectangle
		context.fillRect(0,0,300,300);
	}

	drawCircle();
	drawLine();
	drawGradient();
}