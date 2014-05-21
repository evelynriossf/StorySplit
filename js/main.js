$(document).ready(function(){


	$('hits').click(function(e){
		e.preventDefault();
		console.log("success");
		function changeExclusivity(){
			$('.form-group').each(function(){
				var hitsRadios = $(this).find('.hits');
				jQuery.each(hitsRadios, function (){
					if ($(this).is(':checked')) {
						console.log (this);
					}
				});
			// if ($(this).attr('value') == "1hit"){
			// 	$('input[name=foo]').attr('checked', true);
		});
		}
		changeExclusivity();
	});

	$('.submit').click(function(e){
		e.preventDefault();

		$( '.4PMmodal' ).empty();
		$( '.5PMmodal' ).empty();
		$( '.6PMmodal' ).empty();

		var d = new Date();
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		document.getElementById("modalLabel").innerHTML = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear() + " " + days[d.getDay()] + "'s Split:";

		var fourPM = [];
		var fivePM = [];
		var sixPM = [];

		$('.form-group').each(function(){

			var reporter = $(this).find('.reporter').val();
			var slug = $(this).find('.slug').val();
			var tempObject = {};
			tempObject["reporter"] = reporter;
			tempObject["slug"] = slug;
			var lede = $(this).find('[type=checkbox]').is(':checked');
			tempObject["lede"] = lede;

			var exclusivityRadios = $(this).find('.exclusivity');
			var exclusivityValue;

			var hitsRadios = $(this).find('.hits');
			var hitsValue;

			jQuery.each(hitsRadios, function () {
				if ($(this).is(':checked')) {
					hitsValue = $(this).attr('value');
				}
			});
			
			jQuery.each(exclusivityRadios, function () {
				if ($(this).is(':checked')) {
					exclusivityValue = $(this).attr('value');
				}
			});

			function computerChooses() {
				var computerChoice = Math.random();
				if (computerChoice < 0.34) {
					fourPM.push(tempObject);
				} else if (computerChoice <= 0.67) {
					fivePM.push(tempObject);	
				} else {
					sixPM.push(tempObject);
				}
				return computerChoice;
			}

			if (exclusivityValue == "4only") {
				fourPM.push(tempObject);					
			} else if (exclusivityValue == "5only") {
				fivePM.push(tempObject);		
			} else if (exclusivityValue == "6only") {
				sixPM.push(tempObject);
			} else if (hitsValue == "3hits"){
				fourPM.push(tempObject);
				fivePM.push(tempObject);
				sixPM.push(tempObject);
			} else if (hitsValue == "2hits") {				
				var firstResult = computerChooses();
				var secondResult = Math.random();
				if (firstResult < 0.34) {
					if (secondResult < 0.5) {
						fivePM.push(tempObject);
					} else {
						sixPM.push(tempObject);
					}
				} else if (firstResult <= 0.67) {
					if (secondResult < 0.5) {
						fourPM.push(tempObject);
					} else {
						sixPM.push(tempObject);
					}
				} else {
					if (secondResult < 0.5) {
						fourPM.push(tempObject);
					} else {
						fivePM.push(tempObject);
					}
				}
			} else {
				computerChooses();
			}
		});

function sorter(obj1, obj2) {
	return obj2.lede - obj1.lede;
}
fourPM.sort(sorter);
fivePM.sort(sorter);
sixPM.sort(sorter);

function createDiv(obj){
	var storyName = obj.slug;
	var reporterName = obj.reporter;
	var template = Handlebars.compile($("#data-template").html());
	var context = {reporterName: reporterName, storyName: storyName}
	var html    = template(context);
	return html;
}
var arr = [fourPM, fivePM, sixPM];
jQuery.each(arr, function(index, value){
	for (var i = 0; i < value.length; i++) {
		var createdDiv = createDiv(value[i]);
		if (index == 0){
			$('.4PMmodal').append(createdDiv);
		} else if (index == 1){
			$('.5PMmodal').append(createdDiv);
		} else {
			$('.6PMmodal').append(createdDiv);
		}
	}
});

$(function () {
	$(".grid").sortable({
		tolerance: 'pointer',
		revert: 'invalid',
		connectWith: ".connectedSortable",
		forceHelperSize: true,
		dropOnEmpty: true
	});
});

});
});