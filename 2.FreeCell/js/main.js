var deck = [];
//var blackSymbol = ['♣','♦','♥','♠'];
var blackSymbol = ['♣','♦','♥','♠'];
var whiteSymbol = ['♧','♢','♡','♤'];
function init()
{
	deckinit();
	shuffle();
	deal();
}

function deckinit()
{
	deck = [];
	for(var i=0; i<52 ;i++)
	{
		deck[i] = i;
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
	for(var i = 1; i<=8;i++)
	{
		for(var j=0;j<columnLimit[i%2];j++)
		{
			var card = deck.pop();
			drawPoker(card,"initColumn"+i);
		}
	}
}

function drawPoker(cardnum,targetArea)
{
	var suit = cardnum%4;
	var num = cardnum%13+1;
	var color = "#000000";
	if(suit==1||suit==2) color = "#FF0000";
	d3.select("#"+targetArea).append("text").text(blackSymbol[suit]+num+",").attr("style","color:"+color+";") ;
}