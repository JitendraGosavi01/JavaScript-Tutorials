function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

//Objects of the same type are created by calling
//the constructor function with the new keyword:
const person1 = new Person("foo", 20, "bar");
console.log(person1); //{ name: 'foo', age: 31, address: 'bar' }
