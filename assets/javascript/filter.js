var score1 = document.querySelector('.filters section ul li:nth-of-type(1)');
var score2 = document.querySelector('.filters section ul li:nth-of-type(2)');
var score3 = document.querySelector('.filters section ul li:nth-of-type(3)');
var score4 = document.querySelector('.filters section ul li:nth-of-type(4)');
var score5 = document.querySelector('.filters section ul li:nth-of-type(5)');

var read1 = document.querySelector('.filters section:nth-of-type(2) ul li:nth-of-type(1)');
var read2 = document.querySelector('.filters section:nth-of-type(2) ul li:nth-of-type(2)');
var read3 = document.querySelector('.filters section:nth-of-type(2) ul li:nth-of-type(3)');
var read4 = document.querySelector('.filters section:nth-of-type(2) ul li:nth-of-type(4)');
var read5 = document.querySelector('.filters section:nth-of-type(2) ul li:nth-of-type(5)');

function selectScore1(){
	score1.classList.add("selected");
	score2.classList.remove("selected");
	score3.classList.remove("selected");
	score4.classList.remove("selected");
	score5.classList.remove("selected");
};

function selectScore2(){
	score1.classList.remove("selected");
	score2.classList.add("selected");
	score3.classList.remove("selected");
	score4.classList.remove("selected");
	score5.classList.remove("selected");
};

function selectScore3(){
	score1.classList.remove("selected");
	score2.classList.remove("selected");
	score3.classList.add("selected");
	score4.classList.remove("selected");
	score5.classList.remove("selected");
};

function selectScore4(){
	score1.classList.remove("selected");
	score2.classList.remove("selected");
	score3.classList.remove("selected");
	score4.classList.add("selected");
	score5.classList.remove("selected");
};

function selectScore5(){
	score1.classList.remove("selected");
	score2.classList.remove("selected");
	score3.classList.remove("selected");
	score4.classList.remove("selected");
	score5.classList.add("selected");
};

score1.addEventListener('click', selectScore1, false);
score2.addEventListener('click', selectScore2, false);
score3.addEventListener('click', selectScore3, false);
score4.addEventListener('click', selectScore4, false);
score5.addEventListener('click', selectScore5, false);


function selectRead1(){
	read1.classList.add("selected");
	read2.classList.remove("selected");
	read3.classList.remove("selected");
	read4.classList.remove("selected");
	read5.classList.remove("selected");
};

function selectRead2(){
	read1.classList.remove("selected");
	read2.classList.add("selected");
	read3.classList.remove("selected");
	read4.classList.remove("selected");
	read5.classList.remove("selected");
};

function selectRead3(){
	read1.classList.remove("selected");
	read2.classList.remove("selected");
	read3.classList.add("selected");
	read4.classList.remove("selected");
	read5.classList.remove("selected");
};

function selectRead4(){
	read1.classList.remove("selected");
	read2.classList.remove("selected");
	read3.classList.remove("selected");
	read4.classList.add("selected");
	read5.classList.remove("selected");
};

function selectRead5(){
	read1.classList.remove("selected");
	read2.classList.remove("selected");
	read3.classList.remove("selected");
	read4.classList.remove("selected");
	read5.classList.add("selected");
};

read1.addEventListener('click', selectRead1, false);
read2.addEventListener('click', selectRead2, false);
read3.addEventListener('click', selectRead3, false);
read4.addEventListener('click', selectRead4, false);
read5.addEventListener('click', selectRead5, false);
