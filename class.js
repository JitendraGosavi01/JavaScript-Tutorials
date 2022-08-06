class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getPersonInfo() {
    return `My name is ${this.name}, I am ${this.age} old and I live in ${this.address}`;
  }
}

const person1 = new Person("Foo", 20, "some address");
console.log(person1); //{ name: 'Foo', age: 20, address: 'some address' }

console.log(person1.getPersonInfo()); //My name is Foo, I am 20 old and I live in some address
