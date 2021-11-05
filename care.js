/*

	Chapter 8 Case Project 

    Author: Carla Cleghorn
    Date: 7-12-21

    Filename: care.js

*/









//global variable 
var myPlant;


//custom obj constructor with a property for each feild of input 
function Plant(name, plant, reason){
	this.yourName = name; 
	this.plantName = plant;
	this.plantReason = reason; 
}

//function to assign user input to a variable 
function createPlant(){
	var yourName = document.getElementById("yname").value;
	var plantName = document.getElementById("pname").value;
	var plantReason = document.getElementById("reason").value;
	//create new object 
	var addPlant = new Plant(yourName, plantName, plantReason);
	
	//create object to find table and insert new row with the values pulled from input 
	var table = document.getElementById('plantDisplay');
	var addRow = table.insertRow();
		addRow.insertCell().innerText = yourName
		addRow.insertCell().innerText = plantName
		addRow.insertCell().innerText = plantReason
	//createPlantDisplay(addPlant)
}
/*
//displays global plant object on page
function displayPlant() {
	document.getElementById("plantDisplay").innerHTML = myPlant.yourName + "<br>" +
														myPlant.plantName;
}
//displays any pet object to a new document node on the page 
function createPlantDisplay(plant) {
	//creates new obj div element 
	var fragment = document.createElement("div");
	//adds newObject class name to div element 
	var classAttrib = document.createAttribute("class"); 
	classAttrib.value = "newObject";
	//sets the class attribute to div fragment
	fragment.setAttributeNode(classAttrib);

	//puts plant object information into the div tag innerHTML property 
	fragment.innerHTML = plant.yourName + "<br>" +
						 plant.plantName; 
	document.body.appendChild(fragment);

}

*/




















