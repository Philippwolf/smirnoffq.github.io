var isPaused = 0;

var text = 
'{"0":{"text":"Hello there! My name is Bartek, and this is my portfolio website :)","wait":2},"1":{"text":"Looks empty? Huh...","wait":2},"2":{"text":"Maybe before I show you my projects I will tell you something about me.","wait":2},"3":{"text":"I am 21 years old student of Computer Science on University of Technology in City of Łódź in Poland.","wait":2},"4":{"text":"Right now everything what you can see here is what I learned myself.","wait":2},"5":{"text":"Okay.. thats enough about me, if you want more you can check my CV down below somewhere.","wait":2},"6":{"text":"In right panel you should see my projects (not all, but \'the best\' of what I can show in public ;) )","wait":4},"7":{"text":"I have to go now. If anything here was interesting for you feel free to contact me here:","wait":1},"8":{"text":"Mail: bartlomiej.gorkiewicz@gmail.com","wait":1},"9":{"text":"Skype: Smirnoffq","wait":1},"10":{"text":"also my CV I mentioned earlier: Bartłomiej Górkiewicz CV.","wait":2},"11":{"text":"If you want to learn more about my projects just click on them, and my very advanced AI will tell you more about them ;)","wait":2},"12":{"text":"Bye for now...","wait":0}}'
;

var dets = 
'{"0":{"0":"Game packs shop","1":"Game packs website is shop project where you can buy activation keys to games. You can purchase more than one game in bundle. Payments are done via Paypal SDK. This project was created for one of my client when I worked as Freelancer, unfortunately (or fortunately, because now I can share code here) he did not purchase domain, and project was not tested live.","2":"https://github.com/Smirnoffq/Games-shop"},"1":{"0":"League of Legends accounts shop","1":"Lolaccounts website is shop project where you can buy accounts to League of Legends. Payments are done via Paypal SDK. This project was created for one of my client, unfortunately (or fortunately, because now I can share code here) his domain expired, and project is not available online.","2":"https://github.com/Smirnoffq/League-accounts-shop"}}'

clickable = 0;

function writeText(text, index, i, mode = "t", indexD = 0) {

	// zmienic na 26
	oneLetterTime = 20;
	// jezeli piszemy text
	if (mode == "t")
	{
		if (index < Object.keys(text).length)
		{
			if (i < text[index].text.length) {
				document.getElementById("tekst-div-pre").innerHTML += text[index].text[i];
				i++;
				setTimeout(function() {writeText(text, index, i, mode)}, oneLetterTime);
			} else {
				document.getElementById("tekst-div-pre").innerHTML += "<br /><br />";
				timeout = (text[index].wait) * 1000
				index++;
				setTimeout(function() {writeText(text, index, 0, "t")}, timeout);
			}
		} else 
		{
			clickable = 1;
		}
		

	// jezeli piszemy o projektach
	} else if (mode == "d")
	{
		clickable = 0;
		if (indexD <= Object.keys(text).length)
		{
			if (i < text[index][indexD].length) {
				document.getElementById("tekst-div-pre").innerHTML += text[index][indexD][i]
				i++;
				setTimeout(function() {writeText(text, index, i, mode, indexD)}, oneLetterTime);

			} else {
				document.getElementById("tekst-div-pre").innerHTML += "<br /><br />";
				indexD++;
				setTimeout(function() {writeText(text, index, 0, "d", indexD)}, 100);
			}
		} else {
			clickable = 1;	
		}
	}
	
}

function details(index)
{
	if (clickable == 1)
	{
		line = document.createElement("div");
		document.getElementById("tekst-div-pre").appendChild(line);
		line.className = "line";
		document.getElementById("tekst-div-pre").innerHTML += "<br />";
		det = JSON.parse(dets);
		writeText(det, index, 0, "d", 0)
	}
	
}

function run() {
	DOMElement = document.getElementById("tekst-div-pre");
	var JsonText = JSON.parse(text)
	

	// na test ustaw na index na 12
	writeText(JsonText, 0, 0, "t");
}

