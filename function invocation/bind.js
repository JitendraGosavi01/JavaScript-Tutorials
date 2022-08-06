/**
 * Function borrowing
 * with the bind() method, an object can borrow a method from another object.
 *
 * When a function is used as a callback this is lost
 */
const person = {
  fname: "Jitendra",
  lname: "Gosavi",
  printName: function () {
    console.log(this);
    console.log(`First name: ${this.fname}, Last name: ${this.lname}`);
  },
};

const person1 = {
  fname: "Priyanka",
  lname: "Gosavi",
};

person.printName();
const personOne = person.printName.bind(person1, "gosavi");
console.log(personOne());

setTimeout(person.printName, 2000); //here we lost this context so undefined

//to prevent losing

const displayName = person.printName.bind(person1);
setTimeout(displayName, 3000);
