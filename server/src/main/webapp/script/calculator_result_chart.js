dojo.require("dojox.charting.Chart2D");

dojo.require("dojox.charting.themes.Tom");

var chartData = [500000, 485000, 415000, 350000, 311000, 285000, 200000, 120000, 100000, 73000, 20000, 0];

dojo.ready(

    function () {

		var chart = new dojox.charting.Chart2D("chartNode");

		chart.setTheme(dojox.charting.themes.Tom);

		chart.addPlot( "default", {

		type: "Lines",

		markers: true

		});

		chart.addAxis("x");

		chart.addAxis("y", { min: 0, max: 550000, vertical: true, fixLower: "major", fixUpper: "major" });

		chart.addSeries("Nedbetalingskurve", chartData);

		chart.render();

	}
);