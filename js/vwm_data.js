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

	// submitUsername();
}

function submitUsername(){
	var username = { //test -rm
		username: 'Ryan'
	}
	var id = ref.push(username);

	console.log(id.key);

	var test1 = {
		test1: 'fail'
	}

	var idDirect = database.ref('vwm_participants/'+id.key);
	idDirect.push(test1);
}

