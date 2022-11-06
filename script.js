const diceImage = document.querySelector('.dice')

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

const player0ScoreTotal = document.querySelector('#score--0')
const player1ScoreTotal = document.querySelector('#score--1')
// const player0ScoreTotalID = document.getElementById('score--0')

const player0ScoreCurrent = document.querySelector('#current--0')
const player1ScoreCurrent = document.querySelector('#current--1')

const rollDiceBtn = document.querySelector('.btn--roll')
const holdScoreBtn = document.querySelector('.btn--hold')
const NewGame = document.querySelector('.btn--new')

player0ScoreTotal.textContent = 0
player1ScoreTotal.textContent = 0

diceImage.classList.add('hidden')

let currentScore = 0
let activePlayer = 0
let totalScore = [0, 0]

const changeActivePlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0

    activePlayer = activePlayer === 1 ? 0 : 1
    currentScore = 0

    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

rollDiceBtn.addEventListener('click', function () {
    // 1. Generate random number 1-6
    const dice = Math.trunc(Math.random() * 6) + 1

    // 2. Display dice picture according to number
    diceImage.classList.remove('hidden')
    diceImage.src = `dice-${dice}.png`

    // 3. Check if number is 1
    if (dice !== 1) {
        // if true -> add score to player
        currentScore += dice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
        // else -> change active player
        changeActivePlayer()
    }
})

holdScoreBtn.addEventListener('click', function () {
    // 1. change total score of active player in arrray of total scores
    totalScore[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer]

    // 2. Check if active player scored 100
    if (totalScore[activePlayer] >= 20) {
        // finish the game
    } else {
        // change active player
        changeActivePlayer()
    }
})

 NewGame.addEventListener('click', function() {
    currentScore = 0
    activePlayer = 0
    totalScore = [0, 0]

    player0ScoreTotal.textContent = 0
    player1ScoreTotal.textContent = 0

    player0.classList.add('player--active')
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
})