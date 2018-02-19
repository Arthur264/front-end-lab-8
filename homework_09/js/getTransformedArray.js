function increment(num) { 
	return num*2;
}
function getTransformedArray(arr=[], func) {
	let result = [];
	forEach(arr, function(el){
		result.push(func(el));
	});
	return result
} 
getTransformedArray([1, 7, 20], increment); // => [2, 14, 40]