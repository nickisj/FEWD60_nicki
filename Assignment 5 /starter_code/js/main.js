
 $(document).ready(function(){ 

//Set function to change based on event.

$("#submit-btn").click(function(){

	//event.preventDefault() - prevent the triggering of default action of an event, which is the default background-image. 

	event.preventDefault();

	//set value based on input 

	var city = $("#city-type").val().toLowerCase();

//if the input is NYC, New York City or New York

if (city == "nyc" || city == "new york city" || city == "new york"){
	$('body').css("background-image","url(images/nyc.jpg)");
}

//if the input is SF, Bay Area or San Francisco

else if (city == "sf" || city == "bay area" || city == "san francisco"){
	$('body').css("background-image","url(images/sf.jpg)");
}

//if the input is LA, LAX or Los Angeles

else if (city == "la" || city == "lax" || city == "los angeles"){
	$('body').css("background-image","url(images/la.jpg)");
}

//if the input is Austin or ATX

else if (city == "austin" || city == "atx" ){
	$('body').css("background-image","url(images/austin.jpg)");
}

//if the input is SYD or Sydney

else if (city == "sydney" || city == "syd"){
	$('body').css("background-image","url(images/sydney.jpg)");
}
});

});	


