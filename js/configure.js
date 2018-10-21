//Configure Loader for Wallpaper-Center-AudioSpectrum

//WallpaperEngine.Prop {
	var backgroundImg = null
	//Color customize
	var backColor = 'rgb(0,0,0)';
	var emptyColor = 'rgb(255,184,196)';
	var fullColor = 'rgb(139,230,223)';
	var circleLineColor = 'rgb(255,255,140)';
	var fillCircle = false;
	var circleFillColor = 'rgb(255,255,140)';

	//Glow Effect
	var emptyGlowColor = 'rgb(255,184,196)';
	var emptyGlowStrength = 30;
	var fullGlowColor = 'rgb(139,230,223)';
	var fullGlowStrength = 30;
	var circleGlowColor = 'rgb(255,255,140)';
	var circleGlowStrength = 30;

	//Lerp
	var useLerp = true;
	var lerpPower = 0.2;

	//Spectrum size
	var useEnergyforSpectrumColor = true;
	var useClamp = false;
	var spectrumWidth = 15;
	var spectrumScale = 1;

	//Energy
	var energySensitivity = 30
	var energyCapacity = 300
	var energyEfficiency = 100
	var energyKeepRate = 100

	//Character
    var lightStrength = 2
	var characterAbove = false;

	var characterScale = 0.6;
	var characterPosX = 0;
	var characterPosY = 0;
//}

function readColorfromEngine(str) {
	var schemeColor = str.split(' ');
	schemeColor = schemeColor.map(function(c)
		 { return Math.ceil(c * 255); });
	return 'rgb(' + schemeColor + ')';
}

function updateBackground() {
	document.body.style.backgroundColor = backColor;
	if(backgroundImg != null && backgroundImg != "") {
		document.getElementById("background").setAttribute("src", "file:///" + decodeURI(backgroundImg));
		document.getElementById("background").style.display = 'block';
	} else {
		document.getElementById("background").removeAttribute("src")
		document.getElementById("background").style.display = 'none';
	}
	
}

function wallpaperPropertyListener(prop) {
	if(prop.backgroundImg) {
		backgroundImg = prop.backgroundImg.value;
	}
    //Color
	if(prop.backColor) {
		backColor = readColorfromEngine(prop.backColor.value);
	}
	updateBackground();

	if(prop.emptyColor) {
		emptyColor = readColorfromEngine(prop.emptyColor.value);
	}

	if(prop.fullColor) {
		fullColor = readColorfromEngine(prop.fullColor.value);
	}

	if(prop.circleLineColor) {
		circleLineColor = readColorfromEngine(prop.circleLineColor.value);
	}

	if(prop.fillCircle) {
		fillCircle = prop.fillCircle.value;
	}

	if(prop.circleFillColor) {
		circleFillColor = readColorfromEngine(prop.circleFillColor.value);
    }

    //Glow
	if(prop.emptyGlowColor) {
		emptyGlowColor = readColorfromEngine(prop.emptyGlowColor.value);
	}

	if(prop.emptyGlowStrength) {
		emptyGlowStrength = prop.emptyGlowStrength.value;
	}

	if(prop.fullGlowColor) {
		fullGlowColor = readColorfromEngine(prop.fullGlowColor.value);
	}

	if(prop.fullGlowStrength) {
		fullGlowStrength = prop.fullGlowStrength.value;
	}

	if(prop.circleGlowColor) {
		circleGlowColor = readColorfromEngine(prop.circleGlowColor.value);
	}

	if(prop.circleGlowStrength) {
		circleGlowStrength = prop.circleGlowStrength.value;
    }

	//Spectrum
	if(prop.useEnergyforSpectrumColor) {
		useEnergyforSpectrumColor = prop.useEnergyforSpectrumColor.value;
	}

	if(prop.useLerp) {
		useLerp = prop.useLerp.value;
	}

	if(prop.lerpPower) {
		lerpPower = prop.lerpPower.value / 100
	}

	if(prop.useClamp) {
		useClamp = prop.useClamp.value;
	}

	if(prop.spectrumWidth) {
		spectrumWidth = prop.spectrumWidth.value;
	}

	if(prop.spectrumScale) {
		spectrumScale = prop.spectrumScale.value / 100;
	}
	
	//Energy
	if(prop.energySensitivity) {
		energySensitivity = prop.energySensitivity.value
	}

	if(prop.energyCapacity) {
		energyCapacity = prop.energyCapacity.value
	}

	if(prop.energyEfficiency) {
		energyEfficiency = prop.energyEfficiency.value;
	}

	if(prop.energyKeepRate) {
		energyKeepRate = prop.energyKeepRate.value;
	}

    //Character
    if(prop.lightStrength) {
        lightStrength = prop.lightStrength.value / 100;
    }

    if(prop.characterAbove) {
        characterAbove = prop.characterAbove.value;
	}

	if(prop.characterScale) {
		characterScale = prop.characterScale.value / 100;
	}

	if(prop.characterPosX) {
		characterPosX = prop.characterPosX.value
	}

	if(prop.characterPosY) {
		characterPosY = prop.characterPosY.value
	}

	if(prop.natsuhiScale) {
		natsuhiScale = prop.natsuhiScale.value / 100;
	}

	if(prop.natsuhiPosX) {
		natsuhiPosX = prop.natsuhiPosX.value;
	}

	if(prop.natsuhiPosY) {
		natsuhiPosY = prop.natsuhiPosY.value;
	}
}