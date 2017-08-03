var graphColorScheme = ["#CFECEC", "#B9D2D2", "#97ACAC", "#5F6C6C"];

var getUserData = function(){
	var graphData = getUserTestMetrics();
	graphData.then(function(results){
		drawNbackPassRateGraph(results);
		drawTestTimeAveGraph(results);
	}); //TODO: need to add a catch case here in case the get return fails
}

function getAdminData(){
	var graphData = getTotalTestMetrics();
	graphData.then(function(results){
		drawNbackPassRateGraph(results);
		drawTestTimeAveGraph(results);
		drawLissajPassRateGraph(results);
	}); //TODO: need to add a catch case here in case the get return fails
}

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
		var meterWidth = 40;
		var arc = d3.arc()
			.innerRadius(Math.min(width, height) /2 - meterWidth)
			.outerRadius(Math.min(width, height) /2)
			.startAngle(0);
		 
		var svg = d3.select(container).append("svg")
			.attr("width", width)
			.attr("height", height)
		  .append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

		var meter = svg.append("g");
			// .attr("class", "season-progress");
		 
		var background = meter.append("path")
			.datum({endAngle: twoPi})
			.style("fill", "#97ACAC") 
			.attr("d", arc);
		 
		var foreground = meter.append("path")
			.datum({endAngle:0})
			.style("fill", "#CFECEC")
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
			.attr("font-size", "20")
			.attr("font-family", "OpenSans-Regular")
			//     font-family: OpenSans-Regular;
			.text(dataset["progress"] + '%');
	}
}

function drawTestTimeAveGraph(results){
	var dataset = [
		{label: '0 Back', count: results.nbackTimes.nback0},
		{label: '1 Back', count: results.nbackTimes.nback1},
		{label: '2 Back', count: results.nbackTimes.nback2},
		{label: '3 Back', count: results.nbackTimes.nback3}
	];

	var containerWidth = $('#testTimeAveGraph').width();
	var containerHeight = $('#testTimeAveGraph').height();

	var width = containerWidth;
	var height = containerHeight;
	var donutWidth = 75;
	var radius = Math.min(width, height) /2;
	var color = d3.scaleOrdinal(graphColorScheme);
	var legendRectSize = 18;
	var legendSpacing = 4;

	var svg = d3.select('#testTimeAveGraph')
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', 'translate('+ (width/2) + 
							',' + (height/2) +')');

	var arc = d3.arc()
		.innerRadius(radius-donutWidth)
		.outerRadius(radius);

	var pie = d3.pie()
		.value(function(d){
			d.enabled = true;    
			return d.count;
		})
		.sort(null);

	var path = svg.selectAll('path')
		.data(pie(dataset))
		.enter()
		.append('path')
		.attr('d', arc)
		.attr('fill', function(d, i){
			return color(d.data.label);
		})
		.each(function(d){
			this._current = d;
		});

		path.on('mouseover', function(d){
			var total = d3.sum(dataset.map(function(d) {
				return (d.enabled) ? d.count : 0;        // UPDATED
			  }));
			tooltip.select('.label').html(d.data.label);
			tooltip.select('.percent').html(d.data.count + 'sec');
			tooltip.style('display', 'block');
		});

		path.on('mouseout', function(d){
			tooltip.style('display', 'none');
		});

		path.on('mousemove', function(d){
			tooltip.style('top', (d3.event.layerY + 10) + 'px')
			.style('left', (d3.event.layerX + 10) + 'px');
		});

	var legend = svg.selectAll('.legend')
		.data(color.domain())
		.enter()
		.append('g')
		.attr('class', 'legend')
		.attr('transform', function(d, i){
			var height = legendRectSize + legendSpacing;
			var offset = height * color.domain().length /2;
			var horz = -1.5 * legendRectSize;
			var vert = i * height - offset;
			return 'translate(' + horz + ',' + vert + ')';
		});

		legend.append('rect')
			.attr('width', legendRectSize)
			.attr('height', legendRectSize)
			.style('fill', color)
			.style('stroke', color)
			
			.on('click', function(label) {
			  var rect = d3.select(this);
			  var enabled = true;
			  var totalEnabled = d3.sum(dataset.map(function(d) {
				return (d.enabled) ? 1 : 0;
			  }));

			  if (rect.attr('class') === 'disabled') {
				rect.attr('class', '');
			  } else {
				if (totalEnabled < 2) return;
				rect.attr('class', 'disabled');
				enabled = false;
			  }

			  pie.value(function(d) {
				if (d.label === label) d.enabled = enabled;
				return (d.enabled) ? d.count : 0;
			  });

			  path = path.data(pie(dataset));

			  path.transition()
				.duration(750)
				.attrTween('d', function(d) {
				  var interpolate = d3.interpolate(this._current, d);
				  this._current = interpolate(0);
				  return function(t) {
					return arc(interpolate(t));
				  };
				});
			});


		legend.append('text')
			.attr('x', legendRectSize + legendSpacing)
			.attr('y', legendRectSize - legendSpacing)
			.attr("font-family", "sans-serif")
			.attr("font-size", 10)
			.text(function(d){
				return d;
			});

	var tooltip = d3.selectAll('#testTimeAveGraph')
		.append('div')
		.attr('class', 'tooltip');
		
		tooltip.append('div')
			.attr('class', 'label');

		tooltip.append('div')
			.attr('class', 'percent');
}

function drawLissajPassRateGraph(results){

	var containerWidth = $('#lissajPassGraph').width();
	var containerHeight = $('#lissajPassGraph').height();

	$('#lissajPassGraphSvg').attr('width', containerWidth);//width(containerWidth);
	$('#lissajPassGraphSvg').attr('height', containerHeight);//height(containerHeight);

	var svg = d3.select("#lissajPassGraphSvg"),
			margin = {top: 20, right: 20, bottom: 20, left: 20},
			width = svg.attr("width") - margin.left - margin.right,
			height = svg.attr("height") - margin.top - margin.bottom,
			g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var x0 = d3.scaleBand()
			.rangeRound([0, width])
			.paddingInner(0.1);

	var x1 = d3.scaleBand();

	var y = d3.scaleLinear()
			.rangeRound([height, 0]);

	var z = d3.scaleOrdinal()
			.range(graphColorScheme);

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
			.attr("y", function(d) { 
				return y(d.value); })
			.attr("width", x1.bandwidth())
			.attr("height", function(d) { return height - y(d.value); })
			.attr("fill", function(d) { return z(d.key); })
			.on('mouseover', function(d){
				tooltip.select('.index').html(d.key);
				tooltip.select('.value').html(d.value + '%');
				tooltip.style('display', 'block');
			})
			.on('mouseout', function(d){
				tooltip.style('display', 'none');
			})
			.on('mousemove', function(d){
				tooltip.style('top', (d3.event.layerY + 10) + 'px')
				.style('left', (d3.event.layerX + 10) + 'px');
			});

	g.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x0));

	g.append("g")
			.attr("class", "axis")
			.call(d3.axisLeft(y).ticks(null, "s"))
		.append("text")
			// .attr("x", 2)
			.attr("y", y(y.ticks().pop()) + (-10))
			.attr("dy", "0.32em")
			.attr("fill", "#000")
			.attr("font-weight", "bold")
			.attr("text-anchor", "start")
			.text("Percentage Passed");

	var container = d3.select("#lissajPassGraph");
	var legend = svg.append("g")
			.attr("fill", "#000")
			.attr("font-family", "sans-serif")
			.attr("font-size", 10)
			.attr("text-anchor", "end")
			.attr("transform", "translate(" + (-100) + ", 0)")
		.selectAll("g")
		.data(keys.slice())
		.enter().append("g")
			.attr("transform", function(d, i) { return "translate(" + i * 60 + " 0)"; });

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


	// var tooltip = d3.selectAll('#drawLissajPassRateGraph')
	var tooltip = d3.selectAll('#testTimeAveContainer')
		.append('div')
		.attr('class', 'tooltip');

		tooltip.append('div')
			.attr('class', 'index');
		
		tooltip.append('div')
			.attr('class', 'value');

		
}