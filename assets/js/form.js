$(document).ready(function(){

	$("#ss-form").submit(function(){

		$("#ss-form").fadeOut("slow");

		setTimeout(function(){    

			$("#confirm").fadeIn("slow");
			
		},500); 

	});
});