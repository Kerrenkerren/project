const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


for (let i = 0; i < 2; i++) {
   let movie = prompt('Один из последних просмотренных фильмов?', ''),
       rating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[movie] = rating;
    personalMovieDB.movies[movie] = rating;
}

let num = 0;
while (num < 2 ) {
  let movie = prompt('Один из последних просмотренных фильмов?', ''),
      rating = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[movie] = rating;
  personalMovieDB.movies[movie] = rating;
  num++;
}

let num = 0;
do {
  let movie = prompt('Один из последних просмотренных фильмов?', ''),
      rating = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[movie] = rating;
  personalMovieDB.movies[movie] = rating;
  num++;
} while (num < 2);


for (let i = 0; i < 2; i++) {
  if (i < 1) {
    console.log('Ololo');
  } else {
    console.log('Good');
  }

  let movie = prompt('Один из последних просмотренных фильмов?', ''),
      rating = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[movie] = rating;
  personalMovieDB.movies[movie] = rating;

}

console.log(personalMovieDB);
