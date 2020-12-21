let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
  };


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movie = prompt('Один из последних просмотренных фильмов?', ''),
            rating = prompt('На сколько оцените его?', '');
        
        if (movie != null && rating != null && movie.length < 50 && movie != '' && rating != '') {
            personalMovieDB.movies[movie] = rating;
            console.log ('Done');
        } else {
            console.log ('Error');
            i--;
        }
    }
}


rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        alert ('Вы - классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert ('Вы - киноман');
    } else {
        alert ('Произошла ошибка');
    }
}


detectPersonalLevel();

function showMyDB() {
   if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
   } else {
    console.log('Error, DB is private, sorry');
   }
}

showMyDB();

/*function showMyDB(hidden) {
   if (!hidden){
       console.log(personalMovieDB);
   } 
}

showMyDB(personalMovieDB.private);

*/

let genre;

function writeYourGenres() {
    for (let num = 1; num <=3; num++) {
        genre = prompt(`Ваш любимый жанр под номером ${num}`, '');
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

/*
let genre;

function writeYourGenres() {
    for (let num = 1; num <=3; num++) {
        genre = prompt(`Ваш любимый жанр под номером ${num}`, '');
        personalMovieDB.genres[num - 1]= genre;
    }
}

writeYourGenres();*/