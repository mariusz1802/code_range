const person = { 
name : 'John',
age : 30,
sayHello : function(greeting) {
  console.log(greeting + ', my name is ' + this.name);
}
};

const say = person.sayHello('Hi')




