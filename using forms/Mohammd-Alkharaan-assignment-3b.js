//Alkharaan, Mohammd  CPS 330 Assignment #3B.

function isBlank(inputField){
	// isBlank function to check the feilds
	//return boolean
	if (inputField.value==""){
	return true;
	}
	return false;
}

window.onload = function(){ // main function.
	mainForm.onsubmit = function(e){
		// first listener to prevent action on form submission. and change fields color.
		var requiredInputs = document.querySelectorAll(".required");
		for (var i=0; i < requiredInputs.length; i++){ //start of for loop
			if (isBlank(requiredInputs[i]) ){
				// if statement to check fields and change thier colors.
				e.preventDefault();
				requiredInputs[i].style.backgroundColor = "#AA0000";
				requiredInputs[i].parentNode.style.backgroundColor = "#AA0000";
				requiredInputs[i].parentNode.style.color = "#FFFFFF";
			}
			if (requiredInputs[i].type =="checkbox"){
				// if to check the checkbox and change its color.
				var chceckBoxValue = requiredInputs[i];
				if (chceckBoxValue.checked!=true){
					e.preventDefault();
					requiredInputs[i].style.backgroundColor = "#AA0000";
					requiredInputs[i].parentNode.style.backgroundColor = "#AA0000";
					requiredInputs[i].parentNode.style.color = "#FFFFFF";;} // end of if statement.
			} // end of if stastement.
	} // end of for loop.
}
// another listener to change the fields color on focus.
var requiredInputs = document.querySelectorAll(".required");
for (var i=0; i < requiredInputs.length; i++){
	requiredInputs[i].onfocus = function (){ //start of for loop.
		this.style.backgroundColor = "#EEEE00";
	}
} // end of for loop

} //end of main function.
