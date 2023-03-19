//EXAMPLE WITH SUPER SET IN CLASS

class Car{
  constructor(name, speed){
    this.name = name;
    this.speed = speed;
  }

introduce() {
  console.log(`This is ${this.name}`)
}

speedLimit() {
  console.log(`This speed limit is ${this.speed}`)
}
}


class Motorbike extends Car{
    constructor(name, speed, type){
      super(name, speed);
      this.type = type;
    }

    showBike(){
      super.introduce();
      console.log("This motorbike is amazing")
    }

    whenSunny(){
        console.log(`When we have sunny day max speed is ${this.speed + 20}`)
    }

}


const triumph = new Motorbike("speed triple", 250, "naked");
const BMW = new Motorbike("1000RR", 330, "sport" );


triumph.speedLimit();

triumph.whenSunny();
BMW.showBike();
BMW.speedLimit();




