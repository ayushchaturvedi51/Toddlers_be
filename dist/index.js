require("dotenv").config();
require("./config/mongoConfig.js");
require("./config/cloudinaryConfig.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
// Routes
app.use("/", require("./routes"));
console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map