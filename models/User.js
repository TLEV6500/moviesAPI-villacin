const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: [true, "Password is required"] },
    birthDate: {
        type: Date,
    },
});

module.exports.User = mongoose.model("User", UserSchema);
