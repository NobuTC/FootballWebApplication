var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", require("./routes/team.js"));

module.exports = app;
