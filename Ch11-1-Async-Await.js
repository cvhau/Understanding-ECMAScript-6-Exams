const computeSync = (number) => {
    if (number < 0) {
        throw new Error("no negative, please");
    }
    return number * 2;
};

const computeAsync = (number) => {
    return new Promise((resolve, reject) => {
        if (number < 0) {
            reject(new Error("no negative, please"));
        }
        resolve(number * 2);
    });
};

console.log(computeSync(10));
computeAsync(15).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
});

const callComputeSync = (number) => {
    try {
        const result = computeSync(number);
        console.log(`Result is: ${result}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

const callComputeAsync = (number) => {
    computeAsync(number).then((result) => {
        console.log(`Result is: ${result}`);
    }).catch((error) => {
        console.log(`Error: ${error.message}`);
    });
};

callComputeSync(50);
callComputeAsync(55);
callComputeSync(-50);
callComputeAsync(-55);

/**
 * The code structure is quite different between the synchronous version and the asynchronous version.
 * We can make the code structure look the same by using async, await keywords.
 */

// const result = await computeAsync(7); // Error. await can be used only inside a async function.
// console.log(`Result is: ${result}`);  //

const callCompute = async (number) => {
    try {
        const result = await computeAsync(number);
        console.log(`Result is: ${result}`);
        return result;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

callCompute(7);
callCompute(-7);
let r = callCompute(9);
r.then((result) => {
   console.log("ABCD: " + result);
});
