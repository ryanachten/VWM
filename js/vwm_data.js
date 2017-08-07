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

function submitAdmin(password, email){
	
	return new Promise(function(resolve, reject){

		const promise = firebase.auth().signInWithEmailAndPassword(email, password);
		promise.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorMessage);
		});
		promise.then(function(result){
			returnAdminId(); //FIXME: this feels like a bit of a hack
		});

		function returnAdminId(){
			resolve();
		}
	});


	
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

	var dateTime = new Date;

	var userData = { //test -rm
		name: name,
		email: email,
		date: dateTime.toLocaleDateString(),
		time: dateTime.toLocaleTimeString(),
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

function getTotalTestMetrics(){

	return new Promise(function(resolve, reject){

		var testTimeAccuracy = [];

		var nback0PassRates = [];
		var nback1PassRates = [];
		var nback2PassRates = [];
		var nback3PassRates = [];

		var nback0Times = [];
		var nback1Times = [];
		var nback2Times = [];
		var nback3Times = [];

		var lissajPassRates = {
			group0: {
				lissaj0: { pass: 0, fail: 0 },
				lissaj1: { pass: 0, fail: 0 },
				lissaj2: { pass: 0, fail: 0 }
			},
			group1: {
				lissaj0: { pass: 0, fail: 0 },
				lissaj1: { pass: 0, fail: 0 },
				lissaj2: { pass: 0, fail: 0 }
			},
			group2: {
				lissaj0: { pass: 0, fail: 0 },
				lissaj1: { pass: 0, fail: 0 },
				lissaj2: { pass: 0, fail: 0 }
			},
			group3: {
				lissaj0: { pass: 0, fail: 0 },
				lissaj1: { pass: 0, fail: 0 },
				lissaj2: { pass: 0, fail: 0 }
			},
			group4: {
				lissaj0: { pass: 0, fail: 0 },
				lissaj1: { pass: 0, fail: 0 },
				lissaj2: { pass: 0, fail: 0 }
			}
		};

		database.ref('vwm_participants').once('value').then(function(snapshot) {
			snapshot.forEach(function(snapUser){
				
				var nback0Passes = nback1Passes = nback2Passes = nback3Passes= 0;
				snapUser.child('nback_0').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
						if(curTestResult === 'Pass')
							nback0Passes++;
					var curTestTime = parseFloat(snapTest.child('time_taken').val());
						if(!isNaN(curTestTime)) nback0Times.push(curTestTime);
					var curTargetIndex = snapTest.child('target_figure').val();
						pushTargetResult(curTargetIndex, curTestResult);
				});
				snapUser.child('nback_1').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
						if(curTestResult === 'Pass')
							nback1Passes++;
					var curTestTime = parseFloat(snapTest.child('time_taken').val());
						if(!isNaN(curTestTime)) nback1Times.push(curTestTime);
					var curTargetIndex = snapTest.child('target_figure').val();
						pushTargetResult(curTargetIndex, curTestResult);
				});
				snapUser.child('nback_2').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
						if(curTestResult === 'Pass')
							nback2Passes++;
					var curTestTime = parseFloat(snapTest.child('time_taken').val());
						if(!isNaN(curTestTime)) nback2Times.push(curTestTime);
					var curTargetIndex = snapTest.child('target_figure').val();
						pushTargetResult(curTargetIndex, curTestResult);
				});
				snapUser.child('nback_3').forEach(function(snapTest){
					var curTestResult = snapTest.child('test_result').val();
						if(curTestResult === 'Pass')
							nback3Passes++;
					var curTestTime = parseFloat(snapTest.child('time_taken').val());
						if(!isNaN(curTestTime)) nback3Times.push(curTestTime);
					var curTargetIndex = snapTest.child('target_figure').val();
						pushTargetResult(curTargetIndex, curTestResult);
				});

				curNback0Passes = (nback0Passes/25)*100;
				curNback1Passes = (nback1Passes/25)*100;
				curNback2Passes = (nback2Passes/25)*100;
				curNback3Passes = (nback3Passes/25)*100;

				nback0PassRates.push(curNback0Passes);
				nback1PassRates.push(curNback1Passes);
				nback2PassRates.push(curNback2Passes);
				nback3PassRates.push(curNback3Passes);

				var curTestDayTime = snapUser.child('time').val()
				if(curTestDayTime !== null){
					var aveAccuracy = (curNback0Passes + curNback1Passes + curNback2Passes + curNback3Passes)/4;
					testTimeAccuracy.push({
						time: curTestDayTime, accuracy: aveAccuracy	
					});
				}
			});
			returnResults();
		});

		function pushTargetResult(tagetIndex, result){
			if (result.length > 0) {

				var groupIndex = 'group' + tagetIndex.groupIndex;
				var lissajIndex = 'lissaj' + tagetIndex.lassigIndex;

				if(result === 'Pass')
					lissajPassRates[''+groupIndex+''][''+lissajIndex+''].pass++;
				else
					lissajPassRates[''+groupIndex+''][''+lissajIndex+''].fail++;
			}
		}

		function returnResults(){
			
			var calcNbackPassRates = function(nbackPassRates){ 
					var aveNbackPassRate = nbackPassRates.reduce(function(sum, value) { return parseFloat(sum) + parseFloat(value) });
					aveNbackPassRate = (aveNbackPassRate / nbackPassRates.length).toFixed(2);
					return aveNbackPassRate;
			};
			
			//FIXME: total is broken due to 3 having no data
			var calcNbackTimes = {
				nback: function(nbackTimes){ 
					var aveNbackTime = nbackTimes.reduce(function(sum, value) { return sum + value });
					aveNbackTime = parseFloat((aveNbackTime / nbackTimes.length).toFixed(2));
					return aveNbackTime;
				},
				total: function(){
					var aveTotalTime = this.nback(nback0Times) + this.nback(nback1Times) + this.nback(nback2Times) + this.nback(nback3Times);
					return aveTotalTime;	
				}
			};
			
			var calcLissajPassRates = function(curLissaj){ 
				var passPercent = curLissaj.pass / (curLissaj.pass + curLissaj.fail);
				passPercent *= 100;
				passPercent = passPercent.toFixed(2);
				return passPercent;
			};

			var results = {
				testTimeAccuracy: testTimeAccuracy,
				nbackPassRates: {
					nback0: calcNbackPassRates(nback0PassRates),
					nback1: calcNbackPassRates(nback1PassRates),
					nback2: calcNbackPassRates(nback2PassRates),
					nback3: calcNbackPassRates(nback3PassRates)
				},			
				nbackTimes: {
					nback0: calcNbackTimes.nback(nback0Times),
					nback1: calcNbackTimes.nback(nback1Times),
					nback2: calcNbackTimes.nback(nback2Times),
					nback3: calcNbackTimes.nback(nback3Times),
					total: calcNbackTimes.total()	
				},
				lissajPasses: {
					group0 : {
						lissaj1: calcLissajPassRates(lissajPassRates.group0.lissaj0),
						lissaj2: calcLissajPassRates(lissajPassRates.group0.lissaj1),
						lissaj3: calcLissajPassRates(lissajPassRates.group0.lissaj2)
					},
					group1 : {
						lissaj1: calcLissajPassRates(lissajPassRates.group1.lissaj0),
						lissaj2: calcLissajPassRates(lissajPassRates.group1.lissaj1),
						lissaj3: calcLissajPassRates(lissajPassRates.group1.lissaj2)
					},
					group2 : {
						lissaj1: calcLissajPassRates(lissajPassRates.group2.lissaj0),
						lissaj2: calcLissajPassRates(lissajPassRates.group2.lissaj1),
						lissaj3: calcLissajPassRates(lissajPassRates.group2.lissaj2)
					},
					group3 : {
						lissaj1: calcLissajPassRates(lissajPassRates.group3.lissaj0),
						lissaj2: calcLissajPassRates(lissajPassRates.group3.lissaj1),
						lissaj3: calcLissajPassRates(lissajPassRates.group3.lissaj2)
					},
					group4 : {
						lissaj1: calcLissajPassRates(lissajPassRates.group4.lissaj0),
						lissaj2: calcLissajPassRates(lissajPassRates.group4.lissaj1),
						lissaj3: calcLissajPassRates(lissajPassRates.group4.lissaj2)
					}
				}
			};
			
			resolve(
				results
			);

			//TODO: need to add a reject case here in case the get return fails
		}
	});
}

function getUserTestMetrics(){

	return new Promise(function(resolve, reject){

		var nback0PassRate;
		var nback1PassRate;
		var nback2PassRate;
		var nback3PassRate;

		var nback0Times = [];
		var nback1Times = [];
		var nback2Times = [];
		var nback3Times = [];

		var userId = sessionStorage.getItem('vwmUserId');

		database.ref('vwm_participants/' + userId).once('value').then(function(snapUser) {
				
			var nback0Passes = nback1Passes = nback2Passes = nback3Passes= 0;
			snapUser.child('nback_0').forEach(function(snapTest){
				var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback0Passes++;
				var curTestTime = parseFloat(snapTest.child('time_taken').val());
					if(!isNaN(curTestTime)) nback0Times.push(curTestTime);
			});
			snapUser.child('nback_1').forEach(function(snapTest){
				var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback1Passes++;
				var curTestTime = parseFloat(snapTest.child('time_taken').val());
					if(!isNaN(curTestTime)) nback1Times.push(curTestTime);
			});
			snapUser.child('nback_2').forEach(function(snapTest){
				var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback2Passes++;
				var curTestTime = parseFloat(snapTest.child('time_taken').val());
					if(!isNaN(curTestTime)) nback2Times.push(curTestTime);
			});
			snapUser.child('nback_3').forEach(function(snapTest){
				var curTestResult = snapTest.child('test_result').val();
					if(curTestResult === 'Pass')
						nback3Passes++;
				var curTestTime = parseFloat(snapTest.child('time_taken').val());
					if(!isNaN(curTestTime)) nback3Times.push(curTestTime);
			});

			nback0PassRate = (nback0Passes/25)*100;
			nback1PassRate = (nback1Passes/25)*100;
			nback2PassRate = (nback2Passes/25)*100;
			nback3PassRate = (nback3Passes/25)*100;

			returnResults();
		});

		function pushTargetResult(tagetIndex, result){
			if (result.length > 0) {

				var groupIndex = 'group' + tagetIndex.groupIndex;
				var lissajIndex = 'lissaj' + tagetIndex.lassigIndex;

				if(result === 'Pass')
					lissajPassRates[''+groupIndex+''][''+lissajIndex+''].pass++;
				else
					lissajPassRates[''+groupIndex+''][''+lissajIndex+''].fail++;
			}
		}

		function returnResults(){
			
			//FIXME: total is broken due to 3 having no data
			var calcNbackTimes = {
				nback: function(nbackTimes){ 
					var aveNbackTime = nbackTimes.reduce(function(sum, value) { return sum + value });
					aveNbackTime = parseFloat((aveNbackTime / nbackTimes.length).toFixed(2));
					return aveNbackTime;
				},
				total: function(){
					var aveTotalTime = this.nback(nback0Times) + this.nback(nback1Times) + this.nback(nback2Times) + 0;//this.nback(nback3Times);
					return aveTotalTime;	
				}
			};

			var results = {
				nbackPassRates: {
					nback0: nback0PassRate,
					nback1: nback1PassRate,
					nback2: nback2PassRate,
					nback3: nback3PassRate
				},			
				nbackTimes: {
					nback0: calcNbackTimes.nback(nback0Times),
					nback1: calcNbackTimes.nback(nback1Times),
					nback2: calcNbackTimes.nback(nback2Times),
					nback3: 0, //FIXME: nback 3 is broken due to no data
					total: calcNbackTimes.total()	
				}
			};
			
			resolve(
				results
			);

			//TODO: need to add a reject case here in case the get return fails
		}
	});
}

function getCsvData(){
	return new Promise(function(resolve, reject){

		database.ref('vwm_participants').once('value').then(function(snapshot) {
			var csvData = {
				"vwm_participants" : snapshot.val()
			};
			returnResults(csvData);
		});

		function returnResults(data){
			resolve(
				data
			);
		}
	});		
}