var nowShowingMenu = "None";
var taskData = 
{
	"First task today":
	{
	 "status":"Not Start",//Not Start - Doing - Done - Cancel
	 "timeTaken":"",
	 "taskContent":["Lorem ipsum dolor sit amet",
	"Consectetur adipiscing elit",
	"Nulla vulputate neque",
	"Consequat lorem pharetra",
	"Ultrices non vitae elit"]
	}
};
function showTaskMenu()
{
	if(!showSideBar("taskMenuPanel")) return;
	//importFromData();
	viewTaskData(taskData);
}

function showFirstTask()
{
	d3.select("#nowTaskList").append("div").attr("id","taskNo"+taskNum);
	d3.select("#taskNo"+taskNum).append("ion-icon").attr("name","arrow-dropright-circle");
	d3.select("#taskNo"+taskNum).append("text").attr("class","taskTitle").text(taskName);	
}

function viewTaskData(taskData)
{
	d3.select("#nowTaskList").selectAll("*").remove();
	var taskNum = 0;
	for(var taskName in taskData)
	{
		d3.select("#nowTaskList").append("div").attr("id","taskNo"+taskNum);
		d3.select("#taskNo"+taskNum).append("ion-icon").attr("name","arrow-dropright-circle");
		d3.select("#taskNo"+taskNum).append("text").attr("class","taskTitle").text(taskName);
		//console.log(taskName,taskData[taskName]["taskContent"]);
		taskNum++;
	}
}

function addTask(taskTitle)
{
	taskData[taskTitle] = [];
	viewTaskData(taskData);
}

function showAnalyticsMenu()
{
	if(!showSideBar("analyticsMenuPanel")) return;
}

function showMusicMenu()
{
	if(!showSideBar("musicMenuPanel")) return;
}

function showSideBar(clickMenu)
{
	if(clickMenu == nowShowingMenu) //點原行，收縮
	{
		d3.select("#taskMenuPanel").attr("style","display:none;");
		d3.select("#analyticsMenuPanel").attr("style","display:none;");
		d3.select("#musicMenuPanel").attr("style","display:none;");
		d3.select("#sidebar").attr("style",null);
		d3.select("#taskArea").attr("style",null);
		nowShowingMenu = "none";
		return false;
	}
	else //點了不同的行
	{
		if(nowShowingMenu !="none") d3.select("#"+clickMenu).attr("style","display:none");
		if(clickMenu == "taskMenuPanel")
			d3.select("#"+clickMenu).attr("style","width:28%;height:100%;background-color:#F5F1EE;");
		if(clickMenu == "analyticsMenuPanel")
			d3.select("#"+clickMenu).attr("style","width:28%;height:100%;background: -webkit-linear-gradient(#5980C3,#3E68B2,#2A56A5);");
		if(clickMenu == "musicMenuPanel")
			d3.select("#"+clickMenu).attr("style","width:28%;height:100%;background-color:#5980C3;");
		d3.select("#sidebar").attr("style","right:28%;");
		d3.select("#taskArea").attr("style","display:none;");
		nowShowingMenu = clickMenu;
		return true;		
	}
}