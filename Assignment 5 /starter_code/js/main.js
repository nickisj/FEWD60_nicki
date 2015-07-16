//Set variables.
 var city = [ "NYC" , "New York City" , "New York", "SF" , "Bay Area" , "San Francisco" , "LA" , "LAX" , "Los Angeles" , "Austin" , "ATX" , "Sydney" , "SYD"]

//event.preventDefault()

 $( document ).ready(function() {
        console.log( "document loaded" );
//Set background based on entry.

$("city").click(function(){

if (city == "NYC" || "New York City" || "New York") {
	$('#city=type').css("background-image" , "url(../images/nyc.jpg)";
}

else if (city == "SF" || "Bay Area" || "San Francisco"){
	$('#city=type').css("background-image" , "url(../images/sf.jpg)";
}

else if (city == "LA" || "LAX" || "Los Angeles"){
	$('#city=type').css("background-image" , "url(../images/la.jpg)";
}

else if (city == "Austin" || "ATX" ){
	$('#city=type').css("background-image" , "url(../images/austin.jpg)";
}

else (city == "Sydney" || "SYD"){
	$('#city=type').css("background-image" , "url(../images/sydney.jpg)";
}
});


