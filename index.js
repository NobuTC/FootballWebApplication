var express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");

var app = express();

const port = process.env.PORT || 5001;

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post("/login", urlencodedParser, function (req, res) {
  res.send("welcome, " + req.body.username);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", require("./api.js"));

app.listen(port, "0.0.0.0", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:" + port + "\n");
});
