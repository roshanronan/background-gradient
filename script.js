var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var css=document.querySelector("h3");
var btn=document.querySelector(".btn");

function setgradient(){	
	body.style.background="linear-gradient(to right, "
	+color1.value +","+color2.value+")";

css.textContent = body.style.background + ";"
	//css.textContent=color1.value "," color2.value;
}
function randomColor(){
   color1.value='rgb(' + (Math.floor(Math.random() * 256)) 
   + ',' + (Math.floor(Math.random() * 256)) + ',' 
   + (Math.floor(Math.random() * 256)) + ')';
   color2.value='rgb(' + (Math.floor(Math.random() * 256)) 
   + ',' + (Math.floor(Math.random() * 256))
    + ',' + (Math.floor(Math.random() * 256)) + ')';
}


color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);
btn.addEventListener("click",randomColor);

