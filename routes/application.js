const express = require("express");
const controllers = require("../controllers");
const {
  authenticateUser,
  multer,
  parseStringifiedFields,
  validateRequest,
} = require("../middlewares");
const validators = require("../validators");
const router = express.Router();

// Apply Route
router.post(
  "/apply",
  authenticateUser,
  multer.upload.single("passphoto"),
  parseStringifiedFields(["applicationData"]),
  validateRequest(validators.application.applicationSchema),
  controllers.application.apply
);

module.exports = router;
