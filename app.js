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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })
        //Computer Option
        const computerOption = ["rock", "paper", "scissors"];

        options.forEach(option => {
         option.addEventListener("click", function(){
            // Computer Choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOption[computerNumber];
            // Here is Where We Call Compare Hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            //Add Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
         });
        });
       
        const updateScore = () => {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('computer-score p');
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }
        const compareHands = (playerChoice, computerChoice) => {
          //Update Text
          const winner = document.querySelector(".winner");
          //Cheaking for a Tie
          if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
          } 
          //Check For Rock
          if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Players Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
          }
                    //Check For Paper
                    if(playerChoice === 'paper'){
                        if(computerChoice === 'scissors'){
                            winner.textContent = 'Computer Wins';
                            cScore++;
                            updateScore();
                            return;
                        }else{
                            winner.textContent = 'Players Wins';
                             pScore++;
                             updateScore();
                            return;
                        }
                      }
                  //Check For Scissors
                  if(playerChoice === 'scissors'){
                    if(computerChoice === 'rock'){
                        winner.textContent = 'Computer Wins';
                        cScore++;
                        updateScore();
                        return;
                    }else{
                        winner.textContent = 'Players Wins';
                        pScore++;
                        updateScore();
                        return;
                    }
                  }
        }
    }
    //Is Call the Inner Function
    startGame();
    playMatch();
};

//Start the Game Function
game();