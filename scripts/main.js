var encarray;

window.onload = function () {
	var string = '';
	
	// Split based on locations
	encarray = encdata.split('---');
	// Remove empty first element
	if (encarray[0].length == 0) encarray.shift();
	
	for (var i = 0; i < encarray.length; i++) {
		// Split by line breaks so every child element contain loaction name and Pokemon names
		// then trim the elements
		// then filter empty elements out
		encarray[i] = encarray[i].split('\n').map((x) => x.trim()).filter((x) => x.length > 0);
		
		// Remove duplicates
		var uniq = [];
		for (var j = 0; j < encarray[i].length; j++) {
			if (!uniq.includes(encarray[i][j])) uniq.push(encarray[i][j]);
		}
		encarray[i] = uniq;
		
		// Add location name
		string += `<table class="location"><tr><th>` + encarray[i][0] + `</th></tr><tr><td>`;
		// Add Pokemon names
		for (var j = 1; j < encarray[i].length; j++) {
			var modified = encarray[i][j].toLowerCase().replace("'", "").replace("-", "").replace(" ", "");
			if (encarray[i][j] != 'xxx') string += `<div class="pokemon"><img src="sprites/` + modified + `.png"><br />` + encarray[i][j] + `</div>`;
		}
		// Close table
		string += `</td></tr></table>`;
	}
	
	document.getElementById('container').innerHTML = string;
}