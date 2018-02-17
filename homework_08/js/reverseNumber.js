function reverseNumber(val) {
	let result = Number(val) >= 0 ?  "": "-";
	let strNumber = String(Math.abs(val));
	for (var i = strNumber.length - 1; i >= 0 ; i--) {
		if(Number(strNumber[i]) === 0 && !(Number(val) === 0)){
			continue
		}else{
			result += strNumber[i]
		}
	}
	return result
}
