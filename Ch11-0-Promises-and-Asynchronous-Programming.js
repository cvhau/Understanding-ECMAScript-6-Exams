const axios = require("axios");

// Use callback function
console.log("// Callback function.");
const getContent = (url, callback = (error, data) => {}) => {
    axios.get(url).then((resp) => {
        callback(null, resp.data);
    }).catch((error) => {
        callback(error, null);
    });
};

getContent('https://icanhazip.com/', (error, data) => {
    if (error) {
        console.log("Error: " + error);
    } else {
        console.log("Your IP Address: " + data.trim());
    }
});
console.log("Hi!");
// Result:
// Hi!
// Your IP Address: 1.52.59.171

// Chaining callback function
console.log("// Chaining callback functions.");
const getLocation = (ipAddress, callback = (error, data) => {}) => {
    const ACCESS_KEY = '0b523473ceb1a0f01257bf96d2c390fc';
    const url = `http://api.ipstack.com/${ipAddress}?access_key=${ACCESS_KEY}`;

    // console.log("Loading: " + url);
    axios.get(url).then((resp) => {
        // console.log(resp);
        if (resp.data.error) {
            callback({
                message: resp.data.error.info
            }, null);
        } else {
            callback(null, resp.data);
        }
    }).catch((error) => {
        callback(error, null);
    });
};

getContent('https://icanhazip.com/', (error, data) => {
    if (error) {
        console.log("Error: " + error);
    } else {
        let ip = data.trim();
        console.log("Your IP Address: " + ip);
        getLocation(ip, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                // console.log(data);
                console.log(`Your location: ${data.region_name}, ${data.country_name}`);
            }
        });
    }
});
console.log("Hello!");

// Use Promise
console.log("// Use Promise");

// let p = new Promise((resolve, reject) => {
//     throw new Error("The error message");
// });
// p.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log("Error: " + error.message);
//     throw new Error("Error message in reject");
// }).catch((error) => {
//     console.log("Catch: " + error.message);
// });

const getContent1 = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then((resp) => {
            resolve(resp.data);
        }).catch((error) => {
            reject(error);
        });
    });
};

const getLocation1 = (ipAddress) => {
    return new Promise((resolve, reject) => {
        const ACCESS_KEY = '0b523473ceb1a0f01257bf96d2c390fc';
        const url = `http://api.ipstack.com/${ipAddress}?access_key=${ACCESS_KEY}`;

        // console.log("Loading: " + url);
        axios.get(url).then((resp) => {
            // console.log(resp);
            if (resp.data.error) {
                reject(new Error(resp.data.error.info));
            } else {
                resolve(resp.data);
            }
        }).catch((error) => {
            reject(error);
        });
    });
};

getContent1('https://icanhazip.com/').then((data) => {
    let ip = data.trim();
    console.log("Promise: Your IP Address: " + ip);
    return getLocation1(ip); // Chaining.
}).then((data) => {
    console.log(`Promise: Your location: ${data.region_name}, ${data.country_name}`);
}).catch((error) => {
    console.log("PromiseError: " + error.message);
});

// Promise ALL
console.log("// Promise all");

let p1 = new Promise((resolve, reject) => {
    return resolve("37");
});
let p2 = new Promise((resolve, reject) => {
    return resolve("38");
});
let p3 = new Promise((resolve, reject) => {
    return resolve("39");
});
let p4 = new Promise((resolve, reject) => {
    return resolve("40");
});

Promise.all([p1, p2, p3, p4]).then((result) => {
    console.log(result);
});

// Promise RACE
console.log("// Promise race");
Promise.race([p1, p2, p3, p4]).then((result) => {
    console.log(result);
});
