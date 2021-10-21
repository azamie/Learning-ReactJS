import * as countriesModule from "./countries.js";
import * as webTechsModule from "./web_tech.js";

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(`Min age: ${ages[0]}`);
console.log(`Max age: ${ages[ages.length - 1]}`);
let medianAge =
  ages.length % 2 == 0
    ? ((ages[ages.length / 2 - 1] + ages[ages.length / 2]) * 1.0) / 2
    : ages[ages.length / 2 - 1] * 1.0;

console.log(`Median age: ${medianAge}`);

let sum = 0;
for (let x of ages) sum += x;
console.log(`Average Age: ${sum / ages.length}`);

console.log(`Range of age: ${Math.abs(ages[0] - ages[ages.length - 1])}`);

console.log(`
  ${Math.abs(ages[0] - sum / ages.length)},
  ${Math.abs(ages[ages.length - 1] - sum / ages.length)}`);

const firstTenCountries = countriesModule.countries.slice(0, 10);
console.log(firstTenCountries);

// 2
console.log(
  countriesModule.countries[countriesModule.countries.length / 2 - 1]
);

// 3
const mid = Math.floor(countriesModule.countries.length / 2) - (1 - (countriesModule.countries.length % 2)) + 1;
const firstHalf = countriesModule.countries.slice(0, mid);
const secondHalf = countriesModule.countries.slice(
  mid,
  countriesModule.countries.length
);
console.log(firstHalf);
console.log(secondHalf);
