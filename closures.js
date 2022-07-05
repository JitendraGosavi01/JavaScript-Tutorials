/**
 * A closure is a function tha preserves access to vars and arguments
 * the scope of the outer function,
 * even after the outer function ha finished executing.
 * Closures are useful for hiding implementation detail in JS.
 * In other words, it can be useful to create private variables or functions like so:
 */

function counter() {
  let count = 0;
  function increment() {
    return (count += 1);
  }
  return increment;
}

const generateId = counter();
console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());
