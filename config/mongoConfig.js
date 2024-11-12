const mongoose = require("mongoose");

mongoose.connect(
  `${process.env.MONGO_URI}/toddlers_home`
);

const db = mongoose.connection;

db.on("error", function (err) {
  console.log(err.message);
});

db.once("open", function () {
  console.log(
    `Successfully connected to the database`
  );
});

module.exports = db;
