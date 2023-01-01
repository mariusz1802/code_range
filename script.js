const login = "a"
const password = "b"



const logowanie = new Promise((resolve,reject) => {
    resolve("Zalogowałes sie poprawnie");
    reject("Nie udało sie zalogowac")
})



logowanie.then((successMessage) => {
            console.log(`Jest! ${successMessage}`)
}).error(`Incorrect login or password`);