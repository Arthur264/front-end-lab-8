var number = parseInt(prompt('Enter first side of the triangle'));

function valid(val){
	if(!isNaN(val) && typeof val == "number" && isNatural(val) ){
		return true
	}else{
		return false
	}
}
function isNatural(val){
	return (val > 0) && (Math.floor(val) == val) && (val <= 20)
}
function buildPramid(val){
	var output="";
	if(val%2 == 0){
		val -= 1;
	}
	var k = Math.floor(val/2);
	for (var i = 1; i <= val; i++) {
		if(i%2 - 1 == 0){
			if(k < 0) k=0;
			output += "   ".repeat(k) + "[~]".repeat(i) + "\n";
			k -= 1;	
		}
	}
	console.log(output);
}
if(valid(number)){
	buildPramid(number);
}else{
	console.error("Incorrect!");
}