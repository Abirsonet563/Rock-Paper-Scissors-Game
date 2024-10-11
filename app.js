const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',() =>{
           introScreen.classList.add('fadeOut');
           match.classList.add('fadeIn');
        });
    };
   //play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand');

        //Computer Option
        const computerOption = ["rock", "paper", "scissors"];

        options.forEach(option => {
         option.addEventListener("click", function(){
            // Computer Choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOption[computerNumber];
            // Here is Where We Call Compare Hands


            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
         });
        });

        const compareHand = (playerChoice, computerChoice) => {
          //Update Text
          const winner = document.querySelector('.winner');
          //Cheaking for a Tie
          if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
          } 
          //Check For Rock
          if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Players Wins'
                return;
            }else{
                winner.textContent = 'Computer Wins'
                return;
            }
          }
                    //Check For Paper
                    if(playerChoice === 'paper'){
                        if(computerChoice === 'scissors'){
                            winner.textContent = 'Computer Wins'
                            return;
                        }else{
                            winner.textContent = 'Players Wins'
                            return;
                        }
                      }
                  //Check For Scissors
                  if(playerChoice === 'scissors'){
                    if(computerChoice === 'rock'){
                        winner.textContent = 'Computer Wins'
                        return;
                    }else{
                        winner.textContent = 'Players Wins'
                        return;
                    }
                  }
        }
    }
    //Is Call the Inner Function
    startGame();
    playMatch();
}

//Start the Game Function
game();