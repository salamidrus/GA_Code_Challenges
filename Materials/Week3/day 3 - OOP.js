// OOP
class Animal {
  waterAmount = 0;

  constructor(nama, umur) {
    this.nama = nama; // property
    this.umur = umur;
  }

  greet = () => "Meong"; // method
}

let kucing = new Animal("Tom", 16);

// Inheritance - extends, super
class Cat extends Animal {
  constructor(nama, umur, ras) {
    super(nama, umur);
    this.ras = ras;
  }
}

let cat = new Cat("Tommy", 20, "Anggora");

// Encapsulation - public, private, protected
class Human {
  #ktp;
  #greet;

  constructor(nama, umur, ktp) {
    this.nama = nama; // public
    this.umur = umur; // public
    this.#ktp = ktp; // private property
    this.#greet = () => "Haloo";
  }

  sapa = () => `Oi ${this.nama}`;
}

let fariz = new Human("Fariz", 20, 168376536);

// Abstraction - Hide the details/unnecessary data
class Ongkir {
  #ongkir;
  constructor(berat) {
    this.berat = berat;
    this.#ongkir = this.berat * 1000;
  }

  hitungOngkir = () => this.ongkir; // getter
}

let kirimTv = new Ongkir(10);

// Polymorphism - Overriding property/method
class SumbawaPeople extends Human {
  constructor(nama, umur, ktp) {
    super(nama, umur, ktp);
  }

  sapa = () => `Halooo ${this.nama}`;
}

let riski = new SumbawaPeople("riski", 20, 6138563789);
