var database= [
{
	username:"Kartikey",
	password:"password"
}
];

var newsFeed=[
{
	username:"Kartikey2",
	timeline:"Learning JavaScript"
},
{
	username:"User1",
	timeline:"exhuasted"
}




];

var usernamePrompt = prompt("Enter your username");
var passwordPrompt= prompt("Enter your password");

function signIn(user,pas) {
	if(user===database[0].username&& 
		pas=== database[0].password){
		console.log(newsFeed);
	}
else {
	alert("sorry wrong info");
}

}
 signIn(usernamePrompt,passwordPrompt);


var Daily=[

"eat",
"sleep",
"repeat",
];
for(var i = 0; i<Daily.length;i++){
	console.log(todos[i] + "1");
}
