// Functions with Default Parameter Values
// ECMAScript 5
console.log("Functions with Default Parameter Values");
function makeRequest(url, timeout, callback) {
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback : function () {};

    console.log("Requesting to: " + url);
    console.log("Request timeout: " + timeout);
    console.log("Callback result: " + callback(url));
}
makeRequest('https://abcd.com');
makeRequest('https://abcd.com', 500);
makeRequest('https://abcd.com', 600, function (url) {
    return "Request completed: " + url;
});

// ECMAScript 6
const makeRequest6 = function (url, timeout = 2005, callback = () => {}) {
    console.log(`Requesting to: ${url}`);
    console.log(`Request timeout: ${timeout}`);
    console.log(`Callback result: ${callback(url)}`);
}

makeRequest6('https://abcd.com');
makeRequest6('https://abcd.com', 500);
makeRequest6('https://abcd.com', 600, function (url) {
    return "Request completed: " + url;
});

// How Default Parameter Values Affect the arguments Object
//
console.log("How Default Parameter Values Affect the arguments Object");

function mixArgs(first, second) {
    console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    // Arguments also updated
    console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}
mixArgs();         // [object Arguments] {}
mixArgs("a", "b");

// Use ECMAScript 5 strict mode
function mixArgsStrict(first, second) {
    "use strict"; // Set strict mode

    console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    // Arguments is not updated in strict mode
    console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}
mixArgsStrict("a", "b");

// ECMAScript 6 default parameter
// The arguments object in a function using ECMAScript 6 default param-
// eter values will always behave in the same manner as ECMAScript 5 strict
// mode regardless of whether the function is explicitly running in strict mode.
function mixArgs(first, second = "b") {
    console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    // Arguments is not updated on JS6
    console.log(arguments);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}
mixArgs("a");

function max(a, b) {
    return Math.max(a, b);
}
console.log(max(...[23, 86, 98])); // 86

function max1(...values) {
    return Math.max(...values);
}
console.log(max1(...[23, 86, 98])); // 98

// Block level functions
console.log("Block level Functions");
function blockLevel() {
    "use strict";
    if (true) {
        //Block-level functions are hoisted to the top of the block in which they
        //are defned, so typeof doSomething returns "function", even though it appears
        //before the function declaration in the code
        console.log(typeof doSomething); // "function"
        function doSomething() {
            // Empty
        }
        doSomething();
    }
    console.log(typeof doSomething); // "undefined"
}
blockLevel();
// How about to use const for functions
function blockLevel1() {
    "use strict";
    if (true) {
        console.log(typeof doSomething); // "Cannot access 'doSomething' before initialization"
        const doSomething = function () {
            // Empty
        }
        doSomething();
    }
    console.log(typeof doSomething); // "undefined"
}
// blockLevel1();

// Block-Level Functions in Non-Strict Mode ?
function blockLevel2() {
    // Remove strict mode
    // "use strict";
    if (true) {
        console.log(typeof doSomething); // "Cannot access 'doSomething' before initialization"
        function doSomething () {
            // Empty
        }
        doSomething();
    }
    console.log(typeof doSomething); // "function"
    // In this example, doSomething() is hoisted into the global scope so it still
    // exists outside the if block. ECMAScript 6 standardized this behavior to
    // remove the incompatible browser behaviors that previously existed, so all
    // ECMAScript 6 runtimes should behave in the same way
}
blockLevel2();
