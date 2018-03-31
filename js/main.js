var isPaused = 0;

var text = 
'{"0":{"text":"Hello there! My name is Bartek, and this is my portfolio website :)","wait":2},"1":{"text":"Looks empty huh? Yeah unfortunately studying takes too much of my free time, and my personal projects grows very slow. Although here is what technologies I know: *\\n- HTML & CSS\\t\\t\\t - Very good\\n- JavaScript (with JQuery)\\t - Good\\n- PHP\\t\\t\\t\\t - Good\\n- SQL\\t\\t\\t\\t - Good enough to create simple querys\\n- Python\\t\\t\\t - Good\\n- C/C++\\t\\t\\t\\t - Beginner\\n","wait":1},"2":{"text":"In 2017 I got IT Technician diploma.","wait":0},"3":{"text":"Also in 2017 I started learning Computer Science on University of Technology in City of Lódz, in Poland.\\n","wait":2},"4":{"text":"All right, if you want to know more about me, I put my CV somewhere down below so go ahead and check it out :) but if you have a wish to contact me directly, here is my email:\\n","wait":1},"5":{"text":"bartlomiej.gorkiewicz@gmail.com\\n","wait":0.5},"6":{"text":"Now here are my projects (not all, but \'the best\' of what I can show in public ;)","wait":1},"7":{"text":"My very advanced AI will tell you more about them, just click on what you are interested in.","wait":2},"8":{"text":"... also my CV I mentioned ealier: ","wait":1},"9":{"text":"Bartłomiej Górkiewicz CV","wait":2},"10":{"text":"\\nBye for now..","wait":1}}'
;

var dets = 
'{"0":{"0":"Game packs shop","1":"Game packs website is shop project where you can buy activation keys to games. You can purchase more than one game in bundle. Payments are done via Paypal SDK. This project was created for one of my client when I worked as Freelancer, unfortunately (or fortunately, because now I can share code here) he did not purchase domain, and project was not tested live.\\n\\nUsed technologies:\\n-HTML\\n-CSS\\n-JavaScript\\n-PHP\\n-Paypal SDK\\n\\nI know it is far from beautiful code, but it is old project, and I just started learning php back then.","2":"https://github.com/Smirnoffq/Games-shop"},"1":{"0":"League of Legends accounts shop","1":"Lolaccounts website is shop project where you can buy accounts to League of Legends. Payments are done via Paypal SDK. This project was created for one of my client, unfortunately (or fortunately, because now I can share code here) his domain expired, and project is not available online.\\n\\nUsed technologies:\\n-HTML\\n-CSS\\n-JavaScript\\n-PHP\\n-Paypal SDK\\n\\nI know it is far from beautiful code, but it is old project, and I just started learning php back then.","2":"https://github.com/Smirnoffq/League-accounts-shop"},"2":{"0":"Ok.ru checker","1":"Ok.ru checker is a small script written in Python that checks if ok.ru video is still available\\n\\nUsed technologies:\\n-Python with BeautifulSoup","2":"https://github.com/Smirnoffq/ok.ru-video-checker"},"3":{"0":"My portfolio","1":"You are looking at it right now ;)\\n\\nUsed technologies:\\n-HTML/CSS/JS","2":"https://github.com/Smirnoffq/smirnoffq.github.io"},"4":{"0":"Facebook chat statistics","1":"This application is changing your facebook data into nice looking website with easy customizable themes.\\n\\nUsed technologies:\\n-HTML/CSS/JS\\n-Python for scraping data","2":"https://github.com/Smirnoffq/fb-chat-stats"}}'

clickable = 0;

function writeText(text, index, i, mode = "t", indexD = 0) {

	// zmienic na 26
	oneLetterTime = 17;
	// jezeli piszemy text
	if (mode == "t")
	{
		// pojawienie sie projektow
		if (index == 6) 
		{
			if ($(window).width() > 1385) 
			{
				$("#tekst-div").animate({
					left: "12.5%",
					margin: null,
				}, 600, function() {
					$("#portfolio-div").fadeIn("slow");				
				})
			} else 
			{
				$("#portfolio-div").fadeIn("slow");	
			}
			
		}

		if (index == 9 && i == 0)
		{
			cvLink = document.createElement("a");
			cvLink.href="Bartlomiej_Gorkiewicz_cv_ang.pdf";
			cvLink.download="Bartlomiej_Gorkiewicz_cv_ang";
			document.getElementById("tekst-div-pre").appendChild(cvLink);
		} else if (index == 11 && i == 0) 
		{
			small = document.createElement("small");
			document.getElementById("tekst-div-pre").appendChild(small);
		}
		



		if (index < Object.keys(text).length)
		{
			if (i < text[index].text.length) {

				// link do CV
				if (index == 9)
				{
					cvLink.innerHTML += text[index].text[i];
				} else if (index == 11)
				{
					small.innerHTML += text[index].text[i];
				} else 
				{
					document.getElementById("tekst-div-pre").innerHTML += text[index].text[i];
					document.getElementById("tekst-div").scrollTop = document.getElementById("tekst-div").scrollHeight;
				}
				
				i++;
				setTimeout(function() {writeText(text, index, i, mode)}, oneLetterTime);
			} else {
				// link do CV
				if (index == 5) document.getElementById("tekst-div-pre").innerHTML += "<br /><br />";
				else if (index == 8) document.getElementById("tekst-div-pre").innerHTML += "";
				else document.getElementById("tekst-div-pre").innerHTML += "<br />";

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
		if (indexD < Object.keys(text[index]).length)
		{
			// link do projektu
			if (indexD == 2 && i == 0)
			{
				link = document.createElement("a");
				link.href=text[index][indexD];
				link.target = "_blank";
				document.getElementById("tekst-div-pre").appendChild(link);
			}

			if (indexD == 0 && i == 0)
			{
				b = document.createElement("b");
				document.getElementById("tekst-div-pre").appendChild(b);
			}

			if (i < text[index][indexD].length) {
				// link do projektu
				if (indexD == 2) {
					link.innerHTML += text[index][indexD][i];
				} else if (indexD == 0) {
					b.innerHTML += text[index][indexD][i];
				} else 
				{
					document.getElementById("tekst-div-pre").innerHTML += text[index][indexD][i];
				}
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
	
	writeText(JsonText, 0, 0, "t")
}

 