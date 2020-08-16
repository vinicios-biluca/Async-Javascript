console.log(`Start of Await Calls`);

//This Const Controls the Success Responses
const successName = true;
const successEmail = true;
const successSex = true;

//A Promise that Async returns a Name
function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (successName) {
                resolve('John Doe Junior')
            } else {
                reject('Sad :( Name not Founded')
            }
        }, 3500)
    })
}

//A Promise that Async returns an Email
function getEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (successEmail) {
                resolve('john_doe_jr@gmail.com')
            } else {
                reject('Sad :( Email not Founded')
            }
        }, 2500)
    })
}

//A Promise that Async returns a Sex
function getSex() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (successSex) {
                resolve('Male')
            } else {
                reject('Sad :( Sex not Founded')
            }
        }, 1500)
    })
}

async function getInformation() {
    try {
        let theName = await getName();
        let theEmail = await getEmail();
        let theSex = await getSex();

        let infoObject = {
            name: theName,
            email: theEmail,
            sex: theSex
        }

        console.log(infoObject);
    } catch (error) {
        console.log(error);
    }

}

getInformation();

console.log(`End of Await Calls`);