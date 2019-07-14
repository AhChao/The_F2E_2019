function importFromData(){
$.getJSON("./data/taskData.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    return viewTaskData(json);
});
}
/*<input type="button" id="export" value="导出"/>*/
function exportToData(taskData){
	var jsonToStr = JSON.stringify(taskData);
    console.log(taskData,jsonToStr);
    //download(taskData,'./data/taskData.json','json');
}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}