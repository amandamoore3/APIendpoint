'use strict'

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const port = process.env.PORT || 3000;

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
app.use(cors());
app.use(express.static(__dirname + '/static'));

app.set('view engine', 'hbs')

app.get('/movies', (req, res) => {
  Movie.find()
    .then((docs) => {
      res.send(docs)
      // res.render('movies.hbs', {
      //   movies: docs
      // })
    }, (err) => {
      res.status(400).send(err);
    });
});

app.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((docs) => {
      res.send(docs)
      // res.render('oneMovie.hbs', {
      //   movies: docs
      // })
    }, (err) => {
      res.status(400).send(err);
    });
});

// app.get('/movies/:id', (req, res) => {
//   Movie.findById(req.params.id)
//     .then((docs) => {;
//       res.render('movies.hbs', {
//         movies: docs
//       })
//     }, (err) => {
//       res.status(400).send(err);
//     });
// });

app.get('/new-movie', (req, res) => {
  res.send('new-movie.hbs', {})
}, (err) => {
  res.status(400).send(err);
});

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

//DELETE BY ID
app.delete('/movies/:id', (req, res) => {
  console.log("deleterequest" + JSON.stringify(req.params));
  Movie.findByIdAndRemove(req.params.id)
    .then((docs) => {
      if (!docs) {
        res.send('Nothing found');
        return;
      }
      res.send(docs);
    }, (err) => {
      res.status(400).send(err.message);
    });
});
////DELETE BY ID

//PATCH
app.patch('/movies/:id', (req, res) => {
  Movie.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body

    }, {
      new: true
    })
    .then((res) => {
      if (!res) {
        res.send('Nothing found');
        return;
      }
      res.send(res);
    }, (err) => {
      res.status(400).send(err.message);
    });
});
//PATCH


//SEARCH
app.post('/search', (req, res) => {
  Movie.find(req.body)
    .then((doc) => {
      res.send(doc);
    }, (err) => {
      // res.send(err);
      res.status(400).send(err);
    });
});
//SEARCH

app.listen(port, () => {
  console.log('listening on port 3000');
});

// app.get('/movies/:id', (req, res) => {
//   res.send(req.params);
// });


// app.get('/movies', (req, res) => {
//   Movie.find()
//     .then((docs) => {
//       res.send(docs);
//     }, (err) => {
//       res.send(err);
//     });
// });
//
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



//SAVES NEW MOVIE
// app.post('/movies', (req, res) => {
//   let newMovie = new Movie({
//     title: req.body.title,
//     year: req.body.year,
//     genre: req.body.genre
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
