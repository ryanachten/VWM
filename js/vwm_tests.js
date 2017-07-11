// DESCRIPT: all psych test controller functionality goes here:

// var totalTestCount = 25;
var testPerStageCount = 25;
var curTestIndex = null;

var curLassijIndex;

var testProgressBar = document.getElementById('progressbar');


function loadTest(){

	if(curTestIndex === null){
		curTestIndex = 0;
	}else if(curTestIndex+1 <= testPerStageCount){
		curTestIndex++;
	}

	if(curTestIndex+1 <= testPerStageCount){
		console.log('curTestIndex: ' + curTestIndex);
		updateLissajFigure();
		updateProgressBar();
	}
}

function updateProgressBar(){
		
	var curProgressPercent = (curTestIndex+1) * (100/testPerStageCount);	
	testProgressBar.style.width = curProgressPercent + '%';
}

function updateLissajFigure(){
	var newLassijIndex = Math.floor(Math.random()*lissajousVariants.length);
	console.log('curLassij: ' + curLassijIndex + ' newLassij: ' + newLassijIndex);
	if(newLassijIndex !== curLassijIndex){
		tweenLissaj(lissajousVariants[ newLassijIndex ]);
		curLassijIndex = newLassijIndex;		
	}
	else{
		updateLissajFigure();
	}
}