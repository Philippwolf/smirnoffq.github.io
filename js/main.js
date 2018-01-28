var isPaused = 0;

var text = 
'{"0":{"text":"Hello there! My name is Bartek, and this is my portfolio website :)","wait":2},"1":{"text":"Looks empty? Huh... maybe that\'s because I\'m 21 years old, and I don\'t have a lot of real world projects on account.","wait":3},"2":{"text":"But before I show you what I have I will tell you something about myself.","wait":2},"3":{"text":"In 2017 I started learning Computer Science on University of Technology in City of Łódź in Poland. Until then I taught myself web technologies (prefer backend (PHP)), and a little bit of programming in Python and C.","wait":2},"4":{"text":"Okay.. thats enough about me, of course I put my CV somewhere down below, so if you want to know something more about me, go ahead and check it out, and if you want to contact me directly here is my email and skype: ","wait":1},"5":{"text":"Mail: bartlomiej.gorkiewicz@gmail.com","wait":0.5},"6":{"text":"Skype: Smirnoffq","wait":0.5},"7":{"text":"Now here are my projects (not all, but \'the best\' of what I can show in public ;) )","wait":3},"8":{"text":"I have to go now. If anything here was interesting for you feel free to contact me!","wait":1},"9":{"text":"...also my CV I mentioned earlier: ","wait":0},"10":{"text":"Bartłomiej Górkiewicz CV","wait":2},"11":{"text":"My very advanced AI will tell you more about every project in right panel, just click on what you are interested in.","wait":2},"12":{"text":"Bye for now...","wait":0}}'
;

var dets = 
'{"0":{"0":"Game packs shop","1":"Game packs website is shop project where you can buy activation keys to games. You can purchase more than one game in bundle. Payments are done via Paypal SDK. This project was created for one of my client when I worked as Freelancer, unfortunately (or fortunately, because now I can share code here) he did not purchase domain, and project was not tested live.","2":"https://github.com/Smirnoffq/Games-shop"},"1":{"0":"League of Legends accounts shop","1":"Lolaccounts website is shop project where you can buy accounts to League of Legends. Payments are done via Paypal SDK. This project was created for one of my client, unfortunately (or fortunately, because now I can share code here) his domain expired, and project is not available online.","2":"https://github.com/Smirnoffq/League-accounts-shop"}}'

clickable = 0;

function writeText(text, index, i, mode = "t", indexD = 0) {

	// zmienic na 26
	oneLetterTime = 17;
	// jezeli piszemy text
	if (mode == "t")
	{
		// pojawienie sie projektow
		if (index == 7) 
		{
			if ($(window).width() > 1225) 
			{
				$("#tekst-div").animate({
					left: "12.5%",
					right: "12.5%",
					margin: null,
				}, 600, function() {
					$("#portfolio-div").fadeIn("slow");				
				})
			} else 
			{
				$("#portfolio-div").fadeIn("slow");	
			}
			
		}

		if (index == 10 && i == 0)
		{
			cvLink = document.createElement("a");
			cvLink.href="Bartlomiej_Gorkiewicz_cv_ang.pdf";
			cvLink.download="Bartlomiej_Gorkiewicz_cv_ang";
			document.getElementById("tekst-div-pre").appendChild(cvLink);
		}
		



		if (index < Object.keys(text).length)
		{
			if (i < text[index].text.length) {
				if (index == 10)
				{
					cvLink.innerHTML += text[index].text[i];
				} else 
				{
					document.getElementById("tekst-div-pre").innerHTML += text[index].text[i];
					document.getElementById("tekst-div").scrollTop = document.getElementById("tekst-div").scrollHeight;
				}
				
				i++;
				setTimeout(function() {writeText(text, index, i, mode)}, oneLetterTime);
			} else {

				if (index == 6) document.getElementById("tekst-div-pre").innerHTML += "<br /><br /><br />";
				else if (index == 9) document.getElementById("tekst-div-pre").innerHTML += "";
				else document.getElementById("tekst-div-pre").innerHTML += "<br /><br />";

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
				document.getElementById("tekst-div-pre").innerHTML += text[index][indexD][i];
				document.getElementById("tekst-div").scrollTop = document.getElementById("tekst-div").scrollHeight;
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
	writeText(JsonText, 9, 0, "t")
	
}

