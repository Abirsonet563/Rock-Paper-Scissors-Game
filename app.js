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
            // console.log(this);
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOption[computerNumber];
            console.log(computerChoice);
         });
        });

    }
    //Is Call the Inner Function
    startGame();
    playMatch();
}

//Start the Game Function
game();