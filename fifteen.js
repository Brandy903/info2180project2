/**
* Created with info2180project2.
* User: Brandy903
* Date: 2014-10-29
* Time: 04:09 PM
* To change this template use Tools | Templates.
*/

window.onload = function()
{
getSetLocale();
$('shufflebutton').observe('click', shuffle);

};
var pi
var blankSpace;
var piece;
var getSetLocale = function()
{
piece = document.getElementById('puzzlearea');

pie = piece.getElementsByTagName('div');
    


for(var i =0; i < pie.length; i++)
{
    pie[i].style.backgroundImage="url('http://img4.wikia.nocookie.net/__cb20090817195312/harrypotter/images/5/5a/Harry_Potter_-_Quidditch_(HBP_promo)_2.jpg')";
    

    pie[i].className = "puzzlepiece";
    pie[i].style.position = "relative";
    pie[i].style.float = "left";
    pie[i].addClassName('movablepiece');
    pie[i].style.backgroundSize="400px 400px";
    pie[i].style.color="red";
    pie[i].onclick = (movement);

}


var second = 0;

var row2 = 4;
var row3 = 8;
var row4 = 12;


var blnk = document.createElement('div');
blnk.className = "puzzlepiece";

var blnkVal = document.createTextNode('');


blnk.appendChild(blnkVal);
blnk.style.top = "300px";
blnk.style.left = "300px";
piece.appendChild(blnk);

var ot = 0;

for(var y = 0; y<=3; y++)
{
    var ixel = "px";
    var first = 0;
    var space = " ";
    var le = 0;

    for(var p=0; p<=3; p++)
    {

        if(y===0)
        {
            pie[p+y].style.backgroundPosition = (first + ixel + space + second + ixel);
            
        }

        if(y===1)
        {
            pie[row2+p].style.backgroundPosition = (first + ixel + space + second + ixel);
            
        }
        if(y===2)
        {
            pie[row3+p].style.backgroundPosition = (first + ixel + space + second + ixel);
            
        }
        if(y===3)
        {
            pie[row4+p].style.backgroundPosition = (first + ixel + space + second + ixel);
           
        }

        le += 100;
        first -= 100;
    }
    second -= 100;
}


};

var getLocal = function() 
{


var xaxis = 0;
var yaxis = 0;
var groupxy =[];

for(var i=0; i<pie.length; i++)
{
    if(i%4===0)
    {
        xaxis = 0;
        yaxis += 96;
    }
    else
    {
        xaxis += 96;
    }
    groupxy[i] = [xaxis,yaxis];

}
groupxy[15] = [288,288];

return groupxy;

};

var getBlankArea = function()
{
var xpos;
var ypos;

   for(var i=0; i<pie.length; i++)
   {

       if(pie[i].innerHTML === '')
       {
           blankSpace = pie[i];
           alert(" ");
          
       }
   }
   return blankSpace;
};

var shuffle = function()
{
alert(" shuffled ");
};


var movement = function(po)
{
alert(" piece " + pie.length );
piece.childNodes[0]= piece.childNodes[3];
var tem = pie[po];
pie[po]=pie[getBlankArea];
pie[getBlankArea] = tem;


};