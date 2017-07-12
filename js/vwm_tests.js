// DESCRIPT: all psych test controller functionality goes here:

var testPerStageCount = 25;
var curSceneIndex = 0;
var curTestIndex = null;

var nback = 2;

var curLassijIndex;

var testProgressBar = document.getElementById('progressbar');
var trialCountText = document.getElementById('progress-trialcount');
var targetHelperText = document.getElementById('target-helpertext');
// var targetSceneText = document.getElementById('target-scenecount');
var optionsHelperText = document.getElementById('options-helpertext');
// var optionsSceneText = document.getElementById('options-scenecount');


function loadScene(){

	console.log('curSceneIndex: '+ curSceneIndex);

	if(curSceneIndex < nback){ //if the number of mem tests req hasn't been reached
		console.log('sceneMode: memoriseOnly');
		loadMemoriseOnlyScene();
	}
	else if(curTestIndex+1 === testPerStageCount){	//if we're on the last test
		console.log('sceneMode: testOnly');
		loadTestOnlyScene();
	} 
	else{
		console.log('sceneMode: testAndMemorise');
		loadTestMemoriseScene(); 
	}
	curSceneIndex++;
}


function loadTestMemoriseScene(){

	function initScene(){
		var continueButton = document.getElementById('continue-button');
			continueButton.style.display = 'none';
		var optionButtons = document.getElementsByClassName('option-button');
			for (var i = 0; i < optionButtons.length; i++) {
				optionButtons[i].style.display = 'inline-block';
			};
	}
	initScene();

	if(curTestIndex === null){
		curTestIndex = 0;
	}
	else{
		curTestIndex++;
	}

	if(curTestIndex+1 <= testPerStageCount){
		console.log('curTestIndex: ' + curTestIndex);
		updateLissajFigure();
		updateProgressBar();
		updateTrialCountText();
		updateHelperText('testMem');
	}
}

function loadMemoriseOnlyScene(){

	function initScene(){
		lissajousCurve.color = '#384040';
		var continueButton = document.getElementById('continue-button');
			continueButton.style.display = 'inline-block';
		var optionButtons = document.getElementsByClassName('option-button');
			for (var i = 0; i < optionButtons.length; i++) {
				optionButtons[i].style.display = 'none';
			};
	}
	initScene();
	updateHelperText('mem');
	updateLissajFigure();
}

function loadTestOnlyScene(){

	function initScene(){
		lissajousCurve.color = '#CFECEC';
	}
	initScene();

	curTestIndex++;

	updateProgressBar();
	updateTrialCountText();
	updateHelperText('test');
}


function updateProgressBar(){
	var curProgressPercent = curTestIndex * (100/testPerStageCount);	
	testProgressBar.style.width = curProgressPercent + '%';
}

function updateTrialCountText(){
	trialCountText.innerText = (testPerStageCount - curTestIndex) + " trials";
}

function updateLissajFigure(){
		var newLassijIndex = Math.floor(Math.random()*lissajousVariants.length);
		// console.log('curLassij: ' + curLassijIndex + ' newLassij: ' + newLassijIndex);
		if(newLassijIndex !== curLassijIndex){
			tweenLissaj(lissajousVariants[ newLassijIndex ]);
			curLassijIndex = newLassijIndex;		
		}
		else{
			updateLissajFigure();
		}
}

function updateHelperText(sceneMode){
	if(sceneMode === 'mem'){
		targetHelperText.innerHTML = 'Find this image in <span id="target-scenecount">'+ nback +' scenes</span> from now';
		optionsHelperText.innerHTML = 'No options to select yet, just memorise the image above';
	}else if(sceneMode === 'test'){
		targetHelperText.innerHTML = 'Nothing to memorise here, just select the image from the previous scene in the options below';
		optionsHelperText.innerHTML = 'Find the image from <span id="options-scenecount">'+ nback +' scenes</span> ago in the images to the left';
	}else{
		targetHelperText.innerHTML = 'Find this image in <span id="target-scenecount">'+ nback +' scenes</span> from now';	
		optionsHelperText.innerHTML = 'Find the image from <span id="options-scenecount">'+ nback +' scenes</span> ago in the images to the left';
	}
}