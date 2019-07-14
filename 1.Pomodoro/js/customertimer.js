var pomodoroTimer;

function StartTimer()
{
	d3.select("#StartBtnText").text("Pause");
	d3.select("#StartBtn").attr("onclick","PomodoroTimerPause()");
	pomodoroTimer = setInterval(function() {
	  PomodoroTimerUpdate();
	}, 1000);	
}

function initWorkTime()
{
	textProto = d3.select("#timeInClock").text("25:00");
	d3.select("#circle1").attr("fill","#FFFFFF");
	d3.select("#circle2").attr("fill","#FFFFFF");
	d3.select("#circle3").attr("fill","#FFFFFF");
	d3.select("#circle4").attr("fill","#FFFFFF");
	d3.select("#circle5").attr("fill","#FFFFFF");
	StartTimer();
}

function PomodoroTimerUpdate()
{
	var textProto = d3.select("#timeInClock").text();
	var timeInArray = textProto.split(":");
	var timeInNum = timeInArray[0]*60+timeInArray[1]*1;
	timeInNum--;
	var newMins = Math.floor(timeInNum/60);
	var newSeconds = timeInNum - newMins*60;
	if(timeInNum%300==0) d3.select("#circle"+((1500-timeInNum)/300)).attr("fill","#003CA1");
	d3.select("#timeInClock").text(newMins.toString().padStart(2, '0')+":"+newSeconds.toString().padStart(2, '0'));
	
	d3.select("#secondLayerCircle").attr("transform","rotate("+(180/1500)*(1500-timeInNum)+",303.88,303.88)");
	d3.select("#secondLayerLine").attr("transform","rotate("+(180/1500)*(1500-timeInNum)+",303.88,303.88)");
	if(newMins==0&&newSeconds==0)
	{
		clearInterval(pomodoroTimer);
	}
}

function workDone()
{
	var nowDoing;
	for(var taskName in taskData)
	{
		if(taskData[taskName]["status"] == "Doing") nowDoing = taskName;
	}
	taskData[nowDoing]["status"] = "Done";
	var textProto = d3.select("#timeInClock").text();
	var timeInArray = textProto.split(":");
	var timeInNum = timeInArray[0]*60+timeInArray[1]*1;
	taskData[nowDoing]["timeTaken"] = 1500-timeInNum;
	
	initRestTime();
}

function PomodoroTimerPause()
{
	d3.select("#StartBtnText").text("Continue");
	d3.select("#StartBtn").attr("onclick","StartTimer()");
	clearInterval(pomodoroTimer);
}

function CancelTask()
{
	clearInterval(pomodoroTimer);
}

function DateTimer()
{
	var DateTimer = setInterval(function() {
	  DateTimerUpdate();
	}, 1000);
}

function DateTimerUpdate() 
{
	  var d = new Date();
	  var yyyy = d.getFullYear();
	  var mm = d.getMonth();
	  var dd = d.getDate();
	  var days = d.getDay();
	  var hours = d.getHours();
	  var mins = d.getMinutes();
	  var stringDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	  var dateString = yyyy+'.'+mm.toString().padStart(2, '0')+'.'+dd.toString().padStart(2, '0')+' '+stringDays[days]+" "+hours.toString().padStart(2, '0')+":"+mins.toString().padStart(2, '0');
	  document.getElementById("nowTimeString").innerHTML = dateString;
}