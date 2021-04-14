function init(){
//add your javascrip between these two lines of code

	document.getElementById("entrybutton").addEventListener("click", function()){
		var output = "Joseph Kim: " + document.getElementById("entryinput").value;
		alert(output);
		document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
	}


window.addEventListener('load', init);