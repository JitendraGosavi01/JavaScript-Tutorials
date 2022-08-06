//constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}
//object creation
const foo = new User("foo", "20");
console.log(foo); //{ name: 'foo', age: '20' }
