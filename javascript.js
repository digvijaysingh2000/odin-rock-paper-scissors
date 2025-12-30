function getComputerChoice(){
    let rand=Math.random();
    if(rand<1/3) return "rock";
    else if(rand>2/3) return "paper"
    else return "scissors"
}

function getHumanChoice(){
    return prompt("rock, paper or scissors?");
}

function playGame(){
    let humanScore=0, computerScore=0;

    let playRound=function(humanChoice,computerChoice){
        humanChoice.toLowerCase();
        if(humanChoice==computerChoice) console.log('Tie!');
        else if(humanChoice=='rock'){
            if(computerChoice=='paper'){
                console.log('You lose! Paper beats Rock')
                computerScore++;
            }
            else if(computerChoice=='scissors'){
                console.log('You win! Rock beats Scissors')
                humanScore++;
            }
        }
        else if(humanChoice=='paper'){
            if(computerChoice=='rock'){
                console.log('You win! Paper beats Rock')
                humanScore++;
            }
            else if(computerChoice=='scissors'){
                console.log('You lose! Scissors beats Paper')
                computerScore++;
            }
        }
        else {
            if(computerChoice=='rock'){
                console.log('You lose! Rock beats Scissors')
                computerScore++;
            }
            else if(computerChoice=='paper'){
                console.log('You win! Scissors beats Paper')
                humanScore++;
            }
        }
    }

    for(let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore==computerScore) console.log("Tie!");
    else (humanScore>computerScore)?console.log("You Win!"):console.log("Computer Wins!");
    
}

playGame();