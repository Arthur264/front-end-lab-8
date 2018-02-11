var amount1 = parseInt(prompt('Enter EURO'));
var amount2 = parseInt(prompt('Enter USD'));

var rateEuro = 33.2324;
var rateUsd = 27.1240;
function valid(el){
	if(el <= 0 || typeof el !== "number" || isNaN(el)){
		return false
	}else{
		return true
	}
}
function convert(price, currency) {
	var result = price;
	switch(currency){
		case 0: // for USD
			result *= rateUsd
			break
		case 1: //for EURO
		    result *= rateEuro
			break
	}
	return Math.floor(result*1000)/1000
	
}
if(valid(amount1) && valid(amount2)){
	console.log(amount1 + " euros are equal " +  convert(amount1, 1) +  " UAH, "+amount2+ " dollars are equal " +convert(amount1, 0)+ " UAH, one euro is equal "+Math.floor(rateEuro/rateUsd*1000)/1000+" dollars.")
}else{
	console.log("Incorrect data")
}