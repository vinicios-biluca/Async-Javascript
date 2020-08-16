console.log(`Start of Simple Callback`);

//This Funcion simulates a Async Call. Example: An API that Returns a List a Cards
function getCardNumbers(user, callbackFuncion) {
    setTimeout(() => {
        let listCards = [
            { cardNumber: getRandomCardNumber() },
            { cardNumber: getRandomCardNumber() },
            { cardNumber: getRandomCardNumber() }
        ]
        callbackFuncion(listCards);
    }, 1000);
}

//This Funcion is Only used to Generate a Random Card Number
function getRandomCardNumber() {
    let randomNumber = Math.random();
    let randomNumberKilo = randomNumber * 1000000000;
    return randomNumberKilo.toFixed(0);
}

//This Function deals with the Callback Function
const searchForUserCards = getCardNumbers('john_doe', (listCards) => {
    listCards.forEach(card => {
        console.log(card.cardNumber);
    })
});

console.log(`End of Simple Callback`);