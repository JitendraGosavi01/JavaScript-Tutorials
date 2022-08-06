//with return keyword and curly braces
const add = (num1, num2) => {
  return num1 + num2;
};
let result = add(10, 20);
console.log(result); //30

//without return keyword
const subtract = (num1, num2) => num1 - num2;
let result1 = subtract(10, 5);
console.log(result1); //5

//with single parameter
const printName = (name) => "my name is " + name;
let result2 = printName("foo");
console.log(result2); //my name is foo
