const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const colors = require("colors");
const main = require("./config/db");

// mongodb func call
main();

// view template engine
app.set("view engine", "pug");
app.set("views", "./views");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/users", require("./routes/userRoutes"));

// viewRoutes
app.get("/", (req, res) => {
  res.render("firstFile");
});

// // home route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.grey);
});
