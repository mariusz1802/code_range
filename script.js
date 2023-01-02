console.log("Start");

//instead of giving return I gave callback function
//thanks callback function we can handle asynchronious function

const login = (name, password, callback) => {
    setTimeout(() => {
        console.log("Now we  have the data")
        callback({userName : name})
    }, 2000);
}


const newUser = login("TomaszChic", 12345, (user)=> { console.log(user)});



console.log("End");