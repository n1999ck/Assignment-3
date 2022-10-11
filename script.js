//array of taken usernames to check against
const usernames = ["Harry",  "Elizabeth", "Shana"];

function validateForm(){

	//Get all variables from document
	let un = document.forms["form"]["username"].value;
	let password = document.forms["form"]["password"].value;
	let repeatPassword = document.forms["form"]["repeatPassword"].value;
	
	if (usernames.includes(un)){ //check if username is taken
		alert("Please use a different username!");
		return false;
	}else if (password !== repeatPassword) { //check if passwords match
		alert("Passwords didn't match!");
		return false;
	}else{
		return true;
	}	
}
