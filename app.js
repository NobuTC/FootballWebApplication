var express = require("express");
var app = express();

// Use ejs to create html views
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("pages/home");
});

app.get("/newTeam", function (req, res) {
  res.render("pages/createTeam");
});

app.get("/deleteTeam", function (req, res) {
  res.render("pages/delete");
});

app.get("/updateTeam", function (req, res) {
  res.render("pages/updateTeam");
});

app.get("/viewTeam", function (req, res) {
  res.render("pages/team");
});

app.use("/api", require("./routes/team.js"));

module.exports = app;
