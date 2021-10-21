// 1
let age = prompt("Enter your age: ");
console.log(
  age >= 18
    ? `You are old enough to drive`
    : `You are left with ${18 - age} years to drive.`
);

// 2
const myAge = 20;
if (age > myAge) console.log(`You are ${age - myAge} years older than me.`);
else if (age == myAge) console.log("You have the same age with me.");
else console.log(`I am ${myAge - age} years older than you`);
