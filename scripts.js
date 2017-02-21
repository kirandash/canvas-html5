function myCircleAnimation() {
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	var initialX = 50,
		finalX = 200;


	function drawCircle(){
		context.clearRect(0,0,300,300);//Clear canvas everytime animation runs [x,y,width,height]
		
		context.beginPath();
		context.arc(initialX,initialX,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.fillStyle = "#0000ff"; //Color to be used
		context.fill();//Fill the color
		context.stroke();
		
		context.beginPath();
		context.arc(initialX,150,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.fillStyle = "#00ff80"; //Color to be used
		context.fill();//Fill the color
		context.stroke();

		context.beginPath();
		context.arc(initialX,60,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.fillStyle = "#bf0ff"; //Color to be used
		context.fill();//Fill the color
		context.stroke();

		if(initialX<finalX){
			initialX++;
		}
		requestAnimationFrame(drawCircle); //Build the animation with request - for smooth animation
	}

	drawCircle();
}