//variable hoisting
console.log(name); // undefined
var name = "foo";

//function Hoisting
getSum(10, 20);
function getSum(a, b) {
  console.log(a + b);
}

getFullName("foo", "bar", "bazz"); // getFullName is not a function

// function expression
var getFullName = function (fname, mname, lname) {
  console.log(`my name is: ${fname} ${mname} ${lname}`);
};
