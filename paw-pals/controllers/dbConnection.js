const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/3000", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("connection has been successful");
  })
  .on("error", (err) => {
    console.log("connection error", err);
  });

module.exports = connection;
