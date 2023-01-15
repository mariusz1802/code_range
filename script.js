//Code without NullObject pattern:
/*We need a lot of if statments to check is user exist thats can provide additional problems on the web.
 scriptNullUser.js is file with same example but with NullObject pattern */
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bob";
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUser(id);
  let name = "Guest";
  if (user != null && user.name != null) name = user.name;
  console.log("Hello " + name);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("yOU HAVE ACCESSS");
  } else {
    console.log("You are not allowed here");
  }
}
