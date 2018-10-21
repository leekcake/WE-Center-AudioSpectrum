//Character Loader for Wallpaper-Center-AudioSpectrum

var character = new Image();
var character_louder = new Image();

//모인 에너지 및 개안 사용 여부
var energy = 0;
var isUsingEnergy = false;

function energyProgressWithAudioArrayBlend(blend) {
    if(isUsingEnergy) {
        var energyDownRate = 1;
        energyDownRate - ( Math.max((1 - blend - (energyKeepRate / 100.0) ), 0) * 100 ) / energyKeepRate
        energyDownRate /= ( energyEfficiency / 100);

		energy = Math.max(0, energy - energyDownRate);
		if(energy == 0) {   
			isUsingEnergy = false;
		}
	} else {
        energy = Math.min(energy + (blend * (energySensitivity / 100) ), energyCapacity);
		if(energy == energyCapacity) {
			isUsingEnergy = true;
		}
	}
}

function drawCharacter() {
    //audioCanvasCtx.drawImage(character, audioCanvas.width /2 audioCanvas.)
    if(isUsingEnergy) {
        drawInCenter(audioCanvas, audioCanvasCtx, character_louder, characterScale);
    } else {
        drawInCenter(audioCanvas, audioCanvasCtx, character, characterScale);
    }
}

function loadCharacter() {
    character.src = 'character/character_normal.png'
	character_louder.src = 'character/character_louder.png'
}