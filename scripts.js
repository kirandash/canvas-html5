function myCircleAnimation() {
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	function drawCircle(){
		context.beginPath();
		context.arc(50,50,40, 0, 2*Math.PI);//initial x y, radius, initial and ending angle
		context.stroke();
	}

	drawCircle();
}