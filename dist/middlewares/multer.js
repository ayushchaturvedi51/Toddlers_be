const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");
const path = require("path");
const fs = require("fs");
const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/avif"];
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const fileFilter = (req, file, cb) => {
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error("Invalid file type. Only JPEG, JPG, PNG, WebP, and AVIF are allowed."), false);
    }
};
const upload = multer({ storage, fileFilter });
const uploadToCloudinary = (localFilePath) => {
    // console.log("localFilePath", localFilePath);
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(localFilePath, { folder: process.env.CLOUDINARY_FOLDER }, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                fs.unlinkSync(localFilePath);
                resolve(result.secure_url);
            }
        });
    });
};
module.exports = { upload, uploadToCloudinary };
//# sourceMappingURL=multer.js.map