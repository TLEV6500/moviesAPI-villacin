const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment: { type: String, required: [true, "Comment is required"] },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
});

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"] },
    director: { type: String, required: [true, "Director is required"] },
    year: { type: Number, required: [true, "Year is required"] },
    description: { type: String, required: [true, "Description is required"] },
    genre: { type: String, required: [true, "Genre is required"] },
    comments: [CommentSchema],
});
module.exports = mongoose.model("Movie", MovieSchema);
