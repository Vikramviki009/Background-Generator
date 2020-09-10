var css = document.querySelector('h3');
var color1 = document.querySelector("input[name='color1']");
var color2 = document.querySelector("input[name='color2']")
var body = document.querySelector('body');

color1.addEventListener("input", function(e){
	body.style.background= "linear-gradient(to bottom,"+color1.value+","+color2.value+")";
	css.textContent= body.style.background+";";
})

color2.addEventListener("input",function(e){
	body.style.background="linear-gradient(to bottom,"+color1.value+","+color2.value+")";
	css.textContent= body.style.background+";";
})


