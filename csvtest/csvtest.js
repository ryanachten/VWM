function download(){
	var headers = {
			test_index: 'Test Index',
			figure_clicked: 'Figure Clicked',
			target_figure: 'Target Figure',
			test_result: 'Test Result', // remove commas to avoid errors
			time_taken: "Time Taken (sec)"
			
	};

	itemsNotFormatted = {
		  // "nback_0" : {
		    "test01" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Fail",
		      "time_taken" : "NaN"
		    },
		    "test02" : {
		      "figure_clicked" : "2",
		      "target_figure" : {
		        "groupIndex" : 4,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.837"
		    },
		    "test03" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Fail",
		      "time_taken" : "1.353"
		    },
		    "test04" : {
		      "figure_clicked" : "2",
		      "target_figure" : {
		        "groupIndex" : 2,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.003"
		    },
		    "test05" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 0,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.394"
		    },
		    "test06" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.793"
		    },
		    "test07" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 4,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.098"
		    },
		    "test08" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.038"
		    },
		    "test09" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 4,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.355"
		    },
		    "test10" : {
		      "figure_clicked" : "2",
		      "target_figure" : {
		        "groupIndex" : 0,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.152"
		    },
		    "test11" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.320"
		    },
		    "test12" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 0,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.076"
		    },
		    "test13" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 4,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.468"
		    },
		    "test14" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 2,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.669"
		    },
		    "test15" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.028"
		    },
		    "test16" : {
		      "figure_clicked" : "2",
		      "target_figure" : {
		        "groupIndex" : 2,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.073"
		    },
		    "test17" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 1,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.100"
		    },
		    "test18" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 0,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.160"
		    },
		    "test19" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 2,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.031"
		    },
		    "test20" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 0,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.101"
		    },
		    "test21" : {
		      "figure_clicked" : "2",
		      "target_figure" : {
		        "groupIndex" : 3,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.363"
		    },
		    "test22" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 2,
		        "lassigIndex" : 1
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.010"
		    },
		    "test23" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 3,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Pass",
		      "time_taken" : "0.072"
		    },
		    "test24" : {
		      "figure_clicked" : "1",
		      "target_figure" : {
		        "groupIndex" : 2,
		        "lassigIndex" : 0
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.234"
		    },
		    "test25" : {
		      "figure_clicked" : "0",
		      "target_figure" : {
		        "groupIndex" : 0,
		        "lassigIndex" : 2
		      },
		      "test_result" : "Fail",
		      "time_taken" : "0.419"
		    }
		  };

	// 	"test03" : {
	// 		 "figure_clicked" : "1",
	// 		 "target_figure" : {
	// 			 "groupIndex" : 1,
	// 			 "lassigIndex" : 0
	// 		 },
	// 		 "test_result" : "Fail",
	// 		 "time_taken" : "NaN"
	// 	},
	// 	"test02" : {
	// 		 "figure_clicked" : "1",
	// 		 "target_figure" : {
	// 			 "groupIndex" : 1,
	// 			 "lassigIndex" : 0
	// 		 },
	// 		 "test_result" : "Fail",
	// 		 "time_taken" : "NaN"
	// 	}
	// };

	var itemsFormatted = [];
	
	 $.each(itemsNotFormatted, function(testName,testStats) { //key val pair
		console.log('itemsNotFormatted.keys: ' + testStats.figure_clicked);
		itemsFormatted.push({
			test_index: testName,
			target_figure: (testStats.target_figure.groupIndex + ':' + testStats.target_figure.lassigIndex),
			figure_clicked: testStats.figure_clicked,
			test_result: testStats.test_result,
			time_taken: testStats.time_taken
		});
	});
	

	var fileTitle = 'results'; // or 'my-unique-title'

	exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}


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