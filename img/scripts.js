// JavaScript Document
function change_page(div){
	var numDivs = 3;
	var x = Number(String(div.substring(1)));
	if (x == numDivs) {
		x = 1;
	}else {
		x ++;
	}
	for(var i = 1; i <= numDivs; i ++){
		var divID = "i" + String(i);
		if(i == x){
			document.getElementById(divID).style.display="block";
		}else {
			document.getElementById(divID).style.display="none";
		}
	}
}