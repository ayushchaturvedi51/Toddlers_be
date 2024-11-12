const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  applyingFor: {
    name: { type: String, required: true },
    timing: { type: String, required: true },
  },

  admissionSeekingIn: {
    type: [String],
    enum: [
      "playGroup",
      "nursery",
      "prepJunior",
      "prepSenior",
      "motherToddler",
      "dayCare",
      "dayAfter",
    ],
  },

  // Candidate's personal details
  candidateDetails: {
    studentName: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String },
    },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    placeOfBirth: { type: String },
    nationality: { type: String },
    firstLanguage: { type: String },
    otherLanguagesKnown: { type: String },
  },

  // Residential Address & Family Information
  residentialAddress: {
    addressLine: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: String, required: true },
  },

  // Parent details
  father: {
    fullName: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String },
    },
    email: { type: String },
    educationalQualification: { type: String },
    profession: { type: String },
    designation: { type: String },
    phone: { type: [String] },
  },

  mother: {
    fullName: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String },
    },
    email: { type: String },
    educationalQualification: { type: String },
    profession: { type: String },
    designation: { type: String },
    phone: { type: [String] },
  },

  // Guardian details (if applicable)
  guardian: {
    fullName: {
      first: { type: String },
      middle: { type: String },
      last: { type: String },
    },
    relationWithStudent: { type: String },
    email: { type: String },
    phone: { type: [String] },
  },

  // Location (optional, for additional details)
  location: { type: String },

  // Photo (store image path or URL)
  passphoto: { type: String },
});

module.exports = mongoose.model("Application", ApplicationSchema);
