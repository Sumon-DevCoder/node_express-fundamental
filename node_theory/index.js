// ***** have to read node js documentation ***** //

// 1. Introduction to Node.js
// What is Node.js?
// Node.js is an open-source, cross-platform JavaScript runtime environment that executes
//  JavaScript code outside the browser.

// Key Features:
// Asynchronous and Event-driven: Non-blocking I/O operations.
// Fast Execution: Powered by Google’s V8 JavaScript Engine.
// Single-Threaded: Uses a single-threaded event loop for concurrent request handling.
// Cross-Platform: Runs on Linux, macOS, and Windows.

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

// An event-driven architecture (EDA) is a software design pattern in which the flow of the program is determined
//  by events. An event can be defined as a significant change in the state of an application, such as a user action,
//   a system signal, or the output from another service. This architecture is highly adaptable and commonly used in
//   systems where real-time processing, scalability, and decoupled components are important.

// Use Cases
// E-commerce: Updating inventory and triggering notifications when orders are placed.
// IoT: Processing sensor data streams in real-time.
// Microservices: Communication between loosely coupled services.
// Real-time Applications: Chat apps, online gaming, and live financial data processing.

// # create folder structure ---> ( MVC )
// > config => configure [ mongodb + express ] by mongoose.
// > controller => callback function ar kaj kore.
// > models => create schema
// > routes => create all routes
// > views => user see --> css, asserts etc.

// # routes setup >  controller > connect with route dirctory.
// # configure express with mongdb
// # setup user model

// # install pug and setup in views
// express -> template engine -> pug :
// setp pug file and
// import index.js and configure
// define route

// # CRUD Operation
// > create user
// > get user

// ====================================================================
// # Why Javascript Invented ?
//  ans : interatice ar jonno that means browser a run korarjonno. html , css ke interactive koar jonno browser a run korano hoito.
//        but javascript server a run kora jaina. akhon jodi amra javascript ke server a run korte chai tobe akta mechanism lagbe
//        sei mechanism tai niya asce node js ar node hoilo js a runtime that means node javascript a server a run server side kore.

//        javascript browser run hoi chrome v8 engine ar madome, and ai v8 engine diyai node ar modde js ar server side run kora hoi.

// # Node.Js By default module
// os (operating system module)
// fs (file system module)
// path (path module)
// http (http module)
// url (url module)
// util (utility module)

// # Why Node.Js is popular ?
// ans: we can use javascript in server side.
//      build highly scalable backend application.
//      it is single threaded, event-driven and work non-blocking I/O.
//      Perfect building data intensive, streaming application.

// # cons of node js that means disadvantage -> cons and advantage -> pros.
// > highly cpu intensive task

// # dependence of node JS : node Js architecture 2 ta jinish ar upor nirbor kore.
// > V8 Engine : browser theke niya javascrit code likete pare node ar modde.
// > libuv : is a open source library. written by C++ which focuces asynchronous I/O and gives node access to computer OS, File system,
//           networking etc.

// >>> libuv implement 2 important part of node Js.
//     *event loop ---> excute the callback functions and networking I/O.
//     *thread pool --> cpu intensive task, file access, file compression, cryptography. overall heavy task gula kroe tread pool.

// # What is module ?
// > module is an isolated and reuseable block of code that has own scope.

// # What is express ?
// Express is a fast,  unopinionated, lightweight and flexible routing framework with minimal core features

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
