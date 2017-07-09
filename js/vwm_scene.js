// DESCRIPT: all functionality related to the 3JS scene here:


var screenWidth, screenHeight,
	scene, camera,
	light, ambientLight,
	renderer;

var lissajousCurve;


function initScene() {
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;	

	initSceneRenderer();
	initCamera();
	initLight();
	initMesh();
}

function initSceneRenderer(){	
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xCFECEC );
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		console.log('WebGLRenderer not supported - please use another browser');
		//TODO - add proper feedback
	renderer.setSize(screenWidth, screenHeight);
	document.body.appendChild(renderer.domElement);

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
	lissajousCurve.meshObject.name = "Lissa";
	lissajousCurve.createMesh();
	scene.add(lissajousCurve.meshObject);
}