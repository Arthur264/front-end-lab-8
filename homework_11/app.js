var rootNode = document.getElementById("root");

// Your code goes here
function forEach(arr=[], callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i])
	}
};
// if you want folders to be closed 
 
// function clearOpen(el){
// 	for (var i = 0; i < el.length; i++) {
// 		if(el[i].className){
// 			el[i].className = el[i].className.replace(" open", "")
// 		if(el[i].hasChildNodes()){
// 			clearOpen(el[i].childNodes);
// 		}
// 	}
// }

function openEvent(el){
	el.addEventListener("click", function(e){
		var parent = this.parentElement;
		parent.classList.toggle("open");
		// if you want folders to be closed 

		// if(parent.className.indexOf("open") < 0){
		// 	clearOpen(parent.childNodes);
		// }
	});
	return el;
}
function createElement(text, folder = true) {
	var element = document.createElement("div"),
	div = document.createElement("div"),
	i = document.createElement("i"),
	p = document.createElement('p');
	//class folder or file 
	element.className = folder ? "folder": "file";
	div.className = 'title';
	i.className = 'material-icons';
	// i.innerHTML = folder ? "folder": "description";
	p.appendChild(i);
	p.innerHTML += text;
	div.appendChild(p);
	openEvent(div);
	element.appendChild(div);
	return element;
};
function createError(div, text){
	var element = document.createElement("div");
	element.className = "error";
	element.innerHTML = text;
	div.appendChild(element);
	return div;
}
function parser(data, stack){
	forEach(data, function (el) {
		var element;
		if(el.folder && el.folder === true){
			element = createElement(el.title);
			if(!el.children){
				element = createError(element, "Folder is empty");
			}
		}else{
			element = createElement(el.title, false);
		}
		stack.appendChild(element);
		if(el.children){
			parser(el.children, stack.children[stack.children.length - 1]);
		}
	});
};
parser(structure, rootNode);
var result;

// rootNode.appendChild(/* Append your TreeView node*/);