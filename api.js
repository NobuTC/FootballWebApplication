var router = require("express").Router();

router.post("/add", function (req, res) {
  res.json({ message: "Hello!!!" });
});

router.get("/getall", function (req, res) {
  res.json({ message: "getall" });
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
