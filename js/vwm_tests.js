// DESCRIPT: all psych test controller functionality goes here:

var testCount = 10;
var curTest = 0;
var testProgressIcons;

var curLassijIndex;
function loadTest(){
	var newLassijIndex = Math.floor(Math.random()*lissajousVariants.length);
	console.log('curLassij: ' + curLassijIndex + ' newLassij: ' + newLassijIndex);
	if(newLassijIndex !== curLassijIndex){
		tweenLissaj(lissajousVariants[ newLassijIndex ]);
		curLassijIndex = newLassijIndex;
	}
	else{
		loadTest();
	}
}