// DESCRIPT: all functionality related to the app base here:

$('html').hide(); //FOUC hack
$(document).ready(function(){
	
	initApp();
	initScene();
	animate();
	loadScene();

	// console.log('FOUC');
	$('html').show(); //FOUC hack
});

var clock;


function initApp(){
	clock = new THREE.Clock();

	var optionButtons = document.getElementsByClassName('option-button');
	for(var i = 0; i < optionButtons.length; i++ ){
		optionButtons[i].addEventListener("click", function(){
			loadScene(this.id, this.getAttribute('data-lissaj-index'));
		});
	}
	var continueButton = document.getElementById('continue-button');
		continueButton.addEventListener("click", function(){
			loadScene('continue-button');
		});
	
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


