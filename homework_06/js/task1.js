var side1 = parseInt(prompt('Enter first side of the triangle'));
var side2 = parseInt(prompt('Enter second side of the triangle'));
var side3 = parseInt(prompt('Enter third side of the triangle'));
console.log(typeof side1, typeof side2, typeof side3)
function square(val1, val2, val3){
	//Formula Heron
	var p = (val1 + val2 + val3)/2;
	return Math.sqrt(p*(p-val1)*(p-val2)*(p-val3));
}
function valid(el){
	if(el <= 0 || typeof el !== "number" || isNaN(el)){
		return false
	}else{
		return true
	}
}
function isTriangle(val1, val2, val3){
	if(Math.min(val2 + val3 - val1,val1+val3 - val2,val2+val1 - val3)){
		return true
	}else{
		return false
	}
}
function rightTriangle(val1, val2, val3){
	if(Math.hypot(val1, val2) == val3 || Math.hypot(val2, val3) == val1 || Math.hypot(val3, val1) == val2){
		return true
	}else{
		return false
	}
}
function typeTriangle(val1, val2, val3){
	if((val1== val2) && (val1 == val3) && (val2== val3)){
		return "equilateral"
	}else if((val1== val2) || (val1 == val3) || (val2== val3)){
		return "isosceles"
	}else if(rightTriangle(val1, val2, val3)){
		return "right"
	}else{
		return "scalene"
	}
}
if(valid(side1) && valid(side2) && valid(side3)){
	if(isTriangle(side1, side2, side3)){
		console.log("Type of triangle is " + typeTriangle(side1, side2, side3) + " triangle and square is " + Math.floor(square(side1, side2, side3)*100)/100)
	}else{
		console.log("It`s not triangle(")
	}
	
}else{
	console.log("Incorrect data")
}