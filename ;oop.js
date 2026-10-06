let i = 0,
  sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}

console.log(sum);

let arr = [],
  n = 5;
while (n > 0) {
  arr.push(n);
  n--;
}

console.log(arr);

do {
  tea = prompt("enter you fvrt tea");
  arr2.push(tea);
} while (tea !== "stop");

console.log(arr2);

let arr2 = [];
let s = 0;
do {
  num = Number(prompt("enter your number  , enter 0 to exit"));
  s += num;
  arr2.push(s);
} while (num !== 0);

console.log(arr2);

