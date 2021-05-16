var operators = ['+', '-', 'x', '*', '/','&divide','&#247','\u00F7'];
//var dec =['.'];
var decapplied=false;
var livesrc = true;
var calc= false;
var operatorPr = false;
var inputmax= false;
var a = "";
var max='';


    function init(){
    livesrc = false;
	inputmax= false;
	a = document.getElementById('thumb').innerHTML.length;
	//max=document.getElementById('thumb').innerHTML.length-1;
	max+10
	calc=false;
	decapplied=false;
	document.getElementById('logo').style.color = 'white';
    document.getElementById('iec_power').style.color= 'red !important';
	iec_power.className="iec_power text-danger";
	//console.log("input lenght = "+a);
	//console.log(max);
	}
	function maX(){
		if (inputmax===false) {
	document.getElementById('thumb').innerHTML.length=0;
} 
if (inputmax===true) {
	document.getElementById('thumb').innerHTML.length=10;
}
	}

function powerOn() {
	livesrc = true;
	calc=false;
	X(false);
	decapplied=false;
	inputmax= false;
 document.getElementById('thumb').innerHTML  = "0" ;
 document.getElementById('screen').style.backgroundColor = 'turquoise';
 document.getElementById('logo').classList.add("animated","bounceIn","infinite","neon");
 logo.style.color='turquoise';
  iec_power.className="iec_power text-turquoise";
  //console.log(a);
 }

function powerOff() {
	init();
	livesrc = false;
document.getElementById('thumb').innerHTML  = "" ;
document.getElementById('screen').style.backgroundColor = '#c3c2ab';
document.getElementById('logo').style.color = 'white';
document.getElementById('pWr').style.color = 'white'
ans.innerHTML="";
document.getElementById('iec_power').classList.add("text-danger");
logo.classList.remove("animated","bounceIn","infinite","neon");
iec_power.className="iec_power text-danger";

}

 function numerO(num){
 	if (livesrc === false)thumb.innerHTML= '';
	
	 document.getElementById('thumb').innerHTML.length;
if (livesrc === true){
max=10;
 if (thumb.innerHTML === '0')thumb.innerHTML= '';
//thumb.innerHTML += num;
if (calc==false && document.getElementById('thumb').innerHTML.length==max) {
	alert("Max input reached"); 
	//thumb.innerHTML += '';
	inputmax=true;
	}

if(calc===false && inputmax===false){
thumb.innerHTML += num;
operatorPr=false;}
else if(calc==false && inputmax==true){
	
	thumb.innerHTML += '';
}else if (calc===false && inputmax===false && operatorPr==true){
	document.getElementById("thumb").innerHTML.length=0;
}
else{
	reseT();
	thumb.innerHTML += num;
	calc=false;
	X(false);
	inputmax=false;
operatorPr=false;
}
}
console.log(document.getElementById('thumb').innerHTML.length);
//console.log(document.getElementById('thumb').innerHTML.length-1);
//console.log(max);
 }

function btnPlus() {
	if (livesrc === false)thumb.innerHTML= '';
if (livesrc === true){
	var decapplied = false;
	console.log("decapplied is"+ decapplied);
	//inputmax=false;
	//var ab= thumb.innerHTML.length;
//if ( document.getElementById('thumb').innerHTML.length =>10){
	//thumb.innerHTML.length = 0;
document.getElementById('thumb').innerHTML.length=0;
	inputmax=false;
	operatorPr=true;
//}

	calc=false;
	X(false);
	decapplied=false;
	if (thumb.innerHTML === '0')return thumb.innerHTML += "";
	if(operators.indexOf('+') > -1) {
			var lastChar =thumb.innerHTML[thumb.innerHTML.length - 1];

			if(thumb.innerHTML != '' && operators.indexOf(lastChar) == -1)
				thumb.innerHTML += '+';
			inputmax= false;
      if(lastChar=='-'||'*'||'&divide'){cleaR();thumb.innerHTML+='+';
	  inputmax= false;}
if (thumb.innerHTML === '')return;

}
}
 console.log("decapplied is"+ decapplied);
}

function btnSub() {
	if (livesrc === false)thumb.innerHTML= '';
if (livesrc === true){
	calc=false;
	X(false);
	decapplied=false;
	if (thumb.innerHTML === '0')return thumb.innerHTML = "-";
	if(operators.indexOf('-') > -1) {
			var lastChar =thumb.innerHTML[thumb.innerHTML.length - 1];

					if(thumb.innerHTML != '' && operators.indexOf(lastChar) == -1)
				thumb.innerHTML += '-';
      if(lastChar=='&divide'||'*'||'+'){cleaR();thumb.innerHTML+='-';}
	if(thumb.innerHTML == '') return thumb.innerHTML += "-";
}
}
}

function btnMult() {
	if (livesrc === false)thumb.innerHTML= '';
if (livesrc === true){
	calc=false;
	X(false);
	decapplied=false;
	if (thumb.innerHTML === '0')return;
	if(operators.indexOf('*') > -1) {
			var lastChar =thumb.innerHTML[thumb.innerHTML.length - 1];
			if(thumb.innerHTML != '' && operators.indexOf(lastChar) == -1)
				thumb.innerHTML += '*';
      if(lastChar=='-'||'+'||'&divide'){cleaR();thumb.innerHTML+='*';}
	if(thumb.innerHTML == '') return ;
}
}
}

function btnDiv() {
	calc=false;
	X(false);
	if (livesrc === false)thumb.innerHTML= '';
if (livesrc === true){
	if (thumb.innerHTML === '0')return;
    if(operators.indexOf('&divide') > -1) {
			var lastChar =thumb.innerHTML[thumb.innerHTML.length - 1];

					if(thumb.innerHTML != '' && operators.indexOf(lastChar) == -1)
				thumb.innerHTML += '&divide';
      if(lastChar=='-'||'*'||'+'){cleaR();thumb.innerHTML+='&divide';}
			decapplied=false;
	if(thumb.innerHTML == '') return ;
}
}
}

function btnDec() {
	calc=false;
	if (livesrc === false)thumb.innerHTML= '';
if (livesrc === true && decapplied==false) {
	  //if (thumb.innerHTML.indexOf('.')  == 1/*=== -1*/)

		//  var lastChar =thumb.innerHTML[thumb.innerHTML.length - 1];

			//		if(thumb.innerHTML != '' && dec.indexOf(lastChar) == -1)
				thumb.innerHTML += '.';
  //if(thumb.innerHTML[thumb.innerHTML.length - 1] ==['/','-','*','/','+']){ return "0."};

			if(thumb.innerHTML == '') return  "0.";
			decapplied=true
				//if (calc==true && thumb.innerHTML.indexOf('.')  == -1){
		//decapplied=false;
//}
			//if(thumb.innerHTML != '' && operators.indexOf(lastChar) == 0)
				//thumb.innerHTML += '';
//document.getElementById('thumb').innerHTML += ".";
}
if (livesrc === true && decapplied==true && thumb.innerHTML.indexOf(['+', '-', 'x', '*', '/','&divide','&#247','\u00F7']) !== -1 ){
	decapplied = false
	return ".";
}
}

function calC() {
	if (livesrc === false)thumb.innerHTML= '';

if (livesrc === true){
//var a =thumb.innerHTML;
//var b = a.replace(/\u00F7/g, '/');
//var c=thumb.innerHTML = eval(b);
ans.innerHTML=eval(thumb.innerHTML.replace(/\u00F7/g, '/'));
calc=true;
X(true);
//dec=false;
}

}
function X(answer){
switch (answer) {
  case true:
    //text = "Off";
    break;
  case false:
    //alert("On");
	document.getElementById('ans').innerHTML  = "";
	break;
  default:
    //text = "No value found";
}
}
function cleaR(){
	if (decapplied===true && thumb.innerHTML.indexOf('.') == -1){
		decapplied=false;
		alert("hi");
}  
	calc=false;
	X(false);
	thumb.innerHTML= thumb.innerHTML.substring(0,thumb.innerHTML.length-1);
	if (thumb.innerHTML.length === 0){
		thumb.innerHTML="0";
		
	}
	  console.log(decapplied);
}
function reseT(){
	X(false);
	calc=false;
	decapplied=false;
	document.getElementById('thumb').innerHTML  = "" ;
}
window.onload = init;