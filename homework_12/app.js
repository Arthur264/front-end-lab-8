// Your code goes here
Node.prototype.appendChildren = function () {
	for ( var i = 0 ; i < arguments.length;i++){
		this.appendChild(arguments[i]);
	}
};
function create(tagname, classname, text){
	var el = document.createElement(tagname);
	if(classname){
		el.className = classname;
	}
	if(text){
		el.innerHTML = text;
	}
	return el
};
function createRow(key, value){
	var tr = create("tr");
	var td1 = create("td", "", key);
	var td2 = create("td", "", value);
	tr.appendChildren(td1, td2);
	return tr
};

var app = {
	parseThumbnails: function(el, index){
		var tank = create("a", "tank");
		var tankImg = create("img", "tank__img");
		var tankBody = create("span", "tank__body");
		var tankCountry = create("img", "tank__countryimg");
		var tankLevel = create("span", "tank__level", el.level);
		var tankModel = create("span", "tank__model", el.model);
		tank.href = "#" + index;
		tank.addEventListener("click", app.changeHash);
		tankImg.src = el.preview;
		tankCountry.src = el.country_image;
		tankCountry.title = el.country;
		tankModel.title = el.model;
		tankBody.appendChildren(tankCountry, tankLevel, tankModel);
		tank.appendChildren(tankImg, tankBody);
		return tank
	},
	changeHash:function(e){
		e.preventDefault();
		window.location.hash = this.hash;
	},
	titleList: function(){
		var title = create("h1", "title", "Most popular tanks");
		return title
	},
	titleDetails:function(hash){
		var tank = tanks[hash];
		var title = create("h1", "title-details");
		var titleImg = create("img", "title-details__img");
		var titleModel = create("span", "title-details__model", tank.model);
		var titleLevel = create("span", "title-details__level", "(level " + tank.level + ")") ;
		titleImg.src = tank.country_image;
		titleImg.title = tanks[hash].country;
		title.appendChildren(titleImg, titleModel, titleLevel)
		return title
	},
	
	buildlist: function(){
		var list = create("div", "grid");
		for (var i = 0; i < tanks.length; i++) {
			list.appendChild(app.parseThumbnails(tanks[i], i));
		}
		return list
	},
	parseDetails: function(hash){
		var details = tanks[hash].details
		var detailsList =  create("div", "details-list");
		var preview = create("div", "preview");
		var previewImg = create("img", "preview__img");
		var previewTitle = create("h2", "preview__title", "Preview");
		var charachetistic = create("div", "charachetistic");
		var charachetisticTitle = create("h2", "charachetistic__title", "Charachetistic");
		var charachetisticTable = create("table", "charachetistic__table");
		previewImg.src = tanks[hash].preview;
		preview.appendChildren(previewTitle, previewImg);
		for(var prop in details){
			charachetisticTable.appendChild(createRow(prop, details[prop]));
		}
		charachetistic.appendChildren(charachetisticTitle, charachetisticTable);
		detailsList.appendChildren(preview, charachetistic);
		return detailsList
	},
	detailsBack:function(){
		var back = create("a", "details-back", "Back to list view");
		back.addEventListener("click", function(e){
			e.preventDefault();
			history.go(-1);
		});
		return back;
	},
	details: function(hash){
		var root = document.getElementById("root");
		var detailsTank = create("div", "tank-details");
		detailsTank.appendChildren(app.titleDetails(hash),app.parseDetails(hash), app.detailsBack());
		root.appendChild(detailsTank);
	},
	thumbnails: function () {
		var root = document.getElementById("root");
		var thumbnails = create("div", "thumbnails");
		thumbnails.appendChildren(app.titleList(), app.buildlist());
		root.appendChild(thumbnails)
	},
	clear:function(){
		document.getElementById("root").innerHTML = "";
	},
	init: function(){
		var hash = window.location.hash;
		app.clear();
		if(hash.length){
			this.details(hash.substring(1));
		}else{
			this.thumbnails();
		}
	}
};

app.init();

window.addEventListener("hashchange", function(){
	app.init();
});
