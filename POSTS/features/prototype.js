function Person(name, age, address) {
  console.log(this.constructor);

  this.name = name;
  this.age = age;
  this.address = address;
}

//adding prototype method for constructor function
Person.prototype.getPersonInfo = function () {
  return `My name is ${this.name}, I am ${this.age} old and I live in ${this.address}`;
};

const person1 = new Person("foo", 20, "bar");
console.log(person1);
//{ name: 'foo', age: 31, address: 'bar' }
console.log(person1.getPersonInfo());
//My name is foo, I am 20 old and I live in bar
