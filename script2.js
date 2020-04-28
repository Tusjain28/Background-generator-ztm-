var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var h3= document.querySelector("h3");
var body=document.getElementById("gradient");

function colgrid()
{
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent = body.style.background + ";";
}
 color1.addEventListener("input", colgrid);
 color2.addEventListener("input",colgrid);