function stopWhiteNoise()
{
	var audio = document.getElementById('whiteNoiseMusic');
	audio.pause();
	audio.currentTime = 0;
}
function playWhiteNoise(whiteNoiseName)
{
	var itemId = "wn"+whiteNoiseName.replace(/\s+/g,""); 
	var audio = document.getElementById('whiteNoiseMusic');
	d3.select("#wnNowCheck").remove();
	d3.select("#"+itemId).append("ion-icon").attr("id","wnNowCheck").attr("name","checkmark").attr("style","float:right;");
	/*attr({
			id:"wnNowCheck",
			name:"checkmark",
		});*/
	audio.pause();
	audio.currentTime = 0;
	audio.src = "./mp3/"+whiteNoiseName+".mp3";
	audio.currentTime = 0;
	audio.play();
}

function setAlarm(alarmName)
{
	var itemId = "wn"+alarmName.replace(/\s+/g,""); 
	var audio = document.getElementById('alarmMusic');
	audio.src = "./mp3/"+alarmName+".mp3";
	d3.select("#alNowCheck").remove();
	d3.select("#"+itemId).append("ion-icon").attr("id","alNowCheck").attr("name","checkmark").attr("style","float:right;");
}