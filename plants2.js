/*

    Chapter 1 Case Project 

    Author: Carla Cleghorn
    Date: 2-1-21

    Filename: index.html

  */

 //create function that checks the day of week and displays a message which reads the plant of the day on the home page 

 //create new function to determine the day of the week

function findDate(){
	//create a new date object with the current date and assigns it to variable d 
  	var d = new Date();
  	//creates a var array literal called weekday that contains values equating to the days of the week 
  	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  	//uses the getDay method to return the day of week from 0-6 and
  	// creates var n which stores the index of the weekday array corresponding to results of getDay method 
  	var n = weekday[d.getDay()];
  	//use a switch statement to check the value of var n against days of the week
  	//assign different messages to var text for each day
  	var s = " Hop on over to our shop to learn more about this awesome plant and see what else we've got growing!";
  	switch (n){
  	case "Sunday":
    	text = "It's Snake Plant Sunday!" + s;
    	break;
    case "Monday":
    	text = "It's Monstera Monday!" + s; 
    	break;
    	case "Tuesday":
    		text = "It's Tillansia Tuesday!" + s;
    		break;
    	case "Wednesday":
    		text = "Weeping Fig Wednesday!" + s ;
    		break;
    	case "Thursday":
    		text = "It's Tradescantia Thursday!" + s;
    		break;
    	case "Friday":
    		text = "It's Fiddle Leaf Fig Friday!" + s;
    		break;
    	case "Saturday":
    		text = "It's Schefflera Saturday!" + s ;
    	}
    //output the text assigned to var text as determined by the switch statement
	document.getElementById("day").innerHTML = text;
  }


  if (window.addEventListener) {
	window.addEventListener("load", findDate, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", findDate);
}
