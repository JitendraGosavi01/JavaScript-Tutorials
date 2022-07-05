/**
 * Reflect is a global object that provides some useful methods fot meta-programming.
 * Reflect is not a function not it is a constructible. it is only job is to provide static methods for reflections
 *
 * These methods can be divided into two categories
 *  > Introspeciton = methods which are non-destructive methods
 *
 *  > Modification = methods which are destructive since they mutate the object or its behavior.
 */

const person = {
  name: "Jitendra",
  [Symbol("email")]: "test@123.com",
};

console.log(Reflect.get(person, "name"));
console.log(Reflect.has(person, "name"));
console.log(Reflect.has(person, "phone"));
console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.ownKeys(person));

console.log(Reflect.defineProperty(person, "phone", { writable: true }));
console.log(Reflect.has(person, "phone"));
console.log(Reflect.set(person, "phone", "7028987588"));
console.log(Reflect.get(person, "phone"));
console.log(Reflect.deleteProperty(person, "phone"));
console.log(Reflect.has(person, "phone"));

console.log(person);
