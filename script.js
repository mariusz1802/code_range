//METHOD OF USAGE CALL AND APPLY METHODS


// 1. - Can be use in anonymous funcion where we have this assign to global object
// Thanks call method we can change context of this and assign to another object.
const marcin = {
  name : "Marcin",
  bike : "Ducati",
  show : function(){
    return console.log(`${this.name} bike is ${this.bike} `);
  }
}

const mariusz = {
  name : "Mariusz",
  bike : "Triumph"
};

const maniekBike = marcin.show.call(mariusz);

console.log(maniekBike)

marcin.show();


// 2. - Function call with arguments: call and apply enable pass arguments to function in the the form of table.
// We can also pass spread operator in this fucntion to achive the same effect

function sum(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];

const result = sum.apply(null, arr); // use in first argument null when you dont want to change context - work on this function;

const suma = sum(...arr)
console.log(suma);

// 3. - Use contrtuctor with another context  call and apply which enable call  object constructor with another context.
// Thanks this operation we can create another object on base existing prototype
// You can anchive the same result with call super() and assign contructor variables or methods in Class 

function Person(name, age){
  this.name = name;
  this.age = age;
}

function Employee(name, age, position) {
  Person.call(this, name, age);
  this.position = position;
}


const john = new Employee('Marcin', 20, 'Kurieros' );
console.log(john);


// 4. - U can use method base class in derived class: call and apply which enable call method from base class and derived class and pass arguments to them.


class Human {
  constructor(name) {
    this.name = name;
  }

sayHello(greeting){
  console.log(`${greeting}, ${this.name}`)
}
}


class Student extends Human {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  sayHelloClassroom(greeting) {
    super.sayHello.apply(this, [greeting]);
  }
}

const myStudent = new Student('John', 'A');

const JohnDoe = new Human("John");

const showGreeting = myStudent.sayHello(["john", " po polsku", "jaśko"]) // you can pass array of arguments
const showJohnGreting = JohnDoe.sayHello("manio", "jako", "tako") // only first argument come

console.log(showGreeting)





