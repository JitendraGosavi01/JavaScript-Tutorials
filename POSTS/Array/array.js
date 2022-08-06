//there are  mainly two way we can declare array
//1. Array constructor
//2. Array literals

const cars = new Array("Ford", "Suzuki", "Tata", "Tesla");
let ford = cars[0]; // Ford
let suzuki = cars[1]; // Suzuki
cars[1] = "Suzuki Updated";
delete cars[0];
cars[0] = "Suzuki Updated";
console.log(cars); //[ 'Ford', 'Suzuki Updated', 'Tata', 'Tesla' ]
console.log(cars.length); // object

const tataCars = ["Safari", "Punch", "Nexon", "Altroz", "Tigor"];

console.log(tataCars);
