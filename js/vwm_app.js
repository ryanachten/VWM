$(document).ready(function(){
	initScene();
	animate();
});

function animate() {
	// requestAnimationFrame(animate);
	renderer.render(scene, camera);
	// updateHelper();
};