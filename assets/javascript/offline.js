var count = 0;

var countCircle = document.querySelector('li:nth-of-type(4)');
var offlineLink = document.querySelector('li:nth-of-type(3)');

var buttonOff1  = document.querySelector('.buttonOff1');
var buttonOn1  = document.querySelector('.buttonOn1');
var article1	= document.querySelector('main article:nth-of-type(1)');

var buttonOff2  = document.querySelector('.buttonOff2');
var buttonOn2 = document.querySelector('.buttonOn2');
var article2	= document.querySelector('main article:nth-of-type(2)');

var buttonOff3  = document.querySelector('.buttonOff3');
var buttonOn3 = document.querySelector('.buttonOn3');
var article3	= document.querySelector('main article:nth-of-type(3)');

var buttonOff4  = document.querySelector('.buttonOff4');
var buttonOn4 = document.querySelector('.buttonOn4');
var article4	= document.querySelector('main article:nth-of-type(4)');


function addOne1(){
	count += 1;
	countCircle.innerHTML = count;
	countCircle.classList.remove("displayNone");
	offlineLink.classList.remove("displayNone");

	buttonOff1.classList.add("displayNone");
	buttonOn1.classList.remove("displayNone");

	article1.classList.add("offlineOutline");
};


function subtractOne1(){
	count -= 1;
	countCircle.innerHTML = count;
	buttonOff1.classList.remove("displayNone");
	buttonOn1.classList.add("displayNone");
	article1.classList.remove("offlineOutline");



	if (count == 0){
	countCircle.classList.add("displayNone");
	offlineLink.classList.add("displayNone");
	}else{}

};

function addOne2(){
	count += 1;
	countCircle.innerHTML = count;
	countCircle.classList.remove("displayNone");
	offlineLink.classList.remove("displayNone");
	buttonOff2.classList.add("displayNone");
	buttonOn2.classList.remove("displayNone");
	article2.classList.add("offlineOutline");
};


function subtractOne2(){
	count -= 1;
	countCircle.innerHTML = count;
	buttonOff2.classList.remove("displayNone");
	buttonOn2.classList.add("displayNone");
	article2.classList.remove("offlineOutline");

	if (count == 0){
	countCircle.classList.add("displayNone");
	offlineLink.classList.add("displayNone");
	}else{}
};

function addOne3(){
	count += 1;
	countCircle.innerHTML = count;
	countCircle.classList.remove("displayNone");
	offlineLink.classList.remove("displayNone");
	buttonOff3.classList.add("displayNone");
	buttonOn3.classList.remove("displayNone");
	article3.classList.add("offlineOutline");
};


function subtractOne3(){
	count -= 1;
	countCircle.innerHTML = count;
	buttonOff3.classList.remove("displayNone");
	buttonOn3.classList.add("displayNone");
	article3.classList.remove("offlineOutline");


	if (count == 0){
	countCircle.classList.add("displayNone");
	offlineLink.classList.add("displayNone");
	}else{}
};

function addOne4(){
	count += 1;
	countCircle.innerHTML = count;
	countCircle.classList.remove("displayNone");
	offlineLink.classList.remove("displayNone");
	buttonOff4.classList.add("displayNone");
	buttonOn4.classList.remove("displayNone");
	article4.classList.add("offlineOutline");
};


function subtractOne4(){
	count -= 1;
	countCircle.innerHTML = count;
	buttonOff4.classList.remove("displayNone");
	buttonOn4.classList.add("displayNone");
	article4.classList.remove("offlineOutline");

	if (count == 0){
	countCircle.classList.add("displayNone");
	offlineLink.classList.add("displayNone");
	}else{}


};



buttonOff1.addEventListener('click', addOne1, false);
buttonOn1.addEventListener('click', subtractOne1, false);

buttonOff2.addEventListener('click', addOne2, false);
buttonOn2.addEventListener('click', subtractOne2, false);

buttonOff3.addEventListener('click', addOne3, false);
buttonOn3.addEventListener('click', subtractOne3, false);

buttonOff4.addEventListener('click', addOne4, false);
buttonOn4.addEventListener('click', subtractOne4, false);




