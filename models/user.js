'use strict'

const mongoose = require('mongoose');



let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

let User = mongoose.model('User', userSchema);

// let newUser = new User({
//   email: 'Test1',
//   password: 'password'
// });

// newUser.save()
//   .then((doc) => {
//     console.log(`saved! \n version: ${doc.__v} \n email: ${doc.email} \n password: ${doc.password}`);
//   }, (err) => {
//     console.log(`error: ${err}`);
//   });

module.exports = {
  User
};
