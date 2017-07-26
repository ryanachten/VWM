function download(){
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

	itemsNotFormatted = {
	  "vwm_participants" : {
		    "-Kph88luOFzRoa51y3GK" : {
		      "email" : "test@test.com",
		      "name" : "ryan",
		      "nback_0" : {
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
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "0.966"
		        },
		        "test03" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "0.972"
		        },
		        "test04" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "0.436"
		        },
		        "test05" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "0.067"
		        },
		        "test06" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Fail",
		          "time_taken" : "0.494"
		        },
		        "test07" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Fail",
		          "time_taken" : "1946.422"
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
		      },
		      "nback_1" : {
		        "test01" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test02" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test03" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test04" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test05" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test06" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test07" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test08" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test09" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test10" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test11" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test12" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test13" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test14" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test15" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test16" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test17" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test18" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test19" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test20" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test21" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test22" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test23" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test24" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test25" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        }
		      },
		      "nback_2" : {
		        "test01" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test02" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test03" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test04" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test05" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test06" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test07" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test08" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test09" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test10" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test11" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test12" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test13" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test14" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test15" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test16" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test17" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test18" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test19" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test20" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test21" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test22" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test23" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test24" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test25" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        }
		      },
		      "nback_3" : {
		        "test01" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test02" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test03" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test04" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test05" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test06" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test07" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test08" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test09" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test10" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test11" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test12" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test13" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test14" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test15" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test16" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test17" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test18" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test19" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test20" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test21" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test22" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test23" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test24" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test25" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        }
		      }
		    },
		    "-Kpl5soRXsLShowOF_3r" : {
		      "email" : "test1@test1.com",
		      "name" : "test1",
		      "nback_0" : {
		        "test01" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "1.240"
		        },
		        "test02" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Fail",
		          "time_taken" : "0.782"
		        },
		        "test03" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "20.291"
		        },
		        "test04" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Fail",
		          "time_taken" : "14.126"
		        },
		        "test05" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "14.773"
		        },
		        "test06" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "11.246"
		        },
		        "test07" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "12.803"
		        },
		        "test08" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "15.830"
		        },
		        "test09" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "14.255"
		        },
		        "test10" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Fail",
		          "time_taken" : "12.905"
		        },
		        "test11" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "15.250"
		        },
		        "test12" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "22.384"
		        },
		        "test13" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "12.777"
		        },
		        "test14" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Fail",
		          "time_taken" : "23.718"
		        },
		        "test15" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "15.371"
		        },
		        "test16" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "17.904"
		        },
		        "test17" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "17.006"
		        },
		        "test18" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.406"
		        },
		        "test19" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Fail",
		          "time_taken" : "17.495"
		        },
		        "test20" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "15.557"
		        },
		        "test21" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Fail",
		          "time_taken" : "6.907"
		        },
		        "test22" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "11.875"
		        },
		        "test23" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Fail",
		          "time_taken" : "20.807"
		        },
		        "test24" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "17.763"
		        },
		        "test25" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "6.410"
		        }
		      },
		      "nback_1" : {
		        "test01" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "24.899"
		        },
		        "test02" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "26.417"
		        },
		        "test03" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Fail",
		          "time_taken" : "18.381"
		        },
		        "test04" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "23.387"
		        },
		        "test05" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "46.680"
		        },
		        "test06" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "15.552"
		        },
		        "test07" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "49.256"
		        },
		        "test08" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "22.123"
		        },
		        "test09" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Fail",
		          "time_taken" : "27.600"
		        },
		        "test10" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "21.565"
		        },
		        "test11" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.482"
		        },
		        "test12" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "34.523"
		        },
		        "test13" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "19.695"
		        },
		        "test14" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "16.726"
		        },
		        "test15" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "31.887"
		        },
		        "test16" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "30.313"
		        },
		        "test17" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "31.912"
		        },
		        "test18" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "31.147"
		        },
		        "test19" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "11.044"
		        },
		        "test20" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.330"
		        },
		        "test21" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.751"
		        },
		        "test22" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "12.914"
		        },
		        "test23" : {
		          "figure_clicked" : "2",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Pass",
		          "time_taken" : "12.478"
		        },
		        "test24" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 2
		          },
		          "test_result" : "Fail",
		          "time_taken" : "23.690"
		        },
		        "test25" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "5.448"
		        }
		      },
		      "nback_2" : {
		        "test01" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 2,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "17.724"
		        },
		        "test02" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 1,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.644"
		        },
		        "test03" : {
		          "figure_clicked" : "1",
		          "target_figure" : {
		            "groupIndex" : 0,
		            "lassigIndex" : 1
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.631"
		        },
		        "test04" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 4,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "18.758"
		        },
		        "test05" : {
		          "figure_clicked" : "0",
		          "target_figure" : {
		            "groupIndex" : 3,
		            "lassigIndex" : 0
		          },
		          "test_result" : "Pass",
		          "time_taken" : "34.845"
		        },
		        "test06" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test07" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test08" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test09" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test10" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test11" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test12" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test13" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test14" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test15" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test16" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test17" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test18" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test19" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test20" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test21" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test22" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test23" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test24" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test25" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        }
		      },
		      "nback_3" : {
		        "test01" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test02" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test03" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test04" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test05" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test06" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test07" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test08" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test09" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test10" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test11" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test12" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test13" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test14" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test15" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test16" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test17" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test18" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test19" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test20" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test21" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test22" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test23" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test24" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        },
		        "test25" : {
		          "figure_clicked" : "",
		          "target_figure" : "",
		          "test_result" : "",
		          "time_taken" : ""
		        }
		      }
		    }
  		}

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

	var fileTitle = 'results'; // or 'my-unique-title'

	exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
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