console.log(`Start of Simple Promise`);

//This Function Returns a Simple Promise
function getCustomersInitials() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let customersInitials = [];
            for (var i = 0; i < 5; i++) {
                customersInitials.push({ name: `Customer ${i}`, initials: generatesInitials() })
            }
            resolve(customersInitials);
        }, 2000);
    });
}

//Here we Deals with our Promise
getCustomersInitials().then(response => {
    response.forEach(customer => {
        console.log(customer.name, customer.initials);
    })
});

//Just a Helpfull Function
function generatesInitials() {
    let uniqueCode = [];
    for (var i = 0; i < 2; i++) {
        uniqueCode.push(String.fromCharCode((Math.random() * (91 - 65) + 65).toFixed(0)));
    }
    return uniqueCode.join("");
}

console.log(`End of Simple Promise`);