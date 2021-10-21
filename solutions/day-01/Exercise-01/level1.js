const newEmptyArray = []; // 1

const newArray = [1, 2, 3, 4, 5, 6]; // 2
console.log(newArray.length); // 3
console.log(
  `${newArray[0]} ${newArray[newArray.length / 2 - 1]} ${
    newArray[newArray.length - 1]
  }`
); // 4

// 5
const mixedDataTypes = ["1", 2, "3", 4, "5", 6, 7];
console.log(mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]; // 6
console.log(itCompanies); // 7
console.log(itCompanies.length); // 8

console.log(
  `${itCompanies[0]} ${itCompanies[itCompanies.length / 2 - 1]} ${
    itCompanies[itCompanies.length - 1]
  }`
); // 9

for (const itCompany of itCompanies) console.log(itCompany); // 10

console.log();

for (const itCompany of itCompanies) console.log(itCompany.toUpperCase()); // 11

// 12
console.log();
console.log(itCompanies.join(", ") + " are big IT companies.");

// 13
const isExistInITCompanies = (company) => {
  return itCompanies.includes(company) ? company : "not found";
};

console.log(isExistInITCompanies("My Company"));

// 14

for (const itCompany of itCompanies) {
  if ((itCompany.match(/o/gi) || []).length >= 2) console.log(itCompany);
}

// 15
itCompanies.sort();

// 16
itCompanies.reverse();

console.log(itCompanies);
// 17
let firstThreeCompanies = itCompanies.slice(0,3);
console.log(firstThreeCompanies);

// 18
let lastThreeCompanies = itCompanies.slice(itCompanies.length-3,itCompanies.length);
console.log(lastThreeCompanies);

// 20
itCompanies.splice(0,1);

// 21
itCompanies.splice(itCompanies.length/2-1,1);

// 22
itCompanies.splice(itCompanies.length-1,1);

// 23 
itCompanies.splice(0,itCompanies.length);