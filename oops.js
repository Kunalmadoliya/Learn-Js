// class student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//     }   

// }

// const student1 = new student("John", 20, "A");
// let student2 = structuredClone(student1)



// console.log(student2);

// console.log(student1.getDetails()); // Output: Name: Jane, Age: 20, Grade: A



// class Form{
//     #response = []

//     submitForm(data){
//        if(!data){
//         throw new Error("Data is required");
//        }
       
//        this.#response.push(data);
//     }

//     getResponse(){
//         return [...this.#response];
//     }
// }

// class Parent{
//   #name 
//   #age 
//   #grade

//   constructor(name, age, grade){
//     this.#name = name
//     this.#age = age
//     this.#grade = grade
//   }

//   fetchDetails(){
//     return `Name: ${this.#name}, Age: ${this.#age}, Grade: ${this.#grade}`;
//   }
// }


// const form = new Form();
// form.submitForm({ name: "John", age: 20 });
// form.submitForm({ name: "Jane", age: 22 });

// console.log(form.getResponse()); // Output: [{ name: "John", age: 20 }, { name: "Jane", age: 22 }]


class s {
    #gender 

    constructor(name , age, grade, gender){
        this.name = name
        this.age = age
        this.grade = grade
        this.#gender = gender
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Gender: ${this.#gender}`;
    }

    gender(){
        return this.#gender
    }
}

class st extends s{
   getDetails(){  
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
     }
 }

 const sp = new st("John", 20, "A", "Male");
 console.log(sp.getDetails()); // Output: Name: John, Age: 20, Grade: A, Gender: Male
 console.log(sp.gender()); // Output: Male


 