console.log(`Start of Handled Promise`);

//This Const Controls the Success Reponses
const successNumbers = false;
const successLetters = false;

//This Function Returns a Promise
function getListOfNumbers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numbers = generatesNumbers();

            if (successNumbers) {
                resolve(numbers);
            } else {
                reject('Ops! Something Bad Happened Generatting the Numbers!');
            }
        }, 2000);
    });
}

//This Function Returns another Promise
function getListOfLetter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let letters = generatesLetters();
            if (successLetters) {
                resolve(letters);
            } else {
                reject('Ops! Something Bad Happened Generating The Letters!');
            }
        }, 2000);
    });
}

//Here we handle the Promises
getListOfNumbers()
    .then((listNumbers) => {
        console.log(listNumbers)
        getListOfLetter()
            .then((listLetters) => {
                console.log(listLetters)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    .catch((error) => {
        console.log(error)
    })

//Over here just some Helpfull Functions
function generatesNumbers() {
    let numbers = [];
    for (var i = 0; i < 12; i++) {
        numbers.push((Math.random() * 2000).toFixed(0));
    }
    return numbers;
}

function generatesLetters() {
    let letters = [];
    for (var i = 0; i < 12; i++) {
        letters.push(String.fromCharCode((Math.random() * (91 - 65) + 65).toFixed(0)));
    }
    return letters;
}

console.log(`End of Handled Promise`);