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

	//Declare image holder
	var image1 = null;

	function drawingImage() {
		image1 = new Image(); //create object
		image1.src = "image.jpg"; //assign src
		image1.addEventListener('load', loadingImage);//Load the image and call a function
	}

	function loadingImage() {
		var myCanvas = document.getElementById("imageCanvas");
		var context = myCanvas.getContext("2d");
		context.drawImage(image1, 10, 10); //image object and the co-ordinates
	}

	/* Bounce */
	var bounceX = 30,
		bounceY = 20,
		changeX = 7,
		changeY = 7,
		bounceCanvas = document.getElementById("bounceCanvas"),
		bounceContext = bounceCanvas.getContext("2d");

	function drawBounce() {
		setInterval(drawBall,20);
	}

	function drawBall() {
		bounceContext.clearRect(0,0,300,300);
		bounceContext.beginPath();
		bounceContext.arc(bounceX,bounceY,20, 0, 2*Math.PI, true);//initial x y, radius, initial and ending angle
		bounceContext.fillStyle = "green"; //Color to be used
		bounceContext.closePath();
		bounceContext.fill();//Fill the color

		if(bounceX < 10 || bounceX > 290) changeX=-changeX;
		if(bounceY < 10 || bounceY > 290) changeY=-changeY; //reverse on edge - 10 taken in account for radius

		bounceX+=changeX;
		bounceY+=changeY;		
	}

	drawCircle();
	drawLine();
	drawGradient();
	drawingImage();
	drawBounce();
}