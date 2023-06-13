class Pancake {
  constructor() {
    this.ingridients = ["cake"];
    this.price = 10;
  }
  getSetItems() {
    return this.ingridients;
  }
  getPrice() {
    return this.price;
  }
}

class SetAddOn {
  constructor(cakeSet) {
    this.ingridients = [];
    this.price = 0;
    this.cakeSet = cakeSet;
  }
  getSetItems() {
    return [...this.cakeSet.getSetItems(), ...this.ingridients];
  }

  getPrice() {
    return this.cakeSet.getPrice() + this.price;
  }
}

class Strawberry extends SetAddOn {
  constructor(cakeSet) {
    super();
    this.ingridients = ["strawberries"];
    this.price = 3;
    this.cakeSet = cakeSet;
  }
}

class whippedCream extends SetAddOn {
  constructor(cakeSet) {
    super();
    this.ingridients = ["whippedCream"];
    this.price = 4;
    this.cakeSet = cakeSet;
  }
}

console.log("1. Pancake only");
const pancakeSet = new Pancake();
console.log(pancakeSet.getSetItems());
console.log("Price: ", pancakeSet.getPrice());

console.log("2. Pancace set with strawberries");
const withStrawBerries = new Strawberry(pancakeSet);
console.log(withStrawBerries.getSetItems());
console.log("Price: ", withStrawBerries.getPrice());

console.log("3. Pancake with strawberry and whippedcream");
const withStrawBerriesAndWhippedCream = new whippedCream(
  new Strawberry(pancakeSet)
);
console.log(withStrawBerriesAndWhippedCream.getSetItems());
console.log(withStrawBerriesAndWhippedCream.getPrice());
