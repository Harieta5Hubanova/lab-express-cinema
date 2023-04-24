const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
  const moviesFromDB = await Movie.find();
  res.render('movies', {
    movies: moviesFromDB,
    layout: 'layout-no-background'
  });
});

router.get('/movie-details/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('movie-details', {
    movie: movie,
    layout: 'layout-no-background'
  });
});

module.exports = router;
