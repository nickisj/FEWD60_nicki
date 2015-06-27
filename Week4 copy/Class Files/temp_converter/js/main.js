var tempC = 25;

var tempF = tempC * 9 / 5 + 32;

var threshold = 70;

if (tempF < threshold) {
	document.body.setAttribute("style" , "background: gray;")
	document.write(tempF);

} else {
	document.body.setAttribute("style" , "background: yellow;")
	document.write(tempF)
