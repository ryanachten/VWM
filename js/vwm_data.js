// DESCRIPT: database coms with Firebase goes here

var database;
var ref;

function initData(){
	var config = {
	  apiKey: "AIzaSyBLarzAyb1lxMI6NfkLBc22F4AKy3vEahE",
	  authDomain: "visual-working-memory.firebaseapp.com",
	  databaseURL: "https://visual-working-memory.firebaseio.com",
	  projectId: "visual-working-memory",
	  storageBucket: "visual-working-memory.appspot.com",
	  messagingSenderId: "531010255750"
	};
	firebase.initializeApp(config);
	
	database = firebase.database();
	ref = database.ref('vwm_participants');
}

function submitUser(name, email){

	var test = {
		target_figure: '',
		figure_clicked: '',
		test_result: '',
		time_taken: ''
	};

	var nback = {
		test01: test,
		test02: test,
		test03: test,
		test04: test,
		test05: test,
		test06: test,
		test07: test,
		test08: test,
		test09: test,
		test10: test,
		test11: test,
		test12: test,
		test13: test,
		test14: test,
		test15: test,
		test16: test,
		test17: test,
		test18: test,
		test19: test,
		test20: test,
		test21: test,
		test22: test,
		test23: test,
		test24: test,
		test25: test
	};

	var userData = { //test -rm
		name: name,
		email: email,
		nback_0: nback,
		nback_1: nback,
		nback_2: nback,
		nback_3: nback
	};

	console.log('userData: ' + userData.name + ' ' + userData.email);
	var id = ref.push(userData);

	// console.log('id: ' + id.key);
	sessionStorage.setItem('vwmUserId', id.key);
}

function submitTestResult(nback, testIndex, currentTarget, figurePressed, testTimeTaken, testResult){

	var userId = sessionStorage.getItem('vwmUserId');
	if(userId == null){
		console.log('userId null');
		return;
	}else{
		console.log('userId: ' + userId);
	}

	var nbackDirect = 'nback_' + nback; 
	var testDirect;
		if(testIndex < 10) testDirect = 'test0' + (testIndex+1); //+1 added to avoid index 0 start
		else testDirect = 'test' + testIndex;
	var curDirectoryRef = 'vwm_participants/' + userId + '/' + nbackDirect + '/' + testDirect;
	console.log('curDirectoryRef: ' + curDirectoryRef);
	
	database.ref(curDirectoryRef+'/figure_clicked').set(figurePressed);
	database.ref(curDirectoryRef+'/target_figure').set(currentTarget);
	database.ref(curDirectoryRef+'/time_taken').set(testTimeTaken);
	database.ref(curDirectoryRef+'/test_result').set(testResult);
	
	
}
