var overlay = document.querySelector('section:nth-of-type(1)');
var popUp = document.querySelector('section:nth-of-type(1) div');
var nav = document.querySelector('nav');
var unorderdList = document.querySelector('ul');


function emptyMenu(){
	unorderdList.remove();
};

function fillMenu(){
	nav.innerHTML = '<ul><li><a>Home</a></li> <li><a>Inloggen</a></li></ul>';	
};

function overlayOn(){
	overlay.classList.add("overlay");	
	overlay.classList.remove("displayNone");	
};


nav.addEventListener('click', overlayOn, false);
addEventListener('scroll', emptyMenu, false);
addEventListener('scroll', fillMenu, false);







						