
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

function drawText(){
	const canvas = document.getElementById("theCanvas");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
			ctx.fillStyle = "#FFF";
			ctx.font = "30px sans-serif";
			ctx.fillText("I'm an HTML", 10, 30);
			ctx.fillText("canvas for ",10, 60);
			ctx.fillText("ultra modern art.", 10, 90);
        }
	
}
