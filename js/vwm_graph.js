function getData(){
	var nBackResults = getNbackPassRate();
	nBackResults.then(function(results){
		console.log('nback0Passes: ' + results.nback0 + '%');
		console.log('nback1Passes: ' + results.nback1 + '%');
		console.log('nback2Passes: ' + results.nback2 + '%');
		console.log('nback3Passes: ' + results.nback3 + '%');
		drawNbackPassRateGraph(results);
	}); //TODO: need to add a catch case here in case the get return fails
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
		.style('stroke', color);

	legend.append('text')
		.attr('x', legendRectSize + legendSpacing)
		.attr('y', legendRectSize - legendSpacing)
		.text(function(d){
			return d;
		});
}