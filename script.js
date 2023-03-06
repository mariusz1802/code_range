console.log("start");

function LoginUser(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: name, password: password });
    }, 2000);
  });
}

LoginUser("Mariusz", 1234)
  .then((user) => {
    console.log(user.name);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
