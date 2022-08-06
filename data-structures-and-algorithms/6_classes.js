//  reference type

let object1 = { value: 10 }
let object2 = object1
let object3 = { value: 10 }

console.log(object1 === object2);
console.log(object1 === object3);

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

wizard1.play()
wizard1.introduce();
wizard2.introduce();