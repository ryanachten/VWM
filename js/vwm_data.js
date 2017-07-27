// DESCRIPT: database coms with Firebase goes here

var database;
var ref;

(function(){
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
})();

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
		if(testIndex+1 < 10) testDirect = 'test0' + (testIndex+1); //+1 added to avoid index 0 start
		else testDirect = 'test' + (testIndex+1);
	// console.log('testDirect: ' + testDirect);
	var curDirectoryRef = 'vwm_participants/' + userId + '/' + nbackDirect + '/' + testDirect;
	console.log('curDirectoryRef: ' + curDirectoryRef);
	
	database.ref(curDirectoryRef+'/figure_clicked').set(figurePressed);
	database.ref(curDirectoryRef+'/target_figure').set(currentTarget);
	database.ref(curDirectoryRef+'/time_taken').set(testTimeTaken);
	database.ref(curDirectoryRef+'/test_result').set(testResult);
}

function getNbackPassRate(){

	return new Promise(function(resolve, reject){

		var nback0PassRates = [];
		var nback1PassRates = [];
		var nback2PassRates = [];
		var nback3PassRates = [];

		database.ref('vwm_participants').once('value').then(function(snapshot) {
			snapshot.forEach(function(snapUser){
				var nback0Passes = nback1Passes = nback2Passes = nback3Passes= 0;
				snapUser.child('nback_0').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback0Passes++;
				});
				snapUser.child('nback_1').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback1Passes++;
				});
				snapUser.child('nback_2').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback2Passes++;
				});
				snapUser.child('nback_3').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback3Passes++;
				});
				curNback0Passes = (nback0Passes/25)*100;
				curNback1Passes = (nback1Passes/25)*100;
				curNback2Passes = (nback2Passes/25)*100;
				curNback3Passes = (nback3Passes/25)*100;

				nback0PassRates.push(curNback0Passes);
				nback1PassRates.push(curNback1Passes);
				nback2PassRates.push(curNback2Passes);
				nback3PassRates.push(curNback3Passes);
			});
			returnResults();
		});

		function returnResults(){
			var aveNback0PassRate = nback0PassRates.reduce(function(sum, value) { return parseFloat(sum) + parseFloat(value) });
				aveNback0PassRate = (aveNback0PassRate / nback0PassRates.length).toFixed(2);
			
			var aveNback1PassRate = nback1PassRates.reduce(function(sum, value) { return parseFloat(sum) + parseFloat(value) });
				aveNback1PassRate = (aveNback1PassRate / nback1PassRates.length).toFixed(2);
			
			var aveNback2PassRate = nback2PassRates.reduce(function(sum, value) { return parseFloat(sum) + parseFloat(value) });
				aveNback2PassRate = (aveNback2PassRate / nback2PassRates.length).toFixed(2);
			
			var aveNback3PassRate = nback3PassRates.reduce(function(sum, value) { return parseFloat(sum) + parseFloat(value) });
				aveNback3PassRate = (aveNback3PassRate / nback3PassRates.length).toFixed(2);
				
			var results = {
				nback0: aveNback0PassRate,
				nback1: aveNback1PassRate,
				nback2: aveNback2PassRate,
				nback3: aveNback3PassRate
			}
			
			resolve(
				results
			);
		}
	});
}