let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("msg-to-player-element")
let sumEl = document.getElementById("sum-element")
let cardsEl = document.getElementById("cards-element")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0;i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else{
        message = "You've lost the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}