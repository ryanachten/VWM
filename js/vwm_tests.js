// DESCRIPT: all psych test controller functionality goes here:

var testPerStageCount = 25;
var curSceneIndex = null;
var curTestIndex = null;

var nback = null; //needs to be set to null at start for production

var curLassijIndex;

var testProgressBar = document.getElementById('progressbar');
var trialCountText = document.getElementById('progress-trialcount');
var targetPanel = document.getElementById('target-panel');
var targetHelperText = document.getElementById('target-helpertext');
var optionsHelperText = document.getElementById('options-helpertext');

var transitionPanel = document.getElementById('transition-panel');
var transitionHelperText = document.getElementById('transition-helpertext');
var transitionStageNum = document.getElementById('trans-header-stagenum');
var transitionDiagram = document.getElementById('nback-diagram');

function loadScene(optionButtonID){
	if(optionButtonID !== 'continue-button'){
		console.log('Button pressed: ' + optionButtonID);
	}
	console.log(' ');
	// console.log('curSceneIndex: '+ curSceneIndex);

	if(nback === null){
		console.log('sceneMode: transition to first stage');
		loadStageTransitionScene();
	}
	else if(curSceneIndex < nback){ //if the number of mem tests req hasn't been reached
		console.log('sceneMode: memoriseOnly');
		loadMemoriseOnlyScene();
		curSceneIndex++;
	}
	else if(curTestIndex+nback >= testPerStageCount //if we're on the last mem scene (accounts for n-back range)
			&& curTestIndex < testPerStageCount){  	// and not over test count (25)
		console.log('sceneMode: testOnly');
		loadTestOnlyScene();
		curSceneIndex++;
	} 
	else if (curTestIndex < testPerStageCount){
		console.log('sceneMode: testAndMemorise');
		loadTestMemoriseScene();
		curSceneIndex++; 
	}
	else if(curSceneIndex+nback > testPerStageCount){
		console.log('sceneMode: transition to next stage');
		loadStageTransitionScene();
	}
}


function loadTestMemoriseScene(){

	function initScene(){
		transitionPanel.style.display = 'none';
		lissajousCurve.color = '#384040';
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
		console.log('curTestIndex: ' + curTestIndex);
		
		curTestIndex++;
	}
	updateMemoriseFigure();
	updateProgressBar();
	updateHelperText('testMem');
}

function loadMemoriseOnlyScene(){

	function initScene(){
		transitionPanel.style.display = 'none';
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
	updateMemoriseFigure();
}

function loadTestOnlyScene(){

	function initScene(){
		lissajousCurve.color = '#CFECEC'; //FIXME: seems kind of buggy - not best approach
		lissajousCurve.update();
	}
	initScene();

	console.log('curTestIndex: ' + curTestIndex);
	curTestIndex++;

	updateProgressBar();
	updateHelperText('test');
}

function loadStageTransitionScene(){

	if(nback === null){
		nback = 0;	
	}else{
		nback++;
	}
	console.log(' ');
	console.log('Move to N-back: ' + nback);

	function initScene(){
		lissajousCurve.color = '#CFECEC';
		lissajousCurve.update();

		var continueButton = document.getElementById('continue-button');
				continueButton.style.display = 'inline-block';
		var optionButtons = document.getElementsByClassName('option-button');
			for (var i = 0; i < optionButtons.length; i++) {
				optionButtons[i].style.display = 'none';
			}

		transitionPanel.style.display = 'block';
		transitionStageNum.innerText = 'N-Back ' + nback;

		var diagramPath = 'img/VWM_NbackDiagrams/VWM_Diagram_';
		switch(nback){
			case 0:
				transitionDiagram.src = diagramPath + '0Back.svg';
				break;
			case 1:
				transitionDiagram.src = diagramPath + '1Back.svg';
				break;
			case 2:
				transitionDiagram.src = diagramPath + '2Back.svg';
				break;
			case 3:
				transitionDiagram.src = diagramPath + '3Back.svg';
				break;
			case 4:
				transitionDiagram.src = diagramPath + '4Back.svg';
				break;
			default:
				transitionDiagram.src = 'img/VWM_NbackDiagrams/VWM_Diagram_0Back.svg';
		}
	}
	initScene();
	updateHelperText('trans');

	console.log('curTestIndex: ' + curTestIndex);

	curSceneIndex = 0;
	curTestIndex = null;
	updateProgressBar();
}


function updateProgressBar(){
	var curProgressPercent = curTestIndex * (100/testPerStageCount);	
	testProgressBar.style.width = curProgressPercent + '%';
	trialCountText.innerText = (testPerStageCount - curTestIndex) + " trials";
}

function updateMemoriseFigure(){
		var newLassijIndex = Math.floor(Math.random()*lissajousVariants.length);
		if(newLassijIndex !== curLassijIndex){
			tweenLissaj(lissajousVariants[ newLassijIndex ]);
			curLassijIndex = newLassijIndex;		
			console.log('Current Figure: ' + curLassijIndex);
		}
		else{
			updateMemoriseFigure();
		}
}

function updateHelperText(sceneMode){
	if(sceneMode === 'mem'){
		targetHelperText.style.display = 'block';
		optionsHelperText.style.display = 'block';
		targetHelperText.innerHTML = 'Find this image in <span id="target-scenecount">'+ nback +' scenes</span> from now';
		optionsHelperText.innerHTML = 'No options to select yet, just memorise the image above';
		targetPanel.style.width = '250px';

	}else if(sceneMode === 'test'){
		targetHelperText.innerHTML = 'Nothing to memorise here, just select the image from <span id="target-scenecount">'+ nback +' scenes</span> ago in the options below';
		optionsHelperText.innerHTML = 'Find the image from <span id="options-scenecount">'+ nback +' scenes</span> ago in the images to the left';
		targetPanel.style.width = '100%';

	}else if(sceneMode === 'trans'){
		targetHelperText.style.display = 'none';
		optionsHelperText.style.display = 'none';
		targetPanel.style.width = '250px';

		if(nback === 0){
			transitionHelperText.innerHTML = "Find the <strong>Memorise</strong> ('M') image amongst the <strong>Options</strong> ('O') images in the <em>same scene<em>";
		}else if(nback === 1){
			transitionHelperText.innerHTML = "Find the <strong>Memorise</strong> ('M') image from <strong>"+ nback +" scene ago</strong> amongst the <strong>Options</strong> ('O') images";
		}else{
			transitionHelperText.innerHTML = "Find the <strong>Memorise</strong> ('M') image from <strong>"+ nback +" scenes ago</strong> amongst the <strong>Options</strong> ('O') images";
		}
	}else{
		targetHelperText.style.display = 'block';
		optionsHelperText.style.display = 'block';
		targetHelperText.innerHTML = 'Find this image in <span id="target-scenecount">'+ nback +' scenes</span> from now';	
		optionsHelperText.innerHTML = 'Find the image from <span id="options-scenecount">'+ nback +' scenes</span> ago in the images to the left';
	}
}