let humanScore = 0;
let computerScore = 0;
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
function getHumanChoice(){
    
    return prompt("Rock..Paper...Scissors...Shoot!!! What do you Choose?");
    

}
function playRound(){
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();
    

    if(humanChoice == computerChoice){
        console.log("TIE\nTry Again!!!")
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
    }
    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
    }
    if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
    }
}
function playGame(){
    let roundNum = 0;
while(roundNum < 5){
playRound();
console.log("Current Scores:\n"+"Human Score:"+ humanScore+"\nComputer Score:"+computerScore);
roundNum++;
}
if(humanScore==computerScore){
    console.log("No Winner");
}
if(humanScore>computerScore){
    console.log("Congratulation you beat the Computer!!");
}
else{
    console.log("You lose!!!");

}

}
playGame();

