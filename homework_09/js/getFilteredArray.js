function predicateFunction(num) { 
	return num < 10;
}
function getFilteredArray(arr=[], filter){
	let result = [];
	forEach(arr, function(el){
		if(filter(el)){
			result.push(el);
		}
	})
	return result
}
getFilteredArray([1, 7, 20], predicateFunction); // -> [1,7]