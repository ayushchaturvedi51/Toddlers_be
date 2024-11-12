var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const logger = require("../config/logger");
const { uploadToCloudinary } = require("../middlewares/multer");
const Application = require("../models/Application");
exports.apply = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        // Validate the request body with Zod
        const { applicationData } = req.body;
        // console.log("applicationData", applicationData);
        // Upload passport photo to Cloudinary if provided
        const passphoto = req.file ? yield uploadToCloudinary(req.file.path) : "";
        // console.log("passphoto", passphoto);
        // Attach the photo URL to the application data
        applicationData.passphoto = passphoto;
        // Create a new Application document with all data
        const application = new Application(Object.assign(Object.assign({}, applicationData), { user: req.user.id }));
        // console.log("application", application);
        // Save to the database
        yield application.save();
        res.status(201).json({
            message: "Application submitted successfully",
            application,
        });
    }
    catch (error) {
        console.error(error);
        logger.error(`Path:${req.method} ${req.url}, Error: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
});
//# sourceMappingURL=application.js.map