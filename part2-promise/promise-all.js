console.log(`Start of Promise All`);

//This Const Controls the Success Responses
const successName = true;
const successEmail = true;
const successSex = true;

//A Promise that Async returns a Name
const getName = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (successName) {
            resolve('John Doe Junior')
        } else {
            reject('Sad :( Name not Founded')
        }
    }, 3500)
})

//A Promise that Async returns an Email
const getEmail = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (successEmail) {
            resolve('john_doe_jr@gmail.com')
        } else {
            reject('Sad :( Email not Founded')
        }
    }, 2500)
})

//A Promise that Async returns a Sex
const getSex = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (successSex) {
            resolve('Male')
        } else {
            reject('Sad :( Sex not Founded')
        }
    }, 1500)
})

//Here we deal with all Pramise at once
let listOfPromises = [getName, getEmail, getSex];
Promise.all(listOfPromises)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });


console.log(`End of Promise All`);