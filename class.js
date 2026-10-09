class player {
  //not shared unique properties
  constructor(name, score, age, gender) {
    this.name = name;
    this.score = score;
    this.age = age;
    this.gender = gender;
  }

  //shared properties
  getName() {
    return `Player name is ${this.name} and score is ${this.score}`;
  }

  getDetails() {
    return `Player name is ${this.name}, score is ${this.score}, age is ${this.age} and gender is ${this.gender}`;
  }
}

const player1 = new player("Sukhnal", 100, 25, "Male");
console.log(player1.hasOwnProperty("getName")); // true

class debutant {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
}

const debutant1 = new debutant("Sukhnal", 100);

console.log(debutant1);
debutant1.walk(); // Sukhnal is walking