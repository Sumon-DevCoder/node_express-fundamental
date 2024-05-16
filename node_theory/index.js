// reading file text
const fs = require("fs");
const readText = fs.readFileSync("./texts/myText.js", "utf-8");
console.log(readText);

// writing file text [ synchronous - atai abar blocking behavior bola hoi ]
const myText = readText; // Assign readText to myText
fs.writeFileSync("./texts/myText.js", myText + "next pro");
console.log("File written successfully");

// reading text aschronous
fs.readFile("./texts/myText.js", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error Reading text");
  } else {
    console.log(data);
  }

  // writing file
  fs.writeFile("./texts/myText.js", data, "utf-8", (err) => {
    if (err) {
      throw Error("error writing data");
    } else {
      console.log(data);
    }
  });
});

// # Even driven Architecture : node js hoilo even driven architecure

// # Stream and Buffer : it is used to process a data piece by piece which called buffer that means kono akta data ke akbare na
//                       niya ase soto soto ongsre bug bug kore niya asa. ata user experience onk smooth hoi. and need to short
//                       memory storage as it do not complete whole process at once.
//                       ar onkgula piece niya akta buffer create hoi
// # different type of stream :
// 1.Readable Stream: where we can read data.
// 2.Writable Stream: where we can write data.
// 3.Duplex Stream : a stream both of read and write.
// 4. Transform Stream: a stream where we can reshap data.
