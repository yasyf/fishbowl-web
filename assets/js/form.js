$(document).ready(function(){

	$("#confirm").hide();

	$("#ss-form").submit(function(){

		$("#ss-form").fadeOut("slow");

		setTimeout(function(){    

			$("#confirm").fadeIn("slow");
			
		},500); 

	});
});