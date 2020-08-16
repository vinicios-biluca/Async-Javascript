console.log(`Start of Callback Hell`);

//This Const Controls the Success Reponses
const success = true;

// The First Function get the User Unique Code
function getUserUniqueCode(user, onSucess, onError) {
    setTimeout(() => {
        console.log('Getting the userUniqueCode')
        let userUniqueCode = generatesUserUniqueCode(user);

        if (success) {
            onSucess(userUniqueCode);
        } else {
            onError('User Unique Code Not Founded', user);
        }

    }, 1500);
}

//The Second Function get the Health Ensurance Code
function getHealthEnsuranceCode(userUniqueCode, onSucess, onError) {
    setTimeout(() => {
        console.log('Getting the healthEnsuranceCode')
        let healthEnsuranceCode = generatesUserUniqueCode(userUniqueCode);

        if (success) {
            onSucess(healthEnsuranceCode);
        } else {
            onError('Health Ensurance Code Not Founded', userUniqueCode);
        }
    }, 1200);
}

//The Third Function get the Health Ensurance Value
function getHealthEnsuranceValue(healthEnsuranceCode, onSucess, onError) {
    setTimeout(() => {
        console.log('Getting the healthEnsuranceValue')
        let healthEnsuranceValue = (Math.random() * 1000).toFixed(2);

        if (success) {
            onSucess(healthEnsuranceValue);
        } else {
            onError('Health Ensurance Value Not Founded', healthEnsuranceCode);
        }
    }, 800);
}

// Our User John Doe
const userName = 'john_doe';

//Here we do our 'CallBack Hell'
const userUniqueCodeCall = getUserUniqueCode(userName, (userUniqueCode) => {
    getHealthEnsuranceCode(userUniqueCode, (healthEnsuranceCode) => {
        getHealthEnsuranceValue(healthEnsuranceCode, (healthEnsuranceValue) => {
            console.log('userUniqueCode:', userUniqueCode);
            console.log('healthEnsuranceCode:', healthEnsuranceCode);
            console.log('healthEnsuranceValue:', healthEnsuranceValue);
        }, (error) => {
            dealWithTheError(error);
        })
    }, (error) => {
        dealWithTheError(error);
    })
}, (error) => {
    dealWithTheError(error);
})

//Down here we have some helpfull Functions
function dealWithTheError(error) {
    console.error('Ops! Something Went Wrong! ERROR:', error);
}

function generatesUserUniqueCode(userUniqueCode) {
    return generatesUniqueCode(userUniqueCode)
}

function generatesUserUniqueCode(user) {
    return generatesUniqueCode(user);
}

function generatesUniqueCode(key) {
    let uniqueCode = [];
    for (var i = 0; i < 6; i++) {
        uniqueCode.push(String.fromCharCode((Math.random() * (91 - 65) + 65).toFixed(0)));
    }

    return uniqueCode.join("") + ":" + key;
}

console.log(`End of Callback Hell`);