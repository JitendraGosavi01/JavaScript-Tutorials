const names = ["foo", "bar", "bazz"];
for (let name of names) {
  console.log(name); //output - foo, bar, bazz
}
//for in with enumerable
for (let key in names) {
  console.log(key); //output 0, 1, 2
}
