'use strict'

const mongoose = require('mongoose');



//set up the schema/ structure of data
let movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: [1900, 'Must be 1900 or later'],
    max: [new Date().getFullYear(), 'Year must be earlier than current year'],
    trim: true
  },
  genre: String,
  viewed: {
    type: Boolean,
    default: false
  }
});

let Movie = mongoose.model('Movie', movieSchema);

// let newMovie = new Movie({
//   title: 'Test 3',
//   year: 2017,
//   genre: "Animation"

// });
// SAVE
// newMovie.save()
//   .then((doc) => {
//     console.log(`saved! \n version: ${doc.__v} \n title: ${doc.title} \n year: ${doc.year} \n genre: ${doc.genre} \n viewed: ${doc.viewed}`);
//   }, (err) => {
//     console.log(`error: ${err}`);
//   });
// SAVE


module.exports = {
  Movie
};
