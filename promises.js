function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  callback("Kunal");
}

processUser(greet); // Output: Hello, Kunal

const prmoise = Promise.all([
  Promise.resolve("bar"),
  Promise.resolve("bar"),

]);

prmoise
  .then((values) => {
    console.log(values);
   })
  .catch((error) => {
    console.error(error); // Output: foo
  });



  console.log("Hello, World!");

  Promise.resolve("foo")
    .then((value) => {
      console.log(value); // Output: foo   
    })

  console.log("Hello, World! kajsdhkjkahd");