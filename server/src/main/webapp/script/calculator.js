/**
 * Created by IntelliJ IDEA.
 * User: Marta
 * Date: 24.02.12
 * Time: 14:05
 * To change this template use File | Settings | File Templates.
 */

require([
		"dojo/ready",
		"dijit/form/HorizontalSlider",
		"dojo/dom", // for inserting value in TextBox example
		"dijit/form/TextBox", // this we only include to make an example with TextBox
		"dojo/parser" // parser because of TextBox decoration
		], function(ready, HorizontalSlider, dom){
			ready(function(){
				function createSlider(slider_id, slider_value_id) {
					var slider = new HorizontalSlider({
						name: slider_id,
						value: 50,
						minimum: 0,
						maximum: 100,
						intermediateChanges: true,
						style: "width:300px;",
						onChange: function(value){
							dom.byId(slider_value_id).innerHTML = value;
						}
					}, slider_id);	
				}
				createSlider("slider1", "sliderValue1");
				createSlider("slider2", "sliderValue2");
			});
		});