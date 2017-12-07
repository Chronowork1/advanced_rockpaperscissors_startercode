//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
// DOCUMENT READY FUNCTION

$(document).ready(function(){
//FUNCTIONS


    
    
// Chances of divinding.

    
/**/
//console.log(rps, kevin);
/*var rps= ["rock", "paper", "scissor"]*/    

$("#Click").click(function() {
//
    var computerChoice= Math.random()
   if(computerChoice <=0.33){
    computer = "Paper";
    } else if (computer <=0.66){
    computer = "scissor";       
    } else {
    computer = "rock";
    };

var computerChoice = $(".computerChoice").val();
var player = $(".player").val();
    
    //var winnerText = "not sure yet";

    if(computerChoice === "rock" && player === "rock") {
        winnerText = "It's a tie!";
    } else if (computerChoice === "rock" && player === "paper") {
        winnerText = "Player wins!";
    } else if (computerChoice === "rock" && player === "scissor") {
        winnerText = "computer wins!";
        
    } else if (computerChoice === "paper" && player === "paper") {
        winnerText = "It's a tie!";
    } else if (computerChoice === "paper" && player === "rock") {
        winnerText = "computer wins!";
    } else if (computerChoice === "paper" && player === "scissor") {
        winnerText = "Player wins!";
    }
    
    else if (computerChoice === "scissor" && player === "scissor") {
        winnerText = "It's a tie!";
    } else if (computerChoice === "scissor" && player === "paper") {
        winnerText = "computer wins!";
    } else if (computerChoice === "scissor" && player === "rock") {
        winnerText = "Player wins!";
    }
    /* else if (...) {
        Add conditionals for all the other possibilities
    } */
    
    // show the winner text on the page
    $("#winner").text(winnerText);
    });
});