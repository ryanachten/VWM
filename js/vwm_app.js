// DESCRIPT: all functionality related to the app base here:

$(document).ready(function(){
	initApp();
	initScene();
	animate();
	tweenLissaj(lissajousVariants[1]);
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

	//here is where you put changes before rendering the scene

	var delta = clock.getDelta();
	renderer.render(scene, camera);
}


function tweenLissaj(newLissaj){

	var update = function(){
		lissajousCurve.fa = current.freqA;
		lissajousCurve.update();
	};

	var current = {freqA: lissajousCurve.fa};

	var tweenTo = new TWEEN.Tween(current)
		.to({freqA: newLissaj.freqA}, 5000)
		.onUpdate(update);

	tweenTo.start();

}