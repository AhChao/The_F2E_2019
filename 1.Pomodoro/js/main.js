function init()
{
	StartDateTimer();
	var taskname = GetNextJob();
	updateTaskShowInMainPage(taskname);
}