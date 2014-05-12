$(document).ready(function(){
	$('.submit').click(function(e){
		e.preventDefault();
		var fourPM = [];
		var fivePM = [];
		var sixPM = [];
		$('.form-group').each(function(){
			var reporter = $(this).find('.reporter').val();
			var slug = $(this).find('.slug').val();
			var tempObject = {};
			tempObject[reporter] = slug;
			var lede = $(this).find('[type=checkbox]').is(':checked');
			tempObject["lede"] = lede;
			var $RButtons = $(this).find('.exclusivity');
			var tempArray = new Array();
			var i = 0;
			jQuery.each($RButtons, function () {
				if ($(this).is(':checked')) {
					var value = $(this).attr('value');
					tempArray[i] = value;
					i++;
				}
			});
			if (tempArray == "4only") {
				fourPM.push(tempObject);					
			} else if (tempArray == "5only") {
				fivePM.push(tempObject);		
			} else if (tempArray == "6only") {
				sixPM.push(tempObject);
			} else {
				var computerChoice = Math.random();
				if (computerChoice < 0.34) {
					fourPM.push(tempObject);
				} else if (computerChoice <= 0.67) {
					fivePM.push(tempObject);	
				} else {
					sixPM.push(tempObject);
				}
			}
		});
		function sorter(obj1, obj2) {
			return obj2.lede - obj1.lede;
		}
		fourPM.sort(sorter);
		fivePM.sort(sorter);
		sixPM.sort(sorter);
		console.log(fourPM);
		console.log(fivePM);
		console.log(sixPM);
	});
});
