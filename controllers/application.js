const logger = require("../config/logger");
const { uploadToCloudinary } = require("../middlewares/multer");
const Application = require("../models/Application");

exports.apply = async (req, res) => {
  try {
    // Validate the request body with Zod
    const { applicationData } = req.body;
    // console.log("applicationData", applicationData);

    // Upload passport photo to Cloudinary if provided
    const passphoto = req.file ? await uploadToCloudinary(req.file.path) : "";

    // console.log("passphoto", passphoto);

    // Attach the photo URL to the application data
    applicationData.passphoto = passphoto;

    // Create a new Application document with all data
    const application = new Application({
      ...applicationData,
      user: req.user.id,
    });

    // console.log("application", application);

    // Save to the database
    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.error(error);
    logger.error(`Path:${req.method} ${req.url}, Error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
