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

// app.post('/movies', (req, res) => {
//   let newMovie = new Movie(req.body);
//   // res.send(req.body);
//
//   newMovie.save()
//     .then((doc) => {
//       res.send(doc);
//     }, (err) => {
//       // res.send(err);
//       res.status(400).send(err);
//     });
// });

// app.get('/movies', (req, res) => {
//   Movie.find()
//     .then((docs) => {
//       res.send(docs);
//     }, (err) => {
//       res.send(err);
//     });
// });

// app.get('/movies/:id', (req, res) => {
//   res.send(req.params);
// });

// app.get('/movies/:id', (req, res) => {
//   Movie.findById(req.params.id)
//     .then((docs) => {
//       if (!docs) {
//         res.send('Nothing found');
//         return;
//       }
//       res.send(docs);
//     }, (err) => {
//       res.status(400).send(err.message);
//     });
// });

//DELETE BY ID
// app.delete('/movies/:id', (req, res) => {
//   Movie.findByIdAndRemove(req.params.id)
//     .then((docs) => {
//       if (!docs) {
//         res.send('Nothing found');
//         return;
//       }
//       res.send(docs);
//     }, (err) => {
//       res.status(400).send(err.message);
//     });
// });
////DELETE BY ID

//SAVES NEW MOVIE
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
//SAVES NEW MOVIE

//PATCH
// app.patch('/movies/:id', (req, res) => {
//   Movie.findOneAndUpdate({
//       _id: req.params.id
//     }, {
//       $set: {
//         title: 'This was set through patch'
//       }
//     }, {
//       returnOriginal: false
//     })
//     .then((docs) => {
//       if (!docs) {
//         res.send('Nothing found');
//         return;
//       }
//       res.send(docs);
//     }, (err) => {
//       res.status(400).send(err.message);
//     });
// });
//PATCH


//POST
// app.post('/users', (req, res) => {
//   let newUser = new User({
//     email: 'Post test',
//     password: 'password'
//   });
//
//   newUser.save()
//     .then((doc) => {
//       res.send(`saved! \n version: ${doc.__v} \n email: ${doc.email} \n password: ${doc.password}`);
//     }, (err) => {
//       res.send(err);
//     });
// });

//POST


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
