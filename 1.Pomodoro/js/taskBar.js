var nowShowingMenu = "None";
function showTaskMenu()
{
	if(!showSideBar("TaskMenu")) return;
	nowShowingMenu = "TaskMenu";
	d3.select("#taskMenuPanel").attr("style","width:28%;height:100%;background-color:#F5F1EE;");
	importFromData();
}

function viewTaskData(taskData)
{
	console.log(taskData);
	d3.select("#nowTaskList").selectAll("*").remove();
	var taskNum = 0;
	for(var taskName in taskData)
	{
		d3.select("#nowTaskList").append("div").attr("id","taskNo"+taskNum);
		d3.select("#taskNo"+taskNum).append("ion-icon").attr("name","arrow-dropright-circle");
		d3.select("#taskNo"+taskNum).append("text").attr("class","taskTitle").text(taskName);
		console.log(taskName,taskData[taskName]);
		taskNum++;
	}
}

function showAnalyticsMenu()
{
	if(!showSideBar()) return;
	d3.select("#analyticsMenuPanel").attr("style","width:28%;height:100%;background: -webkit-linear-gradient(#5980C3,#3E68B2,#2A56A5);");
}

function showMusicMenu()
{
	if(!showMusicMenu()) return;
	d3.select("#musicMenuPanel").attr("style","width:28%;height:100%;background-color:#5980C3;");
}

function showSideBar(clickMenu)
{
	if(d3.select("#sidebar").attr("style")!="right:28%;")
	{
		d3.select("#sidebar").attr("style","right:28%;");
		d3.select("#taskArea").attr("style","display:none;");
		return true;
	}
	else
	{
		d3.select("#taskMenuPanel").attr("style","display:none;");
		d3.select("#analyticsMenuPanel").attr("style","display:none;");
		d3.select("#musicMenuPanel").attr("style","display:none;");
		d3.select("#sidebar").attr("style",null);
		d3.select("#taskArea").attr("style",null);
		return false;
	}
}