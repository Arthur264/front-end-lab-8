/**
 * Your debounce function goes here
 * function(){}
 */

// Example

let iterator = 0;

function increaseIteratorBy1() {
	iterator++;

	printIteratorValue();
}

function printIteratorValue() {
	console.log('Iterator value ', iterator);
}

function debounce(func, delay) {
	let clearTime = 0;
	return function(){
		if(clearTime){
			clearTimeout(clearTime);
		}
		return clearTime = setTimeout(func, delay);
	}
}
var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'