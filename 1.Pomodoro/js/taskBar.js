function showTaskMenu()
{
	if(!showSideBar()) return;
	d3.select("#taskMenuPanel").attr("style","width:28%;height:100%;background-color:#F5F1EE;");
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

function showSideBar()
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