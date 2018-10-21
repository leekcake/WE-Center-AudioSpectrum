//Main for Wallpaper-Center-AudioSpectrum

var audioCanvas, audioCanvasCtx;

var circleScale = 0.6;
var circleScaleDefault = 0.6;

function drawCenterCircle() {
    //Draw Center Arc
	screenHalfWidth = audioCanvas.width * 0.5;
	screenHalfHeight = audioCanvas.height * 0.5;
	circleRadius = screenHalfHeight * circleScale;
	spectrumRadius = screenHalfHeight * 0.3;

	audioCanvasCtx.beginPath();
	audioCanvasCtx.arc(screenHalfWidth, screenHalfHeight, circleRadius, 0, 2 * Math.PI, false);

	if(fillCircle) {
		audioCanvas.shadowBlur = 0;
		audioCanvasCtx.fillStyle = circleFillColor;
		audioCanvasCtx.fill();
	}

	audioCanvasCtx.lineWidth = 7.5;
	audioCanvasCtx.strokeStyle = circleLineColor;
	audioCanvasCtx.shadowBlur = circleGlowStrength
	audioCanvasCtx.shadowColor = circleGlowColor
	audioCanvasCtx.stroke();
}

//Global Variable
var screenHalfWidth;
var screenHalfHeight;
var circleRadius;
var spectrumRadius;

window.onload = function() {
	audioCanvas = document.getElementById("audioCanvas");
	audioCanvas.width = window.innerWidth;
	audioCanvas.height = window.innerHeight;
	audioCanvasCtx = audioCanvas.getContext("2d");
	window.wallpaperRegisterAudioListener(wallpaperAudioListener);
	window.requestAnimationFrame(draw);
	
	loadCharacter();

	window.wallpaperPropertyListener = {
		applyUserProperties: wallpaperPropertyListener
	}
};

window.onresize = function(event) {
	if(audioCanvas != null) {
		audioCanvas.width = window.innerWidth;
		audioCanvas.height = window.innerHeight;
	}
}

function drawCharacter() {
	drawCharacter();
}

function draw(timestrap) {	
	if(lastAudioArray == null) {
		window.requestAnimationFrame(draw);
		return;
	}

	lerpAudioArray();

	 // Clears the rectangle
	 audioCanvasCtx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);

	if(characterAbove) {
		drawAudioSpectrum();
		drawCenterCircle();
		drawCharacter();
	} else {
		drawCharacter();
		drawAudioSpectrum();
		drawCenterCircle();
	}


	window.requestAnimationFrame(draw);
}