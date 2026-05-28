const Movie = require("../models/Movie");

module.exports.addMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({
        success: true,
        message: "Movie added successfully",
    });
};

module.exports.getAllMovies = async (req, res) => {
    const movies = await Movie.find().lean();
    res.status(200).json(movies);
};

module.exports.getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId).lean();
    res.status(200).json(movie);
};

module.exports.updateMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, {
        new: true,
    });
    res.status(200).json(movie);
};

module.exports.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.movieId);
    res.status(200).json({
        success: true,
        message: "Movie deleted successfully",
    });
};

module.exports.addMovieComment = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId);
    movie.comments.push(req.body);
    await movie.save();
    res.status(200).json({
        success: true,
        message: "Comment added successfully",
    });
};

module.exports.getMovieComments = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId).lean();
    res.status(200).json(movie.comments);
};
