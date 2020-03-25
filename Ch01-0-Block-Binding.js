function getValue(condition) {
    if (condition === true) {
        var value = "Condition TRUE";
        return value;
    } else if(condition === false) {
        console.log("Variable value also exists here: " + value);
        value = "Condition FALSE";
        return value;
    }

    console.log("Finally, variable value also exists here: " + value);
    return value;
}

// console.log(getValue(false));

// If you are unfamiliar with JavaScript, you might expect the variable
// value to be created only if condition evaluates to true.
// In fact, the variable value is created regardless.
// Behind the scenes, the JavaScript engine
// changes the getValue function to look like this:

function getValue(condition) {
    // The declaration of value is hoisted to the top of the enclosing block,
    // Notice: Not to top of the function.

    var value;

    if (condition === true) {
        value = "Condition TRUE";
        return value;
    } else if(condition === false) {
        console.log("Variable value also exists here: " + value);
        value = "Condition FALSE";
        return value;
    }

    console.log("Finally, variable value also exists here: " + value);
    return value;
}

// console.log(getValue(true));

// The declaration of value is hoisted to the top, and the initialization
// remains in the same spot. That means the variable value is still accessible
// from within the else clause. If accessed from the else clause, the variable
// would just have a value of undefined because it hasn’t been initialized in the
// else block.

// It often takes new JavaScript developers some time to get used to dec-
// laration hoisting, and misunderstanding this unique behavior can end up
// causing bugs. For this reason, ECMAScript 6 introduces block-level scoping
// options to give developers more control over a variable’s life cycle.

function getValue(condition) {
    if (condition === true) {
        let value = "Condition TRUE";
        return value;
    } else if(condition === false) {
        console.log("Variable value don't exist here");
        // value = "Condition FALSE";
        return value;
    }

    console.log("Finally, variable value also exists here: " + value);
    return value;
}

// Will raise an error:
//     Uncaught ReferenceError: value is not defined
// console.log(getValue(false));

function noRedeclare() {
    let count = 30;
    if (true) {
        let count = 35;
        console.log(count);
    }
    console.log(count);
}

//noRedeclare();
function constFunc() {
    const person = {
        name: "Nguyen Van Bi",
    }

    console.log(person);
    person.name = "Vo Van Tan";
    console.log(person);

    // person = {} // Will raise an error.

    //
    console.log(typeof theName);
    if (true) {
        let theName = "The Name";
    }
}

constFunc();

const funcs = [];
for(let i=0; i < 10; i++) {
    funcs.push(function () {
        console.log("const: " + i);
    });
}
// console.log(i);
funcs.forEach(function (func) {
    func();
});

// const funcs = [];
// const object = {
//     a: "A",
//     b: "B",
//     c: "C",
//     d: "D",
//     e: "E"
// };
// for(let key in object) {
//     funcs.push(function() {
//         console.log(key);
//     });
// }
// funcs.forEach(function (func) {
//     func();
// });

// let array = ["A", "B", "C", "D", "E", "F"];
// let length = array.length;
// console.log(array);
// for(const i in array) {
//     console.log(i + " : " + array[i]);
// }

// let RegExp1 = "Hello!";
// console.log(RegExp1);
// console.log("Window: " + window.RegExp1);

// In many cases, let and const behave in a manner similar to var ; however,
// this is not true in loops. Inside for-in and for-of loops, both let and const
// create a new binding with each iteration through the loop. As a result, func-
// tions created inside the loop body can access the loop bindings’ current
// values rather than their values after the loop’s final iteration (the behav-
// ior with var ). The same is true for let declarations in for loops, whereas
// attempting to use a const declaration in a for loop may result in an error.

// The current best practice for block bindings is to use const by default
// and only use let when you know a variable’s value needs to change. Doing
// so ensures a basic level of immutability in code that can help prevent cer-
// tain types of errors.
