const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const teamSchema = new Schema({
  id: ObjectId,
  name: String,
  country: String,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
