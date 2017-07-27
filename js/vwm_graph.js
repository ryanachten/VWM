function getData(){
	var testTimeAverages = getTestTimeRate();
	testTimeAverages.then(function(results){
		// console.log('nback0Times: ' + results.nback0 + 'sec');
		// console.log('nback1Times: ' + results.nback1 + 'sec');
		// console.log('nback2Times: ' + results.nback2 + 'sec');
		// console.log('nback3Times: ' + results.nback3 + 'sec');
		drawTestTimeAveGraph(results);
	}); //TODO: need to add a catch case here in case the get return fails

	// var nBackPassRateResults = getNbackPassRate();
	// nBackPassRateResults.then(function(results){
	// 	console.log('nback0Passes: ' + results.nback0 + '%');
	// 	console.log('nback1Passes: ' + results.nback1 + '%');
	// 	console.log('nback2Passes: ' + results.nback2 + '%');
	// 	console.log('nback3Passes: ' + results.nback3 + '%');
	// 	drawNbackPassRateGraph(results);
	// }); //TODO: need to add a catch case here in case the get return fails
}
getData();

function drawNbackPassRateGraph(results){
	var dataset = [
		{label: '0 Back', count: results.nback0},
		{label: '1 Back', count: results.nback1},
		{label: '2 Back', count: results.nback2},
		{label: '3 Back', count: results.nback3}
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
		{label: '0 Back', count: results.nback0},
		{label: '1 Back', count: results.nback1},
		{label: '2 Back', count: results.nback2},
		{label: '3 Back', count: results.nback3}
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