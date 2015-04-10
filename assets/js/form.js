$(document).ready(function(){

	$("#ss-form").submit(function(){

		$("#ss-form").fadeOut(300, function(){
			$("#confirm").fadeIn(250);
		});

	});

});