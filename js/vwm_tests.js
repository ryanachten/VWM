// DESCRIPT: all psych test controller functionality goes here:

var totalTestCount = 10;
var curTestIndex = null;

var curLassijIndex;
var testProgressIcons;


function loadTest(){

	if(curTestIndex === null){
		curTestIndex = 0;
	}else{
		curTestIndex++;
	}

	if(curTestIndex+1 <= totalTestCount){
		console.log('curTestIndex: ' + curTestIndex);
		updateLissajFigure();
		updateProgressIcons();
	}	
}

function updateProgressIcons(){
		
	testProgressIcons[curTestIndex].children[0].style.fill = '#FFA0B6';
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