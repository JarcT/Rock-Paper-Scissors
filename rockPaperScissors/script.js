//icons list

const computerSigns = {
    PAPER:'<i class="fa-solid fa-hand"></i>', 
    ROCK:'<i class="fa-solid fa-hand-back-fist"></i>',
    SCISSORS: '<i class="fa-solid fa-hand-scissors"></i>'};
const playerSigns = {
    PAPER:'<i class="fa-solid fa-hand fa-flip-horizontal"></i>', 
    ROCK: '<i class="fa-solid fa-hand-back-fist fa-flip-horizontal"></i>', 
    SCISSORS: '<i class="fa-solid fa-hand-scissors fa-flip-horizontal"></i>'};

//selectors
const playerHand = document.querySelector('.hand-player');
const computerHand = document.querySelector('.hand-computer');
const playerScore = document.querySelector('.score-player')
const computerScore = document.querySelector('.score-computer')

// inital variables
let btns = [...document.querySelectorAll('.btn')];
let hands = [...document.querySelectorAll('.hand')];
let initialPlayerScore = 0
let initialComputerScore = 0



// start the animation when player chooses his hand
function animation(hands) {
    hands.forEach(function(hand) {
        hand.classList.remove('ani');
        hand.classList.add('start-ani');
    });
};

// computer chooses random hand sign
function randomResult() {
    let randomNum = Math.floor(Math.random() * 3);
    const object = Object.keys(computerSigns);
    return  compChosen = object[randomNum]
};

// ******************** game logic *********************
function gameLogic(chosen, gameChosen) {
    // it's a tie
    if(chosen === gameChosen) {
        console.log("it's a tie")
    }
    // player wins
    if((chosen === 'ROCK' && compChosen === 'SCISSORS') ||
    (chosen === 'PAPER' && compChosen === 'ROCK') ||
    (chosen === 'SCISSORS' && compChosen === 'PAPER')) {
        playerScore.innerHTML = `<h3>Player: ${initialPlayerScore += 1}</h3>`
        console.log('player Won')
    }
    // comp wins
    if((chosen === 'SCISSORS' && compChosen === 'ROCK') ||
    (chosen === 'ROCK' && compChosen === 'PAPER') ||
    (chosen === 'PAPER' && compChosen === 'SCISSORS')) {
        computerScore.innerHTML = `<h3>Computer: ${initialComputerScore += 1}</h3>`
        console.log('comp won')
    }
};

// reset to the initial state
function normalize(hands) {
    hands.forEach(function(hand) {
        hand.classList.remove('start-ani');
        hand.classList.add('ani');
        playerHand.innerHTML = `<i class="fa-solid fa-hands fa-flip-horizontal"></i>`;
        computerHand.innerHTML = `<i class="fa-solid fa-hands"></i>`;
    });
}

// ***************** main function *******************

btns.forEach(function(btn) {
    btn.addEventListener('click', function(clicked) {
        let chosen = clicked.target.textContent; 
        animation(hands)
        setTimeout(function() {
            randomResult()
            playerHand.innerHTML = `${playerSigns[chosen]}`;
            computerHand.innerHTML = `${computerSigns[compChosen]}`;
            gameLogic(chosen, compChosen)
            setTimeout(function() {
                normalize(hands)
            }, 2000)
        },2000)
    });
});
