function isPrime(num) {
	let result = true;
	if(num > 1){
		for (var i = 2; i < num - 1; i++) {
			if(num % i === 0 ){
				result = false;
			}
		}
	}else{
		result = false
	}
	return result
}
