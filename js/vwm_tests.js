// DESCRIPT: all psych test controller functionality goes here:

var testPerStageCount = 25;
var curSceneIndex = 0;
var curTestIndex = null;

var nback = 4;

var curLassijIndex;

var testProgressBar = document.getElementById('progressbar');
var trialCountText = document.getElementById('progress-trialcount');
var targetPanel = document.getElementById('target-panel');
var targetHelperText = document.getElementById('target-helpertext');
var optionsHelperText = document.getElementById('options-helpertext');


function loadScene(){

	console.log('curSceneIndex: '+ curSceneIndex);

	if(curSceneIndex < nback){ //if the number of mem tests req hasn't been reached
		console.log('sceneMode: memoriseOnly');
		loadMemoriseOnlyScene();
	}
	else if(curTestIndex+nback >= testPerStageCount //if we're on the last mem scene (accounts for n-back range)
			&& curTestIndex < testPerStageCount){  	// and not over test count (25)
		console.log('sceneMode: testOnly');
		loadTestOnlyScene();
	} 
	else if (curTestIndex < testPerStageCount){
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
		lissajousCurve.color = '#CFECEC'; //FIXME: seems kind of buggy - not best approach
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
		targetPanel.style.width = '250px';
	}else if(sceneMode === 'test'){
		targetHelperText.innerHTML = 'Nothing to memorise here, just select the image from <span id="target-scenecount">'+ nback +' scenes</span> ago in the options below';
		optionsHelperText.innerHTML = 'Find the image from <span id="options-scenecount">'+ nback +' scenes</span> ago in the images to the left';
		targetPanel.style.width = '100%';
	}else{
		targetHelperText.innerHTML = 'Find this image in <span id="target-scenecount">'+ nback +' scenes</span> from now';	
		optionsHelperText.innerHTML = 'Find the image from <span id="options-scenecount">'+ nback +' scenes</span> ago in the images to the left';
	}
}