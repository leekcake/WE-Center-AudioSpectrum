//Utils for Wallpaper-Center-AudioSpectrum

//Const
var halfPI = Math.PI * 0.5;
var radian145 = (Math.PI * 5) / 4;

function blendAudioArray(start, size) {
	var blending = 0.0;
	for(var i = start; i < start+size; i++) {
		var data = audioArray[i];
		if(useClamp) {
			data = Math.min(1, data);
		}
		blending += data;
	}
	blending = blending / size;
	return blending;
}

function normalize(value, min, max)
{
	return Math.abs( (value - min).toFixed(1) / (max - min).toFixed(1) );
}

function lerp(a, b, n) {
	return (1-n)*a + n*b;
}

//progress = 0 ~ 1
function lerpColor(src, dest, progress) {
	function lerpColorInner(a, b, n) {
		a *= 1;
		b *= 1;
		n *= 1;
		return a + (b - a) * n;
	}

	src = src.replace(" " , "");
	dest = dest.replace(" " , "");
	if(src.startsWith("rgb(") && dest.startsWith("rgb(")) {
		src = src.substring(4, src.length - 1);
		dest = dest.substring(4, dest.length - 1);
		var srcData = src.split(",")
		var destData = dest.split(",")
		var result = "rgb("
		for(i = 0; i < srcData.length; i++) {
			result += lerpColorInner(srcData[i], destData[i], progress) + ",";
		}
		result = result.substring(0, result.length - 1);
		result += ")"
		
		return result
	}
	return dest;
}

function drawInCenter(canvas, canvasContent, image, scale = 1) {
	var width = image.width * circleScale * scale;
	var height = image.height * circleScale * scale;

	canvasContent.drawImage(image,
        canvas.width / 2 - width / 2,
		canvas.height / 2 - height / 2,
		width,
		height
	);
}

function blendLeftAudio() {
	return blendAudioArray(0, audioArray.length / 2)
}

function blendRightAudio() {
	return blendAudioArray(audioArray.length / 2, audioArray.length / 2 - 1)
}

function drawPart(partImg, x, y, addX, addY, scale) {
	audioCanvasCtx.drawImage(partImg, x + (addX * scale), y + (addY * scale),
							partImg.width * scale, partImg.height * scale)
}