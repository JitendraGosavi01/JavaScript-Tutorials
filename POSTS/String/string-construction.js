let firstName = "Foo";
let middleName = "bar";
let lastName = "Bazz";
let age = 20;
//old way construction
let selfIntro =
  "My name is " +
  firstName +
  " " +
  middleName +
  " " +
  lastName +
  ", and I am " +
  age +
  " years old.";

//ES6 way string literals / template literals
let selfIntro1 = `My name is ${firstName} ${middleName} ${lastName}, 
and I am ${age} years old.`;

//output
//My name is Foo bar Bazz, and I am 20 years old
