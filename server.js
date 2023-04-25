const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 5001;

// Connect mongoose
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Mongoose Connected!"))
  .catch((e) => {
    console.log("Mongoose not working");
  });

app.listen(port, "0.0.0.0", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:" + port + "\n");
});
