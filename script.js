let humanScore = 0;
let computerScore = 0;

const divMatch = document.querySelector(".matchDisplay");
const rounds = document.querySelector(".rounds");
const divResults = document.createElement("div");
divResults.classList.add("divResults");




function getComputerChoice(){
    const minNum = Math.ceil(1);
  const MaxNum = Math.floor(3);
  const choice = Math.floor(Math.random() * (MaxNum - minNum + 1) + minNum); 
  switch (choice){
    case 1:
        return "Paper";
    case 2:
        return "Rock";
    case 3:
        return "Scissors";
  }
}
function playRound(hC){
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = hC.toLowerCase();
    console.log(computerChoice + " vs " + humanChoice)
    
    if(!(humanChoice == "rock"||humanChoice == "paper"||humanChoice == "scissors")){
        divResults.textContent = "INVALID CHOICE";
        divMatch.appendChild(divResults);
    }
    if(humanChoice == computerChoice){
        divResults.textContent = "TIE\nTry Again!!!";
        divMatch.appendChild(divResults);
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        divResults.textContent ="You won the Round!";
        divMatch.appendChild(divResults);
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
        divResults.textContent ="You lost the Round!";
        divMatch.appendChild(divResults);
    }
    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        divResults.textContent ="You won the Round!";
        divMatch.appendChild(divResults);
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
        divResults.textContent ="You lost the Round!";
        divMatch.appendChild(divResults);
    }
    if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        divResults.textContent ="You won the Round!";
        divMatch.appendChild(divResults);
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        divResults.textContent ="You lost the Round!";
    divMatch.appendChild(divResults);
    }
}
function playGame(hC){
    playRound(hC);
    
    rounds.textContent = `Current Scores~~~Human Score: ${humanScore}~~~Computer Score: ${computerScore}`
    
    if(humanScore == 5 || computerScore == 5){
    
    if(humanScore>computerScore){
        
        humanScore = 0;
        computerScore = 0;
        rounds.textContent = "Congratulation you beat the Computer!!";
    }
        else{
            humanScore = 0;
        computerScore = 0;
        rounds.textContent ="You lost to the Computer!!!";

        }}

}

const btn1 = document.querySelector(".Rock");
const btn2 = document.querySelector(".Paper");
const btn3 = document.querySelector(".Scissors");
btn1.addEventListener("click",function() {playGame("Rock")});
btn2.addEventListener("click",function() {playGame("Paper")});
btn3.addEventListener("click",function() {playGame("Scissors")});




