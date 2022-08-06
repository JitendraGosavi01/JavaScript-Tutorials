const person = {
  name: "Jitendra",
  lname: "Gosavi",
  age: 32,
};
let a = 10;
const getPersonInfo = function () {
  console.log(`Person name: ${this.name}
          Person last name: ${this.lname}
          Person age: ${this.age}`);
};
getPersonInfo.call(person);

console.log();
