// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Minimum 6 characters required"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
// module.exports = User;
