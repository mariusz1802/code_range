//Code with NullObject pattern:

//you need to use prefix "Null" when you use this pattern. This is very common thing to do.
class NullUser {
  //You dont gitve and properties because NullUser have some default properties
  constructor(id, name) {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);
  let name = "Guest";

  console.log("Hello " + name);

  if (user.hasAccess()) {
    console.log("yOU HAVE ACCESSS");
  } else {
    console.log("You are not allowed here");
  }
}
