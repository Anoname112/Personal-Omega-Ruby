const duplicate = false;
var encarray;

window.onload = function () {
	var string = '';
	
	// Split based on locations
	encarray = encdata.split('---');
	// Remove first element, if it is empty string
	if (encarray[0].trim().length == 0) encarray.shift();
	
	for (var i = 0; i < encarray.length; i++) {
		// Split by line breaks so every child element contain loaction name and Pokemon names
		// then trim the elements
		// then filter empty elements out
		encarray[i] = encarray[i].split('\n').map((x) => x.trim()).filter((x) => x.length > 0);
		
		// Remove duplicates
		if (!duplicate) {
			var uniq = [];
			for (var j = 0; j < encarray[i].length; j++) {
				if (!uniq.includes(encarray[i][j])) uniq.push(encarray[i][j]);
			}
			encarray[i] = uniq;
		}
		
		// Location name
		string += `<table class="location"><tr><th>` + encarray[i][0] + `</th></tr><tr><td>`;
		// Pokemon names
		for (var j = 1; j < encarray[i].length; j++) {
			var modified = encarray[i][j].toLowerCase().replace("'", "").replace("-", "").replace(" ", "");
			string += `<div class="sprite"><img src="sprites/` + modified + `.png"><div class="name">` + encarray[i][j] + `</div></div>`;
		}
		// Close table
		string += `</td></tr></table>`;
	}
	
	document.getElementById('container').innerHTML = string;
}