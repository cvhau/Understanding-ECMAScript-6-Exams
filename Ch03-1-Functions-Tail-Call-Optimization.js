"use strict";

let number = 10000;

// Befor optimized
const factorial = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        // not optimized - must multiply after returning
        return n * factorial(n -1);
    }
}
// console.log(factorial(number));  // If the number is too large, a StackOverFlowError will be occurred,
//                                  // because call-stack of the JS engine is overflow.

// After optimization
// With Tail Call Optimization, the Js engine will clear and reuse the
// current stack frame instead of creating a new stack frame for a tail call.
// So, it help us avoid "maximum call stack size exceeded" error.
const factorial1 = (n, p = 1) => {
    if (n <= 1) {
        return 1 * p;
    } else {
        let result = n * p;
        // Optimized
        return factorial1(n - 1, result);
    }
}
// console.log(factorial1(number));  // RangeError: Maximum call stack size exceeded
//                                   // Ooop, STILL HAS ERROR !!!!!!!!!!!!!!!!!
//                                   // => Current NodeJs version (v12.16.1) still not support the Tail Call Optimization

// Use loop to resolve problem.
const factorial2 = (n) => {
    let result = n;
    while (--n > 0) {
        result = result * n;
    }
    return result;
}
console.log(factorial2(number));  // Work well

// With BigNumber
const factorial3 = (n) => {
    n = BigInt(n);
    let result = n;
    while (--n > 0) {
        result = result * n;
    }
    return result.toString();
}
console.log(factorial3(number));  // Work well
