// DESCRIPT: all psych test controller functionality goes here:

var testPerStageCount = 25;
var curSceneIndex = 0;
var curTestIndex = 0;

var nback = 2;

var curLassijIndex;

var testProgressBar = document.getElementById('progressbar');
var trialCountText =  document.getElementById('progress-trialcount');

var sceneMode = 'testAndMemorise'; // Can be one of three modes:
								// 'testOnly' 'memoriseOnly' 'testAndMemorise'

function loadScene(){

	console.log('sceneMode: ' + sceneMode);
	//TODO: sceneMode should be dictated by what stage the
	//		app is at, and what the testIndex count is

	if(sceneMode === 'testAndMemorise'){
		loadTestMemoriseScene(); 
	}
	else if(sceneMode === 'memoriseOnly'){
		loadMemoriseOnlyScene();
	}
	else if(sceneMode === 'testOnly'){
		loadTestOnlyScene();
	}
}



function loadTestMemoriseScene(){

	if(curTestIndex+1 <= testPerStageCount){
		curTestIndex++;
		console.log('curTestIndex: ' + curTestIndex);
		updateLissajFigure();
		updateProgressBar();
		updateTrialCountText();
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
}

function loadMemoriseOnlyScene(){

	function initScene(){
		// lissajousCurve.color = '#384040';
		var continueButton = document.getElementById('continue-button');
			continueButton.style.display = 'inline-block';
		var optionButtons = document.getElementsByClassName('option-button');
			for (var i = 0; i < optionButtons.length; i++) {
				optionButtons[i].style.display = 'none';
			};
	}
	initScene();
}

function loadTestOnlyScene(){

	function initScene(){
		lissajousCurve.color = '#CFECEC';
	}
	initScene();
}