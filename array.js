const tea = ["leaf", "bud", "stem", "flower"];

const firstTea = tea[0]
console.log(firstTea);


let newTea = [...tea]
newTea[0] = "hi"
console.log(newTea);
console.log(tea);

let asianCountries = ["China", "India", "Japan", "South Korea", "Thailand"];
let europeanCountries = ["France", "Germany", "Italy", "Spain", "United Kingdom"];

let worldCountry = [...asianCountries , ...europeanCountries]

console.log(worldCountry);


console.log(asianCountries.includes("China"));
