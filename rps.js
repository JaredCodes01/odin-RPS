let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const myArr = ["Rock", "Paper", "Scissors"];


//console.log(playRound(playerSelection, computerSelection));

function computerPlay(){
    return myArr[~~(Math.random() * myArr.length)];
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Please select your item: Rock, Paper, or Scissors: ").toLowerCase();

    if (playerSelection == computerSelection){
        console.log("Tie Game!")
    }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        console.log("Computer wins!")
        computerScore++;
    }
    else {
        (console.log("You win!"))
        playerScore++;}
}

function game(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    console.log("final results are player: " + playerScore + " computer: " + computerScore)
}
game();