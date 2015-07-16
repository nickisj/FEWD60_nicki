document.getElementById("buttonOne").onmouseover = changeSize;
document.getElementById("buttonOne").onmouseout = correctSize;

//change color of button to yellow and green when hover over.
function changeSize(){
	document.getElementById("buttonOne").setAttribute("class","changeSize");
	console.log("test");
}

//reset color of button when mouse is off.

function correctSize(){
	document.getElementById("buttonOne").removeAttribute("class", "changeSize");
	console.log('something');
}

//blue-steel - change font size 