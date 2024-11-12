const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send(`<h1>You are on the Home Page of Server</h1>`);
});

router.use("/auth", require("./auth"));
router.use("/application", require("./application"));

module.exports = router;
