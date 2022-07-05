/**
 * The nullish coalescing operator ?? is a logical operator
 * that returns its right-hand side operand when its left-hand side operand is null or undefined,
 * and returns its left-hand side operand.
 * The Nullish Coalescing Operator is handy when you want to use falsy values as a default.
 * Or simply when you want to treat the falsy values as valid ones
 *
 */

// falsy values
const value = 0 ?? 100; // 0
console.log(value);
const value1 = false ?? true; // false
console.log(value1);

// Default values
const value2 = null ?? 100; // 100
console.log(value2);
const value3 = undefined ?? 100; //100
console.log(value3);
