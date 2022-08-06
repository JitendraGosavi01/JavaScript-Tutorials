const cars = ["Ford", "Tata", "Maruti-Suzuki", "Honda"];
let newUnshiftedLength = cars.unshift("Toyota");
console.log(newUnshiftedLength); //5
console.log(cars); //[ 'Toyota', 'Tata', 'Maruti-Suzuki', 'Tesla' ]

let poppedValue = cars.pop();
console.log(poppedValue); // Honda
console.log(cars); //[ 'Ford', 'Tata', 'Maruti-Suzuki' ]

let newLength = cars.push("Tesla");
console.log(newLength); // 4
console.log(cars); //[ 'Ford', 'Tata', 'Maruti-Suzuki', 'Tesla' ]

let shiftedValue = cars.shift();
console.log(shiftedValue); //Ford
console.log(cars); //[ 'Tata', 'Maruti-Suzuki', 'Tesla' ]
