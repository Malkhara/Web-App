/*

Notes:

1- After a match, in Dev tools, it gives errors but it will continue to work properly ..
2- When I click of already deleted cards, it shows them back again .. 

Other than that, every thing requested seemed to be working fine.


*/

// Mohammd Alkharran, assignment 04.
// My first game in JavaScript .. 


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}


function addition(src1, src2){ // the addition function.
    var source1 = src1.match(/cards\/[cdhs](\d{1,2})\.png/);
    var source2 = src2.match(/cards\/[cdhs](\d{1,2})\.png/);
    var lastLocation = source1.length - 1;
    var LastLocation1 = source2.length - 1;
    var x = source1[lastLocation];
    x = parseInt(x);
    var y = source2[LastLocation1];
    y = parseInt(y);
    var z = x+y;
    if(z == 14 ){
        return true;
    }else

        return false; 
    }

cards = new Array(); // global cards array
liteArray = new Array(); // global lite mode array
Allcards = new Array(); // global all cards array - to set one of them to the mode array
for (i = 1; i < 14; i++) { // for loop for c cards
	document.getElementById("c"+ i );
	cardSrc = "c" + i + ".png";
	imgSrc = "cards/" + cardSrc + "";
	Allcards.push(imgSrc);
	liteArray.push(imgSrc);
} // end of c cards for loop

for (i = 1; i < 14; i++) { // for loop for d cards
	document.getElementById("d"+ i );
	cardSrc = "d" + i + ".png";
	imgTag = "cards/" + cardSrc + "";
	Allcards.push(imgTag);
} // end of d cards loop

for (h = 1; h < 14; h++) {// for loop for h cards
	document.getElementById("h"+ h );
	cardSrc = "h" + h + ".png";
	imgTag = "cards/" + cardSrc+"";
	Allcards.push(imgTag);
}// end of h cards loo

for (i = 1; i < 14; i++) {// for loop for s cards
	document.getElementById("s"+ i );
	cardSrc = "s" + i + ".png";
	imgTag = "cards/" + cardSrc + "";
	Allcards.push(imgTag);
}// end of s cards loo

var ToSetInterval; // variable tells u what it does from its name.

function startTimer() { // timer function
	ToSetInterval = window.setInterval("updateTime()", 1000);
}

function updateTime() { // update time function
	--seconds;
	document.getElementById("Count").innerHTML = seconds;
	
	if (seconds == 0) {
		alert("Time is up!");
		clearInterval(ToSetInterval);
		alert('You got '+gameCount+ '  points.'); 
	}
	}

var gameMode = prompt("Lite or Normal? "); // var to ask user, lite or full
var seconds = prompt("Enter your time limit (in seconds)", 60); // var to ask user, time limit



window.onload =function (){ // onload function - the main one
	document.write("<h1>Jackpot 14! </h1>");
	document.write("<p>Match cards in pairs that sums to 14 </p>");
	document.write('<p>Remaining Time:</p><div id="Count"><&nbsp></div>');
	startTimer();
	document.write("<table id = 'table'><tr><td>");
	if (gameMode == 'Lite' || gameMode =='lite'){
		cards = liteArray;
		shuffle(cards); // shuffle 
		for (i =0; i<liteArray.length; i++){
			document.write("<img src='cards/bback-tall.png' id = '"+i+"' >");
	}
	}
	else{
	cards = Allcards;
	shuffle(cards);
	for (i =0; i<cards.length; i++){
		if (i!=0&&i%13==0){
			document.write("<br><img src='cards/bback-tall.png' id = '"+i+"'>");
		}
		else{
			document.write("<img src='cards/bback-tall.png' id = '"+i+"' >");
	}
	}	
} 
document.write('<br>');
document.write('<input type = "button" name = "New Game" value = "New Game" onclick = "location.reload()"></input><br>');

gameCount = 0; // to keep track of points.
wrongTrials = 0; // to keep track of trials.
count = 0; // to count the clicks
var clickedArray = new Array();
document.getElementById('table').onclick = function(e){ // start of table onclick
		e.target.src = cards[e.target.getAttribute("id")];
		clickedArray.push(e.target.src);
		e.target.setAttribute("class", "red");
		count += 1;
		if (count %2==0){ // if 2 clicks do :
			e.target.src = cards[e.target.getAttribute("id")];
			clickedArray.push(e.target.src);
			if(addition(clickedArray[0], clickedArray[1]) == true) { // if match do:
				alert('Match! ');
				gameCount +=1;
				var redCards = document.getElementsByClassName("red");
				redCards[redCards.length-1].setAttribute("src", "  ");
				redCards[redCards.length-2].setAttribute("src", "  ");
				count = 0;
				if (gameMode == 'Lite' || gameMode =='lite' && gameCount == 6){ // to decide win for lite mode
					alert('=======      You won!      =======');
					clearInterval(ToSetInterval);
					
				} // end of lite mode win
				if (gameCount == 26){ // to decide full mode win
					alert('=======      You won!      =======');
					clearInterval(ToSetInterval);
				} // end of full mode win.
				clickedArray = new Array();
				redCards[1].removeAttribute("class");
                redCards[0].removeAttribute("class");
			} // end of if match condition.
			if(addition(clickedArray[0], clickedArray[1]) != true){ // if not match do:
				var redCards = document.getElementsByClassName("red");
				alert('No match! ');
				wrongTrials += 1;
				alert("# of (No match)  : "+wrongTrials);
				redCards[redCards.length-1].setAttribute("src", "cards/bback-tall.png");
				redCards[redCards.length-2].setAttribute("src", "cards/bback-tall.png");
				clickedArray = new Array();
                redCards[1].removeAttribute("class");
                redCards[0].removeAttribute("class");
			} // end of no match condition. 
			} // end of 2 clicks condition.
			
	} // end of table on click.

} // end of onload

