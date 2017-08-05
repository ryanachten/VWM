function download(){
	var dateTime = new Date;
	var curYear = dateTime.getUTCFullYear();
	var curMonth = dateTime.getUTCMonth();
	var curDay = dateTime.getUTCDate();
	var curHour = dateTime.getUTCHours();
	var curMin = dateTime.getUTCMinutes();
	
	var curDateTime = 'VWM Results_' + curDay + '-' + curMonth + '-' + curYear + '_' + curHour + '-' + curMin;
	console.log(curDateTime);

	var fileTitle = curDateTime;

	var headers = {
			participant_id: 'Participant ID',
			name: 'Participant Name',
			email: 'Participant Email',
			nback_index: 'N-back Index',
			test_index: 'Test Index',
			target_figure: 'Target Figure',
			figure_clicked: 'Figure Clicked',
			test_result: 'Test Result', // remove commas to avoid errors
			time_taken: "Time Taken (sec)",
			percent_passed: '% Passed'
			
	};

	var itemsFormatted = [];

	var nbackaverages = {
		nback0PassRates: [],
		nback1PassRates: [],
		nback2PassRates: [],
		nback3PassRates: [],

		nback0Ave: function(){
			var nback0Ave = this.nback0PassRates.reduce(function(sum, value) { return sum + value; });
				nback0Ave /= this.nback0PassRates.length;
				console.log('nback0 Average rate: ' + nback0Ave + '%');
		},

		nback1Ave: function(){
			var nback1Ave = this.nback1PassRates.reduce(function(sum, value) { return sum + value; });
			nback1Ave /= this.nback1PassRates.length;
			console.log('nback1 Average rate: ' + nback1Ave + '%');
		},

		nback2Ave: function(){
			var nback2Ave = this.nback2PassRates.reduce(function(sum, value) { return sum + value; });
			nback2Ave /= this.nback2PassRates.length;
			console.log('nback2 Average rate: ' + nback2Ave + '%');
		},

		nback3Ave: function(){
			var nback3Ave = this.nback3PassRates.reduce(function(sum, value) { return sum + value; });
			nback3Ave /= this.nback3PassRates.length;
			console.log('nback3 Average rate: ' + nback3Ave + '%');
		}
	};

	var csvData = getCsvData();
	csvData.then(function(results){
		itemsNotFormatted = results;
		console.log(itemsNotFormatted);
		$.each(itemsNotFormatted.vwm_participants, function(userId,userData) {
		 	itemsFormatted.push({
	 			name: ' '
			});	
		 	itemsFormatted.push({
		 		participant_id: userId,
	 			name: userData.name,
	 			email: userData.email
			});

			addNbackDataToCsv('0 Back', userData.nback_0);
			addNbackDataToCsv('1 Back', userData.nback_1);
			addNbackDataToCsv('2 Back', userData.nback_2);
			addNbackDataToCsv('3 Back', userData.nback_3);

		 	function addNbackDataToCsv(nbackName, nbackData){
		 		itemsFormatted.push({
		 			participant_id: ' ',
		 			name: ' ',
		 			email: ' ',
		 			nback_index: nbackName
		 		});

		 		var passedNbackResults = 0;

				$.each(nbackData, function(testName,testStats) { //key val pair
				 	if(testStats.target_figure.groupIndex !== undefined || testStats.target_figure.groupIndex !== undefined){
				 		var targetFigCoords = (testStats.target_figure.groupIndex + ':' + testStats.target_figure.lassigIndex);
				 	}else{
				 		targetFigCoords = '';
				 	}
				 	if(testStats.test_result === 'Pass'){
				 		passedNbackResults++;
				 	}

					itemsFormatted.push({
						participant_id: ' ',
						name: ' ',
			 			email: ' ',
						nback_index: ' ',
						test_index: testName,
						target_figure: targetFigCoords,
						figure_clicked: testStats.figure_clicked,
						test_result: testStats.test_result,
						time_taken: testStats.time_taken
					});
				});

				var percentPassed = ((passedNbackResults/25) *100).toFixed(2);

				// if(nbackName){

				switch(nbackName){

					case "0 Back":
						nbackaverages.nback0PassRates.push(parseInt(percentPassed));
						break;
					case "1 Back":
						nbackaverages.nback1PassRates.push(parseInt(percentPassed));
						break;
					case "2 Back":
						nbackaverages.nback2PassRates.push(parseInt(percentPassed));
						break;
					case "3 Back":
						nbackaverages.nback3PassRates.push(parseInt(percentPassed));
						break;
					default:
				}


				itemsFormatted.push({
					participant_id: ' ',
					name: ' ',
		 			email: ' ',
					nback_index: ' ',
					test_index: ' ',
					target_figure: ' ',
					figure_clicked: ' ',
					test_result: ' ',
					time_taken: ' ',
					percent_passed: percentPassed
				});
				
			}
		});

		nbackaverages.nback0Ave();
		nbackaverages.nback1Ave();
		nbackaverages.nback2Ave();
		nbackaverages.nback3Ave();

		exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
	});	
}


//exportCSVFile reference: https://medium.com/@danny.pule/export-json-to-csv-file-using-javascript-a0b7bc5b00d2

function exportCSVFile(headers, items, fileTitle) {
		if (headers) {
			items.unshift(headers);
		}

		// Convert Object to JSON
		var jsonObject = JSON.stringify(items);

		var csv = this.convertToCSV(jsonObject);

		var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

		var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		if (navigator.msSaveBlob) { // IE 10+
				navigator.msSaveBlob(blob, exportedFilenmae);
		} else {
				var link = document.createElement("a");
				if (link.download !== undefined) { // feature detection
						// Browsers that support HTML5 download attribute
						var url = URL.createObjectURL(blob);
						link.setAttribute("href", url);
						link.setAttribute("download", exportedFilenmae);
						link.style.visibility = 'hidden';
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
				}
		}
}


function convertToCSV(objArray) {
		var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
		var str = '';

		for (var i = 0; i < array.length; i++) {
				var line = '';
				for (var index in array[i]) {
						if (line != '') line += ','

						line += array[i][index];
				}

				str += line + '\r\n';
		}

		return str;
}