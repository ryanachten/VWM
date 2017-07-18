// DESCRIPT: all landing page functionality goes here:

var screenWidth, screenHeight,
	scene, camera,
	light, ambientLight,
	renderer;

var lissajousCurve;

$('html').hide(); //FOUC hack
$(document).ready(function(){
	initData()
	initScene();
	animate();
	var newLassijGroup = Math.floor(Math.random()*lissajousGroups.length);
	var newLassijIndex = Math.floor(Math.random()*lissajousGroups[newLassijGroup].length);
	tweenLissaj(lissajousGroups[newLassijGroup][newLassijIndex]);

	$('html').show(); //FOUC hack
});


function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	render();
}

function render(){

	renderer.render(scene, camera);
}

function initScene() {

	calcCanvasSizes();

	initSceneRenderer();
	initCamera();
	initLight();
	initMesh();

	function initSceneRenderer(){	
		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0xCFECEC );
		if ( Detector.webgl )
			renderer = new THREE.WebGLRenderer( {antialias:true} );
		else
			console.log('WebGLRenderer not supported - please use another browser');
			//TODO - add proper feedback
		renderer.setSize(screenWidth, screenHeight);
		document.getElementById('view-container').appendChild(renderer.domElement);
	}


	function initCamera(){
		camera = new THREE.PerspectiveCamera(75, screenWidth / screenHeight, 0.1, 1000);
		camera.position.set(0,150,180);
		camera.lookAt(scene.position);
		scene.add(camera);
	}


	function initLight(){
		light = new THREE.PointLight(0xffffff);
		light.position.set(100,250,0);
		scene.add(light);

		ambientLight = new THREE.AmbientLight(0x444444);
		
		scene.add(ambientLight);
	}


	function initMesh(){
		lissajousCurve = new LissajousCurve();
		lissajousCurve.color = "#BFE3E3";
		lissajousCurve.sizeX = lissajousCurve.sizeY = lissajousCurve.sizeZ = 150;
		lissajousCurve.meshObject.name = "Lissa";
		lissajousCurve.createMesh();
		scene.add(lissajousCurve.meshObject);
	}
}

function calcCanvasSizes(){
	
	var navHeight = $('#top-nav').outerHeight(true);
	var optHeight = $('#start-panel').outerHeight(true);
	console.log('navHeight: ' + navHeight + ' optHeight: ' + optHeight);
	screenHeight = $(window).height() - (navHeight+optHeight);	
	screenWidth = $(window).width();
	console.log('screenWidth: ' + screenWidth);
}

window.addEventListener('resize', recalcCanvas, false);
function recalcCanvas(){
	calcCanvasSizes();

	camera.aspect = screenWidth / screenHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( screenWidth, screenHeight);
}


$('#email-inputform').submit(function(e) {
	e.preventDefault();
	nameEmailFormValidationRedirect();
});

function nameEmailFormValidationRedirect(){

	if(document.getElementById('name-inputfield').value.length === 0){
		alert('Please enter your name before continuing');
	}else{
		//TODO: store username in DB
		console.log('submitting');
		window.location.href = 'test.html';	
	}	
}