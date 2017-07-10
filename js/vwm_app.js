// DESCRIPT: all functionality related to the app base here:

$(document).ready(function(){
	initApp();
	initScene();
	animate();
	loadTest();
});

var clock;
var testProgressIcons;

function initApp(){
	clock = new THREE.Clock();

	var optionButtons = document.getElementsByClassName('option-button');
	for(var i = 0; i < optionButtons.length; i++ ){
		optionButtons[i].addEventListener("click", loadTest);
	}
	
	testProgressIcons = document.getElementsByClassName('progress-circles');
	
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

var testCount = 10;
var curTest = 0;

var curLassijIndex;
function loadTest(){
	var newLassijIndex = Math.round(Math.random()*lissajousVariants.length);
	console.log('curLassij: ' + curLassijIndex + ' newLassij: ' + newLassijIndex);
	if(newLassijIndex !== curLassijIndex){
		tweenLissaj(lissajousVariants[ newLassijIndex ]);
		curLassijIndex = newLassijIndex;
	}
	else{
		loadTest();
	}


}
