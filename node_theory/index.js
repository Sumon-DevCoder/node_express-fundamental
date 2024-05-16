// reading file text
const fs = require("fs");
const readText = fs.readFileSync("./texts/myText.js");
console.log(readText);
