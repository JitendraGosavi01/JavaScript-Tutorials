function fetchUser(isResolved = true) {
  return new Promise(function (resolve, reject) {
    if (isResolved)
      return resolve({ name: "foo", age: 20, address: "some address" });
    return reject("some error");
  });
}
fetchUser(true)
  .then(function (response) {
    console.log(response);
    //{ name: 'foo', age: 20, address: 'some address' }
  })
  .catch(function (error) {
    console.log(error);
  });
