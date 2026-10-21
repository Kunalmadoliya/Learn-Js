class Vehicle {
  constructor(
    public name: string,
    protected age: number,
    private bank: string,
  ) {}

  getDetails() {
    console.log(
      `Age: ${this.age}, Name: ${this.name}, Bank: ${this.bank}`,
    );
  }
}

class Car extends Vehicle {
  constructor(
    public userName: string,
    name: string,
    age: number,
    bank: string,
  ) {
    super(name, age, bank);
  }

  getSuperName() {
    console.log(`User Name: ${this.userName}, Name: ${this.name}`);
  }
}

const car = new Car("John", "Toyota", 5, "Bank of America");

car.getDetails();
car.getSuperName();