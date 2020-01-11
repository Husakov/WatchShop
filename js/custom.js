var visible = 0;
function displayMenu()
{
	document.getElementById("MMenu").style.left = "0px";
	visible = 1;
}

function CheckHide(){ 
	if(visible == 1){
		var hideMe = document.getElementById('MMenu');
        document.onclick = function(e){
            if(e.target.id !== 'hideMe'){
                hideMe.style.left = "-350px";
                visible = 0;
            }
        }
	}
	else if(visible == 0){
		document.onclick = function(e){
            if(e.target.id == 'hideMe'){
                hideMe.style.left = "0px";
                visible = 1;
            }
        }
	}
}

setInterval(CheckHide, 1500);

