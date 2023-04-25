var router = require("express").Router();
var Team = require("../models/team.js");
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

      res.status(200).json({
        name: savedTeam.name,
        country: savedTeam.country,
        id: savedTeam._id,
      });
    } catch (e) {
      res.status(500).send();
    }
  }
});

router.get("/getall", async function (req, res) {
  const teams = await Team.find();
  res.json(teams);
});

router.get("/:id", async function (req, res) {
  try {
    const team = await Team.findOne({ _id: req.params.id });
    if (team) {
      res.json(team);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send("Wrong id");
  }
});

router.put("/update/:id", jsonParser, async function (req, res) {
  const name = req.body.name;
  const country = req.body.country;

  if (!name || !country) {
    res.status(400).send();
    return;
  } else {
    try {
      // Check if team exists in Database
      const foundTeam = await Team.findOne({ _id: req.params.id });
      if (foundTeam) {
        // Update team
        const team = await Team.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            country,
          },
          { upsert: true }
        );

        if (team) {
          res.status(200).send();
        } else {
          res.status(404).send();
        }
      } else {
        res.status(404).send();
      }
    } catch (err) {
      res.status(500).send("Wrong id");
    }
  }
});

router.delete("/delete/:id", async function (req, res) {
  try {
    const deleted = await Team.deleteOne({ _id: req.params.id });
    if (deleted.deletedCount === 1) {
      res.status(200).send();
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
