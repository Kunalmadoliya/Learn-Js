function greet(params) {
  return `hello ${params}`;
}

function mrng(greet) {
  return greet;
}

console.log(greet(mrng("kunal")));

function hello(params) {
  let p = params;
  return function (a, b) {
    return `${a} , ${b} , ${p}`;
  };
}

let hell = hello("kunal");
let result = hell(1, 2);

console.log(result);

function countVowels(str) {
  str.toLowerCase();
  let count = 0;

  for (let ch of str) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }
  return count;
}

console.log(countVowels("String"));

function printMultiplicationTable(n) {
  let arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(`${n} * ${i} = ${n * i}`)
  }
  return arr;
}

console.log(printMultiplicationTable(5));


const users = [
  { name: "Kunal" },
  { name: "Rahul" },
  { name: "Aman" },
  { name: "Priya" },
  { name: "Neha" }
];

console.log( users.map(u => u.name));
