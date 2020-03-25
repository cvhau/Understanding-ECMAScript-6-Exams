class Person {
    constructor(name, {age = 10} = {}) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log("Name: " + this.name + "; Age: " + this.age);
    }
}
console.log(Person);
console.log("The Persion class is a Function object ? ");
console.log("-> " + (Person instanceof Function ? "Yes" : "No"));
let p = new Person("Nguyen Van A", {age: 24});
p.sayName();

console.log("Can we overwrite Person class?");
Person = "-> The Person class has been overwritten.";
console.log(Person);

console.log("How about to overwrite a constant class?");
const ConstantClass = class {
    ///
};
console.log(ConstantClass);
try {
    ConstantClass = "-> The constant class can be overwrite.";
} catch (error) {
    console.log("Error: " + error.message);
    console.log("-> The constant class can not be overwrite.");
}
