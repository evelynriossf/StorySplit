$(document).ready(function(){
	$('.submit').click(function(e){
		e.preventDefault();
		var fourPM = {};
		var fivePM = {};
		var sixPM = {};
		$('.form-group').each(function(){
			if ($(this).find('[type=checkbox]').is(':checked')) {
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
				var reporter = $(this).find('.reporter').val();
				var slug = $(this).find('.slug').val();
				if (tempArray == "4only") {
					fourPM[reporter] = slug;					
				} else if (tempArray == "5only") {
					fivePM[reporter] = slug;		
				} else if (tempArray == "6only") {
					sixPM[reporter] = slug;	
				} else {
					var computerChoice = Math.random();
					console.log(computerChoice);
					if (computerChoice < 0.34) {
						fourPM[reporter] = slug;
					} else if (computerChoice <= 0.67) {
						fivePM[reporter] = slug;	
					} else {
						sixPM[reporter] = slug;
					}
				}
			}
		});
		console.log(fourPM);
		console.log(fivePM);
		console.log(sixPM);
	});
});
