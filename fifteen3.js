/**
* Created with info2180project2.
* User: Brandy903
* Date: 2014-10-30
* Time: 08:38 PM
* To change this template use Tools | Templates.
*/

var div;
var hlitee;
var timer;
var whiteY;
var whiteX;

window.onload = function ()
{
	var puzzlearea = document.getElementById('puzzlearea');
	
	div = puzzlearea.getElementsByTagName('div');

	for (var i=0; i<div.length; i++)
	{
        div[i].style.backgroundImage=" background.jfif";
		div[i].className = 'puzzlepiece';
		div[i].style.left = (i%4*100)+'px';
		div[i].style.top = (parseInt(i/4)*100) + 'px';
		div[i].style.backgroundPosition= '-' + div[i].style.left + ' ' + '-' + div[i].style.top;
		div[i].onmouseover = function()
		{
			if (checkCanMove(parseInt(this.innerHTML)))
			{
				this.style.border = "2px solid red";
				this.style.color = "#006600";
			}
		};
		div[i].onmouseout = function()
		{
			this.style.border = "2px solid black";
			this.style.color = "#000000";
		};

		div[i].onclick = function()
		{
			if (checkCanMove(parseInt(this.innerHTML)))
			{
				swap(this.innerHTML-1);
				if (checkFinish())
				{
					youWin();
					alert("YOU HAVE WON");
				}
				return;
			}
		};
	}

	whiteX = '300px';
	whiteY = '300px';

	var shufflebutton = document.getElementById('shufflebutton');
	shufflebutton.onclick = function()
	{

		for (var i=0; i<250; i++)
		{
			var rand = parseInt(Math.random()* 100) %4;
			if (rand === 0)
			{
				var tmp = calcUp(whiteX, whiteY);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}
			if (rand == 1)
			{
				tmp = calcDown(whiteX, whiteY);
				if ( tmp != -1) 
				{
					swap(tmp);
				}
			}

			if (rand == 2)
			{
				tmp = calcLeft(whiteX, whiteY);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}

			if (rand == 3)
			{
				tmp = calcRight(whiteX, whiteY);
				if (tmp != -1)
				{
					swap(tmp);
				}
			}
		}
	};
};

function checkCanMove(pos)
{
	if (calcLeft(whiteX, whiteY) == (pos-1))
	{
		return true;
	}

	if (calcDown(whiteX, whiteY) == (pos-1))
	{
		return true;
	}

	if (calcUp(whiteX, whiteY) == (pos-1))
	{
		return true;
	}

	if (calcRight(whiteX, whiteY) == (pos-1))
	{
		return true;
	}
}

function calcDown (x, y)
{
	var xx = parseInt(x);
	var yy = parseInt(y);
	if (yy < 300)
	{
		for (var i=0; i<div.length; i++)
		{
			if (parseInt(div[i].style.top) - 100 == yy && parseInt(div[i].style.left) == xx) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}

function swap (pos) {
	var temp = div[pos].style.top;
	div[pos].style.top = whiteY;
	whiteY = temp;

	temp = div[pos].style.left;
	div[pos].style.left = whiteX;
	whiteX = temp;
}


function Blink()
{
	hlitee --;
	if (hlitee === 0)
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#8FBC8F";
		alert('you win');
		return;
	}
	if (hlitee % 2)
	{
		body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#006400";	
	}
	else
	{
		body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#8B008B";
	}
	timer = setTimeout(Blink, 100);
}



function calcLeft(x, y)
{
	var xx = parseInt(x);
	var yy = parseInt(y);

	if (xx > 0)
	{
		for (var i = 0; i < div.length; i++) 
		{
			if (parseInt(div[i].style.left) + 100 == xx && parseInt(div[i].style.top) == yy)
			{
				return i;
			} 
		}
	}
	else 
	{
		return -1;
	}
}

function calcRight (x, y) {
	var xx = parseInt(x);
	var yy = parseInt(y);
	if (xx < 300)
	{
		for (var i =0; i<div.length; i++){
			if (parseInt(div[i].style.left) - 100 == xx && parseInt(div[i].style.top) == yy) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}

function calcUp (x, y) {
	var xx = parseInt(x);
	var yy = parseInt(y);
	if (yy > 0)
	{
		for (var i=0; i<div.length; i++)
		{
			if (parseInt(div[i].style.top) + 100 == yy && parseInt(div[i].style.left) == xx) 
			{
				return i;
			}
		} 
	}
	else 
	{
		return -1;
	}
}


function youWin()
{
	var body = document.getElementsByTagName('body');
	body[0].style.backgroundColor = "#FF0000";
	hlitee = 10;
	timer = setTimeout(Blink, 100);
	alert("Proceed");
}

function checkFinish()
{
	var flag = true;
	for (var i = 0; i < div.length; i++) {
		var y = parseInt(div[i].style.top);
		var x = parseInt(div[i].style.left);

		if (x != (i%4*100) || y != parseInt(i/4)*100)
		{
			flag = false;
			break;
		}
	}
	return flag;
}
