function outer() {
  const name = "Sukhnal";

  function normal() {
    console.log(name);
  }

  const arrow = () => {
    console.log(name);
  };

  return {
    normal ,
    arrow
  }
}

const bind = outer()

console.log(bind()); 
