const person = {
  name: "foo",
  mname: "bar",
  lname: "bazz",
};
for (let key in person) {
  console.log(key); //output name, mname, lname
}
