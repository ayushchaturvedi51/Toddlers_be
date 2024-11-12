const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.validateRequest = (schema) => async (req, res, next) => {
  try {
    const sanitizedValues = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    req.body = sanitizedValues.body;
    req.query = sanitizedValues.query;
    req.params = sanitizedValues.params;
    return next();
  } catch (error) {
    const validationErrors = {};

    error.errors.forEach((errorMessage) => {
      const fieldName = errorMessage.path.join(".");
      validationErrors[fieldName] = errorMessage.message;
    });

    res.status(400).json({ errors: validationErrors });
  }
};

exports.authenticateUser = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).send("Authorization token is required");
    }

    // Verify the token using jwt.verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Optionally, check if the user exists (if you want to be more thorough)
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).send("User not found");
    }

    // Attach the userId to req.user for further use in the request lifecycle
    req.user = { id: decoded.id };

    // Call next() to pass control to the next middleware or route handler
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid or expired token");
  }
};

// Middleware to parse specific stringified JSON fields in req.body
exports.parseStringifiedFields = (fieldsToParse = []) => (req, res, next) => {
  try {
    fieldsToParse.forEach((field) => {
      if (req.body[field] && typeof req.body[field] === "string") {
        try {
          req.body[field] = JSON.parse(req.body[field]);
        } catch (parseError) {
          return res.status(400).json({ error: `Invalid JSON format for ${field}` });
        }
      }
    });
    next();
  } catch (error) {
    next(error);
  }
};


exports.multer = require("./multer");
