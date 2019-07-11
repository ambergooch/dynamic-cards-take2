import {createCardComponent, deleteCard, addCardToDom} from "./cards.js"

let cardInput = document.querySelector("#card-text-input")
let cardList = document.querySelector("#card-list")

document.querySelector("#card-text-btn").addEventListener("click", () => {
    let cardText = cardInput.value
    let newCard = createCardComponent(cardText)
    newCard.addEventListener("click", () => {
        deleteCard(cardList, event)
    })
    addCardToDom(cardList, newCard)
})