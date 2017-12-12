'use strict'

const express = require('express');
const bodyParser = require('body-parser')


const {
  mongooseConnect
} = require('./db/mongoose.js');

const {
  Movie
} = require('./models/movies.js');

const {
  User
} = require('./models/user.js')

let app = express();

app.use(bodyParser.json());

app.post('/movies', (req, res) => {
  let newMovie = new Movie(req.body);
  // res.send(req.body);

  newMovie.save()
    .then((doc) => {
      res.send(doc);
    }, (err) => {
      // res.send(err);
      res.status(400).send(err);
    });
});



// app.post('/movies', (req, res) => {
//   let newMovie = new Movie({
//     title: 'Test 3',
//     year: 2017,
//     genre: "Animation"
//
//   });
// newMovie.save()
//   .then((doc) => {
//     res.send(doc);
//   }, (err) => {
//     res.send(`error: ${err}`);
//   });

// });

app.listen(3000, () => {
  console.log('listening on port 3000');
});


//FIND METHOD
// Movie.find({
//       title: 'Spirited Away'
//     }
//     // {_id: "5a2eeb321b01974b4a7f8be1"}
//   )
//   .then((docs) => {
//     console.log(`Found: ${docs}`);
//   }, (err) => {
//     console.log(`Error: ${err}`);
//   });
//FIND METHOD

//FINDONE
// Movie.findOne({
//       title: 'Spirited Away'
//     }
//     // {
//     //   _id: "5a2edfd3c1f1ac44db51c02e"
//     // }
//   )
//   .then((docs) => {
//     if (!docs) {
//       console.log('Nothing found');
//       return;
//     }
//     console.log(`Found: ${docs}`);
//   }, (err) => {
//     console.log(`Error: ${err}`);
//   });

//FINDONE
