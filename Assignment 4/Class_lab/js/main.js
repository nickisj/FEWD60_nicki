document.getElementById("buttonOne").onmouseover=changeSize;
document.getElementById("buttonOne").onmouseout=correctSize;

//change color of button to yellow and green when hover over.
function changeSize(){
	document.getElementById("buttonOne").setAttribute("class","changeSize");
}

//reset color of button when mouse is off.

function correctSize(){
	document.getElementById("buttonOne").removeAttribute("class", "changeSize")
}

//blue-steel - change font size 