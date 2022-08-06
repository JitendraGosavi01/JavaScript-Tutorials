const name = "foo";
name = "bar"; //Error: Assignment to constant variable

const age = 20;
const age = 30; //Error: SyntaxError: Identifier 'age' has already been declared (5:6)

const person = {
  name: "foo",
};
person.name = "bar";
person.age = 20;
console.log(person); // {name:'bar', age:20}
