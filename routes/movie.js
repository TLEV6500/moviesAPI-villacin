const express = require("express");
const MovieController = require("../controllers/movie");
const router = express.Router();

router.post("/addMovie", MovieController.addMovie);

router.get("/getMovies", MovieController.getAllMovies);

router.get("/getMovie/:movieId", MovieController.getMovieById);

router.patch("/updateMovie/:movieId", MovieController.updateMovie);

router.delete("/deleteMovie/:movieId", MovieController.deleteMovie);

router.post("/addComment", MovieController.addMovieComment);

router.get("/getComments/:movieId", MovieController.getMovieComments);

module.exports = router;
