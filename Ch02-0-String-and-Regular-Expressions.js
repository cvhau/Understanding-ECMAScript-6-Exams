// let text = "𠮷";
// console.log(text.length);
// console.log(text.codePointAt(0));
// console.log(text.codePointAt(1));

// String.prototype.normalize()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
console.log("String.prototype.normalize()");
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';       // Amélie
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065'; // Amélie
console.log(name1);
console.log(name2);
console.log(name1 == name2); // false
console.log(name1.normalize() === name2.normalize()); // true

console.log("The Regular Expression u Flag");
// When a regular expression has the u flag set, it switches modes to work on
// characters, not code units.
let text = "𠮷";
console.log(/^.$/.test(text)); // false
console.log(/^.$/u.test(text)); // true

console.log([name1.length, name2.length]);
console.log([name1.normalize().length, name2.normalize().length]);

const str = "Some environments, such as Google Chrome Apps, enforce Content Security Policy";
console.log(str.includes("Some environments"));
console.log(str.startsWith("Some environments"));
console.log(str.endsWith("Content Security Policy"));
console.log(str.repeat(3));

// Usage of the String.prototype.repeat() function
//
console.log(String.raw`// Usage of the String.prototype.repeat() function`);
const json = '{"array":[1,2,3],"boolean":true,"color":"gold","null":null,"number":123,"object":{"a":"b","c":"d"},"string":"Hello World","unicode":"A 𠮷 B"}';

const formatJson = function (json) {
    json = json.normalize();
    let formatted = "",
        indent = " ".repeat(4),
        indentLevel = 0;
    for(let c of json) {
        if (["{", "["].includes(c)) {
            formatted += c;
            indentLevel ++;
            formatted += "\n"; // Break line
            formatted += indent.repeat(indentLevel); // Set indent
        } else if([":",].includes(c)) {
            formatted += c;
            formatted += " ";
        } else if([",",].includes(c)) {
            formatted += c;
            formatted += "\n"; // Break line
            formatted += indent.repeat(indentLevel); // Set indent
        } else if(["]", "}"].includes(c)) {
            indentLevel --;
            formatted += "\n"; // Break line
            formatted += indent.repeat(indentLevel); // Set indent
            formatted += c;
        } else {
            formatted += c;
        }
    }
    return formatted;
};
console.log(formatJson(json));

// Template Literals
console.log("Template Literals");
// Tagged Templates
// let message = tag`Hello world`;
const headTag = function (literals, ...substitutions) {
    let result = '<head>',
        i = 0;

    // Run the loop only for substitutions count
    for(i=0; i<substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    // add the last literal
    result += literals[i];

    result += '</head>';
    return result;
};

let head = headTag`The head tag content`;
console.log(head);

// Build-in String.raw tag
// Like @"" in C#
console.log(`C:\Development\profile\aboutme.html`);
console.log(String.raw`C:\Development\profile\aboutme.html`);
