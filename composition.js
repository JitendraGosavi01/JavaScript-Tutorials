// Composition is a technique where the result of the one function is passed on to the next function,
// which is passed-on to the next function, and so on... until the final function is executed and some result
// is computed. Function composition can be composed an number of functions.

// Composition also helps split functions into smaller reusable function that has a single responsibility

let composition = function (f, g) {
  return function (x) {
    return f(g(x));
  };
};
let add = function (num) {
  return num + 10;
};
let multiply = function (num) {
  return num * 10;
};

let ans = composition(multiply, add);
console.log(ans(5)); // 5 + 10 * 10 = 150
