'use strict';


// console.log('test');

if (document.getElementById('submitMovie')) {
  document.getElementById('submitMovie').addEventListener('click', addMovie);
}



function addMovie() {
  let title = document.getElementById('title').value;
  let year = document.getElementById('year').value;
  let genre = document.getElementById('genre').value;
  axios.post('/movies', {
      title,
      year,
      genre
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
if (document.getElementById('deleteBtn')) {
  document.getElementById('deleteBtn').addEventListener('click', deleteMovie);
}


function deleteMovie() {
  let id = document.getElementById('movieId').value;
  axios.delete('/movies/' + id)
    .then(() => {

    }, () => {

    })
}


if (document.getElementById('updateBtn')) {
  document.getElementById('updateBtn').addEventListener('click', updateMovie);
}


function updateMovie() {
  let title = document.getElementById('title').value;
  let year = document.getElementById('year').value;
  let genre = document.getElementById('genre').value;
  let id = document.getElementById('movieId').value;
  axios.patch('/movies/' + id, {
      title,
      year,
      genre
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
