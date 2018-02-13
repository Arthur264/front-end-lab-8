var play = confirm('Do you want to play a game?');
var totalPrice = 0;
var startPrice = 0;
var attemptsLeft = 3;
var limitPrice = 5;
var currentPrize = limitPrice*2;
function game(){
	var finishgame = stageOfGame(currentPrize);
	if(finishgame){
		var continueGame = confirm('Wants to continue a game. Total prize ' + totalPrice);
		if(continueGame){
			limitPrice *= 2;
			currentPrize *= 3;
			nullifyData();
			game();
		}else{
			endGame();
		}
	}else{}
}
//nullify data
function nullifyData(){
	attemptsLeft = 3;
}
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function valid(val){
	if(!isNaN(val) && typeof val == "number"){
		return true
	}else{
		console.error("Incorrect !")
		return false
	}
}
function stageOfGame(price){
	var number = getRandomNumber(0, limitPrice);
	console.log(number)
	var userVal = parseInt(prompt(" Enter a number from 0 to " + limitPrice + " \n Attempts left: "+ attemptsLeft +"  \n Total prize: " + totalPrice + "$ \n Possible prize on current attempt: " + price + "$	"));
	if(valid(userVal)){
		if(number == userVal){
			totalPrice += price;
			return true	
		}else{
			attemptsLeft--;
			if(attemptsLeft >= 1){
				currentPrize = Math.floor(currentPrize/2); 
				return stageOfGame(currentPrize);
			}else{
				endGame();
				return false
			}
		}
	}else{
		console.error("Error value(")
	}
}
function endGame() {
	console.error("Thank you for a game. Your prize is: " + totalPrice);
}	
if(play){
	game()
}else{
	console.error("You did not become a millionaire")
}