//Audio Array/Spectrum Processing for Wallpaper-Center-AudioSpectrum

var lastAudioArray, audioArray;

function lerpAudioArray() {
    if(useLerp) {
		for(var i = 0; i < lastAudioArray.length; i++) {
			audioArray[i] = lerp(audioArray[i], lastAudioArray[i], lerpPower);
		}
	} else {
		audioArray = lastAudioArray;
	}
}

function wallpaperAudioListener(audio) {
	lastAudioArray = audio;
	if(audioArray == null) {
		audioArray = audio;
	}
}

function drawAudioArray(i, halfCount) {
	var value = audioArray[i] * spectrumScale;
	if(useClamp) {
		value = Math.min(1, value);
	}
	var power = spectrumRadius * value;
	var radian = halfPI + ((i / halfCount) * Math.PI)
	
	var cx = screenHalfWidth + (circleRadius * Math.cos(radian));
	var cy = screenHalfHeight + (circleRadius * Math.sin(radian));

	audioCanvasCtx.moveTo(cx, cy);
	audioCanvasCtx.lineTo(cx + (power * Math.cos(radian)),
		cy + (power * Math.sin(radian)));
}

function drawAudioSpectrum() {
    // Render bars along the full width of the canvas
    var halfCount = audioArray.length / 2;
    
	// Draw Left Side
	var progress = blendAudioArray(0, audioArray.length);

	energyProgressWithAudioArrayBlend(progress);

	if(isUsingEnergy) {
		circleScale = circleScaleDefault + (progress * 0.4)
	} else {
		circleScale = lerp(circleScale, circleScaleDefault, 0.39)
	}

	if(useEnergyforSpectrumColor) {
		progress = normalize(energy, 0, energyCapacity);
	}

	audioCanvasCtx.strokeStyle = lerpColor(emptyColor, fullColor, progress);
	audioCanvasCtx.shadowBlur = lerp(emptyGlowStrength, fullGlowStrength);
	audioCanvasCtx.shadowColor = lerpColor(emptyGlowColor, fullGlowColor, progress);
	audioCanvasCtx.lineWidth = spectrumWidth;

	audioCanvasCtx.beginPath();
	for (var i = 0; i < audioArray.length; ++i) {
		drawAudioArray(i, halfCount);
	}
	audioCanvasCtx.stroke();
}