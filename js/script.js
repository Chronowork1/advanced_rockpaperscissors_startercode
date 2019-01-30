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
/* global $ */
$(document).ready(function(){
    //$().click(function(){
    //});
  function randomNumber(input){
    let randomNum = Math.floor(Math.random(input)*Math.floor(input)+1);
    return randomNum;
  }
  console.log(randomNumber(9));
  
  function randomGen(){
    if (randomNumber(9) <= 3){
      return "Rock";
    }else if(randomNumber(9) <= 6){
      return "Scissor";
    }else if (randomNumber(9) <= 9){
      return "Paper";
    }
  }
  
    var playerWin = 0;
    var computerWin = 0; 
    
  let Paper = document.getElementById('Paper');
  Paper.onclick = function(){
    let paper = "paper";
    let rock = "rock";
    let scissor = "scissor";
    let winnerText = " ";
    if(randomGen() === "Paper" && paper){
      winnerText = "It's a tie!";
    }else if(randomGen() === "Paper" && rock){
      winnerText = "Computer Wins!";
      computerWin += 1;
    }else {
      winnerText = "Player wins!";
      playerWin += 1 ;
    }
    $("#results").text(winnerText);
    $("#playerWin").html(playerWin);
    $("#computerWin").html(computerWin);
  };

  let Rock = document.getElementById('Rock');
  Rock.onclick = function(){
    let paper = "paper";
    let rock = "rock";
    let scissor = "scissor";
    let winnerText = " ";
    if(randomGen() === "Rock" && rock){
      winnerText = "It's a tie!";
    }else if(randomGen() === "Rock" && scissor){
      winnerText = "Computer Wins!";
      computerWin += 1;
    }else{
      winnerText = "Player wins!";
      playerWin += 1;
    }
  $("#results").text(winnerText);
  $("#playerWin").html(playerWin);
  $("#computerWin").html(computerWin);
  };
  
  let Scissor = document.getElementById('Scissor');
  Scissor.onclick = function(){
    let paper = "paper";
    let rock = "rock";
    let scissor = "scissor";
    let winnerText = " ";
    if(randomGen() === "Scissor" && scissor){
      winnerText = "It's a tie!";
    }else if(randomGen() === "Scissor" && paper){
      winnerText = "Computer Wins!";
      computerWin += 1;
    }else{
      winnerText = "Player wins!";
      playerWin += 1;
    }
    
  $("#results").text(winnerText);
  $("#playerWin").html(playerWin);
  $("#computerWin").html(computerWin);
  };
  
});
  /*function deciding(){
    let paper = "paper";
    let rock = "rock";
    let scissor = "scissor";
    let winnerText = " ";
    if(randomGen()==="Rock" && rock){
      winnerText="It's a tie!";
    }else if(randomGen()==="Rock" && paper){
      winnerText= "Player wins!";
    }else if(randomGen()==="Rock" && scissor){
      winnerText= "Computer Wins!";   
    }else if(randomGen()==="Paper" && rock){
      winnerText = "Computer Wins!";
    }else if (randomGen()=== "Paper" && paper){
      winnerText = "It's a tie!";
    }else if(randomGen()=== "Paper" && scissor){
      winnerText = "Player wins!";
    }else if(randomGen() === "Scissor" && rock){
      winnerText = "Player wins!";
    }else if (randomGen() === "Scissor" && paper){
      winnerText = "Computer wins";
    }else if (randomGen() === "Scissor" && scissor){
      winnerText = "It's a tie!";
    }
  }
  console.log(deciding());*/


//FUNCTIONS
/**/
//console.log(rps, kevin);
/*var rps= ["rock", "paper", "scissor"]*/    
/* $("#Click").click(function(){
    
var computerChoice= Math.random();

    if(computerChoice <=0.33){
        computerChoice = "paper";
    } else if (computerChoice <=0.66){
        computerChoice = "scissor";       
    } else {
        computerChoice = "rock";
    }

$("#computerChoice").text(computerChoice);

var player = $(".player").val();

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
    

    }else if (computerChoice === "scissor" && player === "scissor") {
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
   // $("#Winner").text(winnerText);
    //});
//});