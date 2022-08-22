var userChoice = prompt("Let's play a game! Please, make a choise: rock, paper or scissors".toLowerCase())

var compare = function(userChoice, computerChoice) 
{
    if (userChoice === computerChoice) {
        var userChoice = prompt("You have the same choise like a computer! The result is a tie! Please make a new choice.");
        }
else if(userChoice === "rock") {
    if(computerChoice === "scissors"){
    return "rock wins";
}
else {
    return "paper wins";}
}
else if(userChoice === "paper") {
    if(computerChoice === "rock") {
    return "paper wins";
}
else {
    return "scissors wins";}
}    
else if(userChoice === "scissors") {
    if(computerChoice === "rock") {
    return "rock wins";
}
else {
    return "scissors wins";}}}
    
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
compare(userChoice,computerChoice)
alert("Computer choice is: "  + computerChoice);
alert("User choice is: "  + userChoice.toLowerCase());
alert(compare(userChoice.toLowerCase(),computerChoice));
