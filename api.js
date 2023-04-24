var router = require("express").Router();
var Team = require("./models/team.js");
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

router.post("/add", jsonParser, async function (req, res) {
  const name = req.body.name;
  const country = req.body.country;

  if (!name || !country) {
    res.status(400).send();
    return;
  } else {
    const newTeam = new Team({ name: name, country: country });

    try {
      const savedTeam = await newTeam.save();
      res.status(200).json(savedTeam);
    } catch (e) {
      res.status(500).send();
    }
  }
});

router.get("/getall", async function (req, res) {
  const teams = await Team.find();
  res.json(teams);
});

router.get("/:id", function (req, res) {
  res.json({ message: req.params.id });
});

router.put("/update/:id", function (req, res) {
  res.json({ message: `update ${req.params.id}` });
});

router.delete("/delete/:id", function (req, res) {
  res.json({ message: `delete ${req.params.id}` });
});

module.exports = router;
