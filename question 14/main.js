
var userName = prompt("who's there?", "");
if(userName == "Admin"){
	let userPassword = prompt("password", "");
	if (userPassword == "The Master"){
		alert("Welcome!");
	}
	else if (userPassword == null){
		alert("Cancelled");
	}
	else alert("Wrong Password");
} 
  else if (userName == null){
  	alert("Cancelled");
  }
  else alert("I dont know you!");
