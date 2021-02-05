var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
	if (xhr.status !== 200) {
		return;
	}

	var data = JSON.parse(xhr.responseText);

	console.log(data);
});

xhr.open('GET', 'http://www.omdbapi.com/?t=Frozen');

xhr.send();

// some code 