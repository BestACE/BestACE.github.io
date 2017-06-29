var OvegL = document.getElementsByClassName("left")[0];
//左按钮1
var OvegR = document.getElementsByClassName("right")[0]
//右按钮1
var OveP = document.getElementsByClassName("TransformContainer")[0];

//上按钮
var OvegU = document.getElementsByClassName("up")[0];
//下按钮
var OvegD = document.getElementsByClassName("down")[0];
var OvegP2 = document.getElementsByClassName("vegetable-center")[0];

//左按钮2
var OderL=document.getElementsByClassName("left1")[0];
//右按钮2
var OderR=document.getElementsByClassName("right1")[0];
var OderP=document.getElementsByClassName("dessertContainer")[0];

var pos = 0;
var posi=0;
var po=0;

//向左翻1

OvegL.addEventListener("click", function() {
	
	if (pos == 0) {
		return false;
	}
	pos += 1000;
	OveP.style.transform = "translate(" + pos + "px,0)";
	
});


//向右翻1

OvegR.addEventListener("click", function() {
	
	if (pos == -1000) {
		return false;
	}
	pos -= 1000;
	OveP.style.transform = "translate(" + pos + "px,0)";
	
});


//向上翻

OvegU.addEventListener("click", function() {
	
	if (posi == 0) {
		return false;
	}
	posi += 530;
	OvegP2.style.transform = "translate(0," + posi + "px)";
	
});


//向下翻

OvegD.addEventListener("click", function() {
	
	if (posi == -530) {
		return false;
	}
	posi -= 530;
	OvegP2.style.transform = "translate(0," + posi + "px)";
	
});

//向左翻2
OderL.addEventListener("click",function(){
	if (po == 0) {
		return false;
	}
	po += 1000;
	OderP.style.transform = "translate(" + po + "px,0)";
});

//向右翻
OderR.addEventListener("click", function() {
	if (po == -1000) {
		return false;
	}
	po -= 1000;
	OderP.style.transform = "translate(" + po + "px,0)";
	
});