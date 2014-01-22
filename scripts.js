// JavaScript Document
function check_hash(){
	if(window.location.hash){
		change_page(String(window.location.hash).substring(1));
	}else{
		return;
	}
}

function change_page(div){
	var allDivs = ["home_container", "coding_container", "gui_container", "testing_container", "downloads_container"];
	var divID = String(div) + "_container";
	for(var x = 0; x < allDivs.length; x ++){
		if(allDivs[x] == divID){
			document.getElementById(allDivs[x]).style.display="block";
			window.location.hash = div;
			console.log("Hello");
		}else{
			document.getElementById(allDivs[x]).style.display="none";
			console.log(div);
		}
	}
	
}