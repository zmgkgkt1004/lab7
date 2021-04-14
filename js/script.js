function init(){
//add your javascrip between these two lines of code

	document.getElementById("entrybutton").addEventListener("click", function(){
		var inputText = document.getElementById("entryinput").value
		var output = "Joseph Kim: " + inputText;
		alert(output);
		document.getElementById("textoutput").innerHTML = inputText;
	});
}


window.addEventListener('load', init);