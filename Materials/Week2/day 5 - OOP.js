// KISS = Keep It Simple Stupid

// OOP
// Class, Instance, This, Property, Method, Public, Private, Static

// Four Pillars of OOP
// Inheritance
// Encapsulation
// Abstraction
// Polymorphism

function Human(nama, umur, gender) {
  this.nama = nama;
  this.umur = umur;
  this.gender = gender;
  this.greet = () => `Halo! saya ${this.nama}`;
}

let jihad = new Human("Jihad", 25, "male");
let rianto = new Human("rianto", 24, "male");

class Animal {
  #pinAtm;
  constructor(nama, umur, gender) {
    this.nama = nama;
    this.umur = umur;
    this.gender = gender;
    this.#pinAtm = "123456";
    this.greet = () => `Halo! saya ${this.nama}`;
    this.forgotPinAtm = (username) => {
        if (username == this.nama) return this.#pinAtm

        return "Wrong username, you're not authorized to get the pin!"
    }
  }
}

class Cat extends Animal {
  constructor(nama, umur, gender, food) {
    super(nama, umur, gender);
    this.food = food;
  }
}

let tom = new Animal("Tom", 10, "male");
let manis = new Cat("Manis", "male", "whiskas");
// console.log(tom.forgotPinAtm("Tom"));


// SWITCH
let color = "pink"

switch (color) {
    case "red":
        console.log("stopp")
        break;
    case "yellow":
        console.log("tiati")
        break;
    case "green":
        console.log("gass")
        break;
    default:
        console.log("Ga ada wei warna lampu lalu lintas begitu")
        break;
}