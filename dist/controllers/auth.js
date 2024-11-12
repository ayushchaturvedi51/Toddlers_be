var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const logger = require("../config/logger");
exports.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const hashedPassword = yield bcrypt.hash(password, 10);
        const existingUser = yield User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ email, password: hashedPassword });
        const savedUser = yield user.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_SECRET_EXPIRES_IN,
        });
        res.json({ token });
    }
    catch (error) {
        console.error(error);
        logger.error(`Path:${req.method} ${req.url}, Error: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
});
exports.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User.findOne({ email });
        if (!user)
            return res.status(400).send("User not found");
        const isMatch = yield bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).send("Invalid credentials");
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_SECRET_EXPIRES_IN,
        });
        res.json({ token });
    }
    catch (error) {
        console.error(error);
        logger.error(`Path:${req.method} ${req.url}, Error: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
});
//# sourceMappingURL=auth.js.map