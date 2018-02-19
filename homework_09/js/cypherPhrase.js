var charactersMap = {a: 'o', c: 'd', t: 'g'};

function changeCharacters(val) {
	return charactersMap[val] || val
}
function cypherPhrase(obj, str){
	let arrayletter =  str.split("");
	let filterOut = getTransformedArray(arrayletter, changeCharacters);
	return filterOut.join("");
}
;
cypherPhrase(charactersMap, 'kitty cat'); // -> “kiggy dog”