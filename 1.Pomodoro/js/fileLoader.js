function importFromData(){
$.getJSON("./data/taskData.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    return viewTaskData(json);
});
}
/*<input type="button" id="export" value="导出"/>*/
function exportToData(){
    var content = "这是直接使用HTML5进行导出的";
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "./data/taskData.json");//saveAs(blob,filename)
}

function exportToData2()
{
    var obj = { a : 1, b : 2};
    localStorage.setItem('myObj', JSON.stringify(obj));
}