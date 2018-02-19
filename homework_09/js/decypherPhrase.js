var charactersMap = {a: 'o', c: 'd', t: 'g'};
function reverseObject(obj) {
	var result = {};
	for(var key in obj) {
		let value = obj[key];
		result[value] = key
	}
	return result
}
charactersMap = reverseObject(charactersMap);
function changeCharacters(val) {
	return charactersMap[val] || val
}
function decypherPhrase(obj, str){
	let arrayletter =  str.split("");
	let filterOut = getTransformedArray(arrayletter, changeCharacters);
	return filterOut.join("");
}
;
decypherPhrase(charactersMap, 'kiggy dog'); // -> “kitty cat”