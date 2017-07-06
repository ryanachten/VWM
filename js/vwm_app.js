// DESCRIPT: all functionality related to the app base here:

$(document).ready(function(){
	initApp();
	initScene();
	animate();
});

var clock;

function initApp(){
	clock = new THREE.Clock();
	setupTween();
}


function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	render();
};

function render(){

	//here is where you put changes before rendering the scene

	var delta = clock.getDelta();
	renderer.render(scene, camera);
}


function setupTween(){

	var update = function(){
		lissajousCurve.fa = current.fa;
		lissajousCurve.update();
	};

	var current = {fa: 4};

	var tweenTo = new TWEEN.Tween(current)
		.to({fa: 10}, 5000)
		.onUpdate(update);

	tweenTo.start();

}