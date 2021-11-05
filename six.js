//create function to check validity + customize html validation 

function checkValidity(){
	var name = document.getElementById("name");
	if(name.validity.valueMissing) {
		name.setCustomValidity("Please enter your name.")
	}
}

//prevent form submission while empty 
function validateForm(evt){
	evt.preventDefault(); 

	var formIsValid = true;
	//check value of name to see if blank and display error if empty
	var name = document.getElementById("name");
	if (name.value === ""){
		document.getElementById("nameError").innerHTML = "Please enter your name.";
		//tells script form is invalid 
		formIsValid = false;
	}

	var email = document.getElementById("email");
	if (email.value === ""){
		document.getElementById("emailError").innerHTML = "Please enter your email.";
		//tells script form is invalid 
		formIsValid = false;
	}

	var plant = document.getElementById("plants");
	if (plant.value === "") {
		document.getElementById("plantError").innerHTML = "Please select a plant.";
		//tells script form is invalid 
		formIsValid = false;
	}


	var message = document.getElementById("message");
	if (message.value === ""){
		document.getElementById("messageError").innerHTML = "Please enter a message.";
		//tells script form is invalid 
		formIsValid = false;
	}


	//create reference to form 
	var myForm = document.forms[0];

	if(formIsValid) {
		myForm.submit();
	}


}
//creates event listener to run check validity when submit button clicked

function createEventListeners(){
	var submitButton = document.getElementById("submit");
	submitButton.addEventListener("click", validateForm, false);
} 

//implements createEventListeners

window.addEventListener("load",createEventListeners, false);