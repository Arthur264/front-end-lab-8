function getClosestToZero() {
	let index = 0;
	let min = Math.abs(arguments[index]);
	for (var i = 1; i < arguments.length; i++) {
		if(Math.abs(arguments[i]) < min){
			index = i;
		}
	}
	return arguments[index]
}