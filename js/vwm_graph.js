function getData(){
	var graphTestData = getTestMetrics();
	graphTestData.then(function(results){
		// console.log('nback0Times: ' + results.nback0Time + 'sec');
		// console.log('nback1Times: ' + results.nback1Time + 'sec');
		// console.log('nback2Times: ' + results.nback2Time + 'sec');
		// console.log('nback3Times: ' + results.nback3Time + 'sec');
		drawNbackPassRateGraph(results);
		drawTestTimeAveGraph(results);
		drawLissajPassRateGraph(results);
	}); //TODO: need to add a catch case here in case the get return fails
}
getData();

function drawNbackPassRateGraph(results){
	var dataset = [
		{label: '0 Back', count: results.nbackPassRates.nback0},
		{label: '1 Back', count: results.nbackPassRates.nback1},
		{label: '2 Back', count: results.nbackPassRates.nback2},
		{label: '3 Back', count: results.nbackPassRates.nback3}
	];

	var width = 360;
	var height = 360;
	var donutWidth = 75;
	var radius = Math.min(width, height) /2;
	var color = d3.scaleOrdinal(d3.schemeCategory20b);
	var legendRectSize = 18;
	var legendSpacing = 4;

	var svg = d3.select('#chart')
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
			tooltip.select('.count').html(3); //TODO need to pull number of participants via getData
			tooltip.select('.percent').html(d.data.count + '%');
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
			var horz = -2 * legendRectSize;
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
			.text(function(d){
				return d;
			});

	var tooltip = d3.selectAll('#chart')
		.append('div')
		.attr('class', 'tooltip');

		tooltip.append('div')
			.attr('class', 'label');

		tooltip.append('div')
			.attr('class', 'count');

		tooltip.append('div')
			.attr('class', 'percent');
}

function drawTestTimeAveGraph(results){
	var dataset = [
		{label: '0 Back', count: results.nbackTimes.nback0},
		{label: '1 Back', count: results.nbackTimes.nback1},
		{label: '2 Back', count: results.nbackTimes.nback2},
		{label: '3 Back', count: results.nbackTimes.nback3}
	];

	var width = 360;
	var height = 360;
	var donutWidth = 75;
	var radius = Math.min(width, height) /2;
	var color = d3.scaleOrdinal(d3.schemeCategory20b);
	var legendRectSize = 18;
	var legendSpacing = 4;

	var svg = d3.select('#chart')
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
			tooltip.select('.count').html(3); //TODO need to pull number of participants via getData
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
			var horz = -2 * legendRectSize;
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
			.text(function(d){
				return d;
			});

	var tooltip = d3.selectAll('#chart')
		.append('div')
		.attr('class', 'tooltip');

		tooltip.append('div')
			.attr('class', 'label');

		tooltip.append('div')
			.attr('class', 'count');

		tooltip.append('div')
			.attr('class', 'percent');
}

function drawLissajPassRateGraph(results){

	/*
		var svg = d3.select('#chart')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate('+ (width/2) + 
								',' + (height/2) +')');
	*/
	// d3.select('#chart').append('svg');

	var svg = d3.select("#lissajPassGraph"),
			margin = {top: 20, right: 20, bottom: 30, left: 40},
			width = +svg.attr("width") - margin.left - margin.right,
			height = +svg.attr("height") - margin.top - margin.bottom,
			g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");



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
		]
		// var dataset = [
		// 	{label: '0 Back', count: results.nbackPassRates.nback0},
		// 	{label: '1 Back', count: results.nbackPassRates.nback1},
		// 	{label: '2 Back', count: results.nbackPassRates.nback2},
		// 	{label: '3 Back', count: results.nbackPassRates.nback3}
		// ];
		
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
				.text("Population");

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
	// });

}