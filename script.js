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
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if(humanChoice == computerChoice){
        humanScore+=0;
        computerScore+=0;
    }
    if(humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore+=1;
    }
    else if(computerChoice == "Rock" && humanChoice == "Scissors"){
        computerScore+=1;
    }
    if(humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore+=1;
    }
    else if(computerChoice == "Paper" && humanChoice == "Rock"){
        computerScore+=1;
    }
    if(humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore+=1;
    }
    else if(computerChoice == "Scissors" && humanChoice == "Paper"){
        computerScore+=1;
    }
}
playRound();
console.log("Current Scores:\n"+"Human Score:"+ humanScore+"\nComputer Score:"+computerScore);