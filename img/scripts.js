// JavaScript Document
x = 1;

function change_page(){
	if (x == allDivs.length){
		x = 1;
	}
	var allDivs = ["img1", "img2", "img3"];
	document.getElementById(allDivs[x]).style.display="block";	
	x ++
}