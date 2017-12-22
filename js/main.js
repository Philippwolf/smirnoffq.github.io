var isPaused = 0;

function writeText(text, time,i = 0 ,DOMElement) {
	isPaused = 1;
	var textLength = text.length;
	var timePeriod = time;
	
	if (i < textLength) {
		DOMElement.innerHTML += text[i];
		i++;
		setTimeout(function() {
			writeText(text,time ,i , DOMElement)
		}, timePeriod);
	} else {
		isPaused = 0;
	}
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    rawFile.open("GET", file, false);
    rawFile.send();
}

function run() {
	/*
	firstH1 = document.createElement("pre");
	document.getElementById("mainDiv").appendChild(firstH1);
	*/
	var JsonText = readTextFile("tekst.json");
	console.log(JsonText);

}

