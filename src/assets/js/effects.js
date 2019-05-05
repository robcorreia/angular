function $(id) {
	return document.getElementById(id);
}

function getPos(el) {
	var el2 = el;
	var cur = 0;
	do	{
		cur += el.offsetTop-el.scrollTop;
		el = el.offsetParent;
		el2 = el2.parentNode;
		while (el2 != el) {
			cur -= el2.scrollTop;
			el2 = el2.parentNode;
		}
	} while (el.offsetParent);

	return cur;
};

function winHeight() {
	var myHeight = 0;
	if( typeof( window.innerHeight ) == 'number' ) {
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientHeight ) ) {
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientHeight ) ) {
		myHeight = document.body.clientHeight;
	}
	return myHeight;
}

function scrollY() {
	if( window.pageYOffset ) { return window.pageYOffset; }
	return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function showMenu() {
	var layer = document.createElement("div");
	layer.className = "layer";
	layer.onclick = function() {
		hideMenu(layer);
	}
	document.getElementById('appHeader').insertBefore(layer, document.getElementById('headerBar'));
	document.getElementById('menu').className = "showMenu";
}

function hideMenu(layer) {
	layer.parentNode.removeChild(layer);
	document.getElementById('menu').className = "hideMenu";
}

function createCarousel(div, y) {
	var string_css = "";

	var style = document.createElement('style');
	style.type = "text/css";

	var inner = div.getElementsByClassName('slider_inner');
	var divs = div.getElementsByTagName('ul');

	if (divs.length > 1) {
		for(var i=0; i<divs.length; i++) {
			var input = document.createElement('input');
			input.type = "radio";
			input.name = "slider" + (y+1);
			input.title = "slide" + (i+1);
			input.className = "slider_nav nav";
			if (i == 0) input.setAttribute("checked", "checked");
			div.insertBefore(input, inner[0]);

			string_css += ".nav:checked:nth-of-type("+ (i+1) +") ~ ."+ "slider_" + (y+1) +" { left: "+ (i*-100) +"%; }";
		}

		style.innerHTML = string_css;
		div.insertBefore(style, inner[0]);

		inner[0].style.width = (i*100) + "%";
		inner[0].classList.add("slider_" + (y+1));
	}
}
