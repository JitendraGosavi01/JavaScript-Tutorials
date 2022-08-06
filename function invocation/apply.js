const person = {
  name: "Jitendra",
  lname: "Gosavi",
  age: 32,
};
let a = 10;
const getPersonInfo = function ([city, district]) {
  console.log(`Person name: ${this.name}
            Person last name: ${this.lname}
            Person age: ${this.age}
            address: '${city}, ${district}`);
};
getPersonInfo.call(person, ["Golegaon", "Sambhaji Nagar"]);

console.log();
