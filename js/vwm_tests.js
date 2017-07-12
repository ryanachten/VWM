// DESCRIPT: all psych test controller functionality goes here:

var testPerStageCount = 25;
var curTestIndex = null; //TODO: remame as sceneIndex? Might need a scene and test index...

var curLassijIndex;

var testProgressBar = document.getElementById('progressbar');
var trialCountText =  document.getElementById('progress-trialcount');

var sceneMode = 'memoriseOnly'; // Can be one of three modes:
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
		//TODO: loadTestOnlyScene();
	}
}



function loadTestMemoriseScene(){

	if(curTestIndex === null){
		curTestIndex = 0;
	}else if(curTestIndex+1 <= testPerStageCount){
		curTestIndex++;
	}

	if(curTestIndex+1 <= testPerStageCount){
		console.log('curTestIndex: ' + curTestIndex);
		updateLissajFigure();
		updateProgressBar();
		updateTrialCountText();
	}

	function updateProgressBar(){
		var curProgressPercent = (curTestIndex+1) * (100/testPerStageCount);	
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
	} //prob rename this function to something clearer
}

function loadMemoriseOnlyScene(){

	function initScene(){
		var continueButton = document.getElementById('continue-button');
			continueButton.style.display = 'inline-block';
		var optionButtons = document.getElementsByClassName('option-button');
			for (var i = 0; i < optionButtons.length; i++) {
				optionButtons[i].style.display = 'none';
			};
	}
	initScene();
}