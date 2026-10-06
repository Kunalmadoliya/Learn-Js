// console.log(this);

// function test() {
//   return this;
// }

// console.log(test());

const print = () => {
  return this;
};

console.log(print());

const person = {
  name: "Kunal",
  age: 22,

  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);

    function innerFunction() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
    innerFunction();

    function innerFunction2() {}
  },
};
const hello =  person.introduce
console.log(hello());

