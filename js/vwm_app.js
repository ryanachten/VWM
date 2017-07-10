// DESCRIPT: all functionality related to the app base here:

$(document).ready(function(){
	initApp();
	initScene();
	animate();
	loadTest();
});

var clock;

function initApp(){
	clock = new THREE.Clock();

	var optionButtons = document.getElementsByClassName('option-button');
	for(var i = 0; i < optionButtons.length; i++ ){
		optionButtons[i].addEventListener("click", loadTest);
	}
	
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

var curLassijIndex;
function loadTest(){
	var newLassijIndex = Math.round(Math.random()*lissajousVariants.length);
	console.log('curLassijIndex: ' + curLassijIndex);
	console.log('newLassijIndex: ' + newLassijIndex);
	if(newLassijIndex !== curLassijIndex){
		tweenLissaj(lissajousVariants[ newLassijIndex ]);
		curLassijIndex = newLassijIndex;
	}
	else{
		loadTest();
	}
}
