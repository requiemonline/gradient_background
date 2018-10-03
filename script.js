var clr1 = document.querySelector('.clr1');
var clr2 = document.querySelector('.clr2');
var body = document.getElementById('body');
var css = document.querySelector("h3");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ clr2.value 
	+ ", " 
	+ clr1.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

clr1.addEventListener("input", setGradient);

clr2.addEventListener("input", setGradient);