var deck = [];
//var blackSymbol = ['♣','♦','♥','♠'];
var blackSymbol = ['♣','♦','♥','♠'];
var whiteSymbol = ['♧','♢','♡','♤'];
var initColumn  =  [[]];
var actionQueue = [[]]; 
function init()
{
	actionQueue = [[]];
	deckinit();
	shuffle();
	deal();
	startTimer();
}

function deckinit()
{
	deck = [];
	for(var i=0; i<52 ;i++)
	{
		deck[i] = i;
	}
	initColumn =[[]];
	for(var i=0; i<8;i++)
	{
		initColumn[i] = [];
	}
}

function shuffle() {
	arr = deck;
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};

function deal()
{
	var columnLimit = [7,6];
	for(var i = 0; i<8;i++)
	{
		for(var j=0;j<columnLimit[i%2];j++)
		{
			var cardnum = deck.pop();
			drawPoker(cardnum,"initColumn"+i);
			initColumn[i].push(cardnum);
		}
	}
}

function drawPoker(cardnum,targetArea)
{
	var suit = cardnum%4;
	var num = cardnum%13+1;
	var color = "#000000";
	if(suit==1||suit==2) color = "#FF0000";
	d3.select("#"+targetArea).append("text").text(blackSymbol[suit]+num+",")
	.attr("onclick","selectCard(this.id)")
	.attr("style","color:"+color+";")
	.attr("id","card"+cardnum) ;
}

function selectCard(cardnumId)
{
	var cardnum = cardnumId.split("card")[1];
	var area = checkArea(cardnum);
	console.log(area);
}

function checkArea(cardnum)
{
	for(var col in initColumn)
	{
		for(var card in initColumn[col])
		{
			if(initColumn[col][card]==cardnum)
				return "initColumn"+col;
		}
	}
	return "Error Action";//area name
}

function vaildateMoving(fromArea,targetArea)
{

}

function selectArea(selectedArea)
{
}

function selectChecking()//for init col multi sel
{
}

function invaildAlert()
{
	alert("Invaild Moving!");
}

function undo()
{

}

function startTimer()
{

}