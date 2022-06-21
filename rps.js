let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll(".button");
const container = document.querySelector("#results-container");

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();
        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5){
            if (playerScore > computerScore){
                console.log("Computer wins!")
            }
            else{
                console.log("You Win!")
            }
            resetGame();
        };
    });
});

const myArr = ["Rock", "Paper", "Scissors"];
//console.log(playRound(playerSelection, computerSelection));

function computerPlay(){
    return myArr[~~(Math.random() * myArr.length)];
}


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        displayResults("Tie Game!");
    }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
        displayResults("Computer wins!")
        computerScore = ++computerScore;
        keepCPUScore();
    }
    else {
        (displayResults("You win!"))
        playerScore = ++playerScore;
        keepPlayerScore();
    }
}

function displayResults(str){
    container.animate([{ opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });
    container.textContent = str;
}

function keepPlayerScore(){
    let playerScoreBox = document.querySelector("#player-score");

    playerScoreBox.animate([{ opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out", 
    });
    playerScoreBox.textContent = playerScore;
}

function keepCPUScore(){
    let computerScoreBox = document.querySelector("#computer-score");

    computerScoreBox.animate([{ opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out", 
    });
    computerScoreBox.textContent = computerScore;
}

function resetGame(){
    container.textContent = "";
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepCPUScore();
}

function game(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    console.log("final results are player: " + playerScore + " computer: " + computerScore)
}
game();