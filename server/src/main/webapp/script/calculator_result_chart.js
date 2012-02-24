require([
				 // Require the basic chart class
				"dojox/charting/Chart",

				// Require the theme of our choosing
				"dojox/charting/themes/Claro",
				
				// Charting plugins: 

				// 	We want to plot Lines 
				"dojox/charting/plot2d/Lines",

				// Load the Legend, Tooltip, and Magnify classes
				"dojox/charting/widget/Legend",
				"dojox/charting/action2d/Tooltip",
				"dojox/charting/action2d/Magnify",
				
				//	We want to use Markers
				"dojox/charting/plot2d/Markers",

				//	We'll use default x/y axes
				"dojox/charting/axis2d/Default",

				// Wait until the DOM is ready
				"dojo/domReady!"
			], function(Chart, theme, LinesPlot, Legend, Tooltip, Magnify) {
				
				// Define the data
				var chartData = [500000, 485000, 415000, 350000, 311000, 285000, 200000, 120000, 100000, 73000, 20000, 0];
				
				// Create the chart within it's "holding" node
				var chart = new Chart("chartNode");

				// Set the theme
				chart.setTheme(theme);

				// Add the only/default plot 
				chart.addPlot("default", {
					type: LinesPlot,
					markers: true
				});
				
				// Add axes
				chart.addAxis("x");
				chart.addAxis("y", { min: 0, max: 550000, vertical: true, fixLower: "major", fixUpper: "major" });

				// Add the series of data
				chart.addSeries("Nedbetaling av lån",chartData);
				
				// Create the tooltip
				var tip = new Tooltip(chart,"default");
				
				// Create the magnifier
				var mag = new Magnify(chart,"default");
				
				// Render the chart!
				chart.render();
				
				// Create the legend
				var legend = new Legend({ chart: chart }, "legend");
			});