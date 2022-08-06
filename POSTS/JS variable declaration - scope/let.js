let name = "foo";
name = "bar";
if (true) {
  let name = "foo under block";
  console.log(name); //foo under block
}
console.log(name); //bar

console.log(age); //Cannot access 'age' before initialization
let age;
age = 20;
