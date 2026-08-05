const numbers = [23, 65, 99, 21, 44, 87, 105, 5];
const maxNumber = Math.max (...numbers);
const minNumber = Math.min (...numbers);
console.log(maxNumber);
console.log(minNumber);
console.log(`${maxNumber + minNumber}`);
console.log(`${maxNumber * minNumber}`);
console.log(`${maxNumber - minNumber}`);
console.log(`${maxNumber / minNumber}`);

const person = { name: "Mahadi", age: 21 };
const details = { subject: "CSE", institute: "Polytechnic" };

const fullProfile = {... person, ...details }

console.log(fullProfile);
