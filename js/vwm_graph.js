function getData(){
	var graphTestData = getTestMetrics();
	graphTestData.then(function(results){
		drawNbackPassRateGraph(results);
		drawTestTimeAveGraph(results);
		drawLissajPassRateGraph(results);
	}); //TODO: need to add a catch case here in case the get return fails
}
getData();

function drawNbackPassRateGraph(results){

	drawGragh(results.nbackPassRates.nback0, '#back0PassGraph');
	drawGragh(results.nbackPassRates.nback1, '#back1PassGraph');
	drawGragh(results.nbackPassRates.nback2, '#back2PassGraph');
	drawGragh(results.nbackPassRates.nback3, '#back3PassGraph');

	function drawGragh(passrate, container){
		var containerWidth = $(container).width();
		var containerHeight = $(container).height();

		var width = containerWidth,
			height = containerHeight,
			twoPi = 2 * Math.PI;

		var dataset = {
						  progress: passrate,
						  total: 100
					  };
		 
		var arc = d3.arc()
			.innerRadius(Math.min(width, height) /4)
			.outerRadius(Math.min(width, height) /2)
			.startAngle(0);
		 
		var svg = d3.select(container).append("svg")
			.attr("width", width)
			.attr("height", height)
		  .append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

		var meter = svg.append("g")
			.attr("class", "season-progress");
		 
		var background = meter.append("path")
			.datum({endAngle: twoPi})
			.style("fill", "#ddd")
			.attr("d", arc);
		 
		var foreground = meter.append("path")
			.datum({endAngle:0})
			.style("fill", "orange")
			.attr("class", "foreground")
			.attr("d", arc);
		 
		  foreground.transition()
			.duration(1000)
			// .easeLinear()
			.attrTween("d", function(d) {
					   var interpolate = d3.interpolate(d.endAngle, twoPi * dataset["progress"] / dataset["total"])
					   return function(t) {
						  d.endAngle = interpolate(t);
						  return arc(d);
					   }  
					});

		var text =  meter.append("text")
			.attr("text-anchor", "middle")
			.attr("dy", ".35em")
			.attr("font-size", "24")
			.text(dataset["progress"]);
	}
}

function drawLissajPassRateGraph(results){

	var containerWidth = $('#lissajPassGraph').width();
	var containerHeight = $('#lissajPassGraph').height();

	$('#lissajPassGraphSvg').attr('width', containerWidth);//width(containerWidth);
	$('#lissajPassGraphSvg').attr('height', containerHeight);//height(containerHeight);

	var svg = d3.select("#lissajPassGraphSvg"),
			margin = {top: 20, right: 20, bottom: 30, left: 40},
			width = svg.attr("width") - margin.left - margin.right,
			height = svg.attr("height"),
			g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// var width = svg.attr("width") - margin.left - margin.right;
	// var height = svg.attr("height") - margin.top - margin.bottom;

	var x0 = d3.scaleBand()
			.rangeRound([0, width])
			.paddingInner(0.1);

	var x1 = d3.scaleBand()
			.padding(0.05);

	var y = d3.scaleLinear()
			.rangeRound([height, 0]);

	var z = d3.scaleOrdinal()
			.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var data = [
		{'group': 0, 'lissaj0': results.lissajPasses.group0.lissaj1,
					 'lissaj1': results.lissajPasses.group0.lissaj2, 
					 'lissaj2': results.lissajPasses.group0.lissaj3},

		{'group': 1, 'lissaj0': results.lissajPasses.group1.lissaj1,
					 'lissaj1': results.lissajPasses.group1.lissaj2, 
					 'lissaj2': results.lissajPasses.group1.lissaj3},

		{'group': 2, 'lissaj0': results.lissajPasses.group2.lissaj1,
					 'lissaj1': results.lissajPasses.group2.lissaj2, 
					 'lissaj2': results.lissajPasses.group2.lissaj3},

		{'group': 3, 'lissaj0': results.lissajPasses.group3.lissaj1,
					 'lissaj1': results.lissajPasses.group3.lissaj2, 
					 'lissaj2': results.lissajPasses.group3.lissaj3},

		{'group': 4, 'lissaj0': results.lissajPasses.group4.lissaj1,
					 'lissaj1': results.lissajPasses.group4.lissaj2, 
					 'lissaj2': results.lissajPasses.group4.lissaj3}
	];
	
	var keys = ["lissaj0", "lissaj1", "lissaj2"];

	x0.domain(data.map(function(d) { return d.group; }));
	x1.domain(keys).rangeRound([0, x0.bandwidth()]);
	y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); })]).nice();

	g.append("g")
		.selectAll("g")
		.data(data)
		.enter().append("g")
			.attr("transform", function(d) { return "translate(" + x0(d.group) + ",0)"; })
		.selectAll("rect")
		.data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
		.enter().append("rect")
			.attr("x", function(d) { return x1(d.key); })
			.attr("y", function(d) { return y(d.value); })
			.attr("width", x1.bandwidth())
			.attr("height", function(d) { return height - y(d.value); })
			.attr("fill", function(d) { return z(d.key); });

	g.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x0));

	g.append("g")
			.attr("class", "axis")
			.call(d3.axisLeft(y).ticks(null, "s"))
		.append("text")
			.attr("x", 2)
			.attr("y", y(y.ticks().pop()) + 0.5)
			.attr("dy", "0.32em")
			.attr("fill", "#000")
			.attr("font-weight", "bold")
			.attr("text-anchor", "start")
			.text("Percentage Passed");

	var legend = g.append("g")
			.attr("font-family", "sans-serif")
			.attr("font-size", 10)
			.attr("text-anchor", "end")
		.selectAll("g")
		.data(keys.slice().reverse())
		.enter().append("g")
			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	legend.append("rect")
			.attr("x", width - 19)
			.attr("width", 19)
			.attr("height", 19)
			.attr("fill", z);

	legend.append("text")
			.attr("x", width - 24)
			.attr("y", 9.5)
			.attr("dy", "0.32em")
			.text(function(d) { return d; });
}