// DESCRIPT: all functionality related to the app base here:

$(document).ready(function(){
	initApp();
	initScene();
	animate();
});

var clock;

function initApp(){
	clock = new THREE.Clock();
}


function animate() {
	requestAnimationFrame(animate);
	
	render();
};

function render(){

	//here is where you put changes before rendering the scene

	var delta = clock.getDelta();

	renderer.render(scene, camera);
}