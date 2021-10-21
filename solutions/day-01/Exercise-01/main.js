// 1
import * as countriesModule from "./countries.js";
import * as webTechsModule from "./web_tech.js";

console.log(countriesModule.countries);

// 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, "").split(" ");
console.log(words);
console.log(words.length);

// 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");
if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");

let honeyIndex = shoppingCart.indexOf("Honey");
while (honeyIndex != -1) {
  shoppingCart.splice(honeyIndex, 1);
  honeyIndex = shoppingCart.indexOf("Honey");
}

let teaIndex = shoppingCart.indexOf("Tea");
while (teaIndex != -1) {
  shoppingCart[teaIndex] = "Green Tea";
  teaIndex = shoppingCart.indexOf("Tea");
}
console.log(shoppingCart);

// 4
countriesModule.countries.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countriesModule.countries.push("Ethiopia");

// 5
webTechsModule.webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : webTechsModule.webTechs.push("Sass");

// 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);