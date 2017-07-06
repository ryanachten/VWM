// DESCRIPT: all functionality related to the app base here:

$(document).ready(function(){
	initApp();
	initScene();
	animate();
	tweenLissaj(lissajousVariants[1]); //move this to a button event
});

var clock;

function initApp(){
	clock = new THREE.Clock();
	
}


function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	render();
}

function render(){

	var delta = clock.getDelta();
	renderer.render(scene, camera);
}


function tweenLissaj(newLissaj){

	//Tween resource: http://learningthreejs.com/data/tweenjs_for_smooth_animation/tweenjs_for_smooth_animation.js

	var update = function(){
		lissajousCurve.fa = current.freqA;
		lissajousCurve.fb = current.freqB;
		lissajousCurve.fc = current.freqC;
		lissajousCurve.phaseX = current.phaseX;
		lissajousCurve.phaseY = current.phaseY;
		lissajousCurve.phaseZ = current.phaseZ;
		lissajousCurve.update();
	};

	var current = { freqA: lissajousCurve.fa,
					freqB: lissajousCurve.fb,
					freqC: lissajousCurve.fc,
					phaseX: lissajousCurve.phaseX,
					phaseY: lissajousCurve.phaseY,
					phaseZ: lissajousCurve.phaseZ
				};

	var tweenTo = new TWEEN.Tween(current)
		.to({	freqA: newLissaj.freqA,
				freqB: newLissaj.freqB,
				freqC: newLissaj.freqC,
				phaseX: newLissaj.phaseX,
				phaseY: newLissaj.phaseY,
				phaseZ: newLissaj.phaseZ
		}, 5000)
		.onUpdate(update);

	tweenTo.start();

}