var dice , score , activePlayer , roundScore;
activePlayer = 0;
score = [0,0];
roundScore  = 0;
 
function myfun() {
	var dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector('#dice').textContent = dice;
	if (dice !== 1) {
		roundScore += dice; 
		document.getElementById('current-' + activePlayer).textContent = roundScore;

	}
	else {
		roundScore = 0;
		document.getElementById('current-' + activePlayer).textContent = roundScore;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		
	}

}

function hold() {
   
	   score[activePlayer] +=  roundScore;
	   if (score[activePlayer] >= 100) {
	   	document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
	   	document.querySelector('#player-' + activePlayer).textContent = "Winner";
	   	document.querySelector('#btn').style.display = "none";
	   	document.querySelector('#btn-reload').style.display = "block";
	   }
	   else {
	   document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
	   roundScore = 0;
	   document.getElementById('current-' + activePlayer).textContent = roundScore;
	   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;	   	
	   }


   

}

