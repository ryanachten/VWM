// DESCRIPT: all landing page functionality goes here:

var screenWidth, screenHeight,
	scene, camera,
	light, ambientLight,
	renderer;

var lissajousCurve;

$('html').hide(); //FOUC hack
$(document).ready(function(){
	// initData()
	initScene();
	animate();
	var newLassijGroup = Math.floor(Math.random()*lissajousGroups.length);
	var newLassijIndex = Math.floor(Math.random()*lissajousGroups[newLassijGroup].length);
	tweenLandingLissaj(lissajousGroups[newLassijGroup][newLassijIndex]);

	$('html').show(); //FOUC hack
});


function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	render();
}

function render(){
	lissajousCurve.meshObject.rotation.x += 0.01;
	lissajousCurve.meshObject.rotation.y += 0.01;
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
		lissajousCurve.material = new THREE.MeshLambertMaterial();
		lissajousCurve.color = "#BFE3E3"; //Red - FFA0B6 Blue - #BFE3E3 Grey - #F5F5F5

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
	screenHeight = $(window).outerHeight() - (navHeight+optHeight);
	if(screenHeight < 450) screenHeight = 450;
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

$('#submit-button').click(function(e) {
	console.log('submit via button');
	nameEmailFormValidationRedirect();
});

function nameEmailFormValidationRedirect(){

	var namefield = document.getElementById('name-inputfield');
	var emailfield = document.getElementById('email-inputfield');

	if(namefield.value.length === 0){
		alert('Please enter your name before continuing');
		return;
	}
	if(emailfield.value.length === 0){
		alert('Please enter your email before continuing');
		return;
	}
	if(!emailfield.value.includes('@')){
		alert('Please enter a valid email with an "@" character')
		return;
	}

	submitUser(namefield.value, emailfield.value);
	window.location.href = 'test.html';
}



function tweenLandingLissaj(newLissaj){

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

	var tweenTo = new TWEEN.Tween(current);
	tweenTo.to({	freqA: newLissaj.freqA,
							freqB: newLissaj.freqB,
							freqC: newLissaj.freqC,
							phaseX: newLissaj.phaseX,
							phaseY: newLissaj.phaseY,
							phaseZ: newLissaj.phaseZ
		}, 10000);
	tweenTo.onUpdate(update);

	tweenTo.start();
}
