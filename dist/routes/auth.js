const express = require("express");
const controllers = require("../controllers");
const validators = require("../validators");
const { validateRequest } = require("../middlewares");
const router = express.Router();
// Register Route
router.post("/signup", validateRequest(validators.auth.signupSchema), controllers.auth.signup);
// Login Route
router.post("/login", validateRequest(validators.auth.loginSchema), controllers.auth.login);
module.exports = router;
//# sourceMappingURL=auth.js.map