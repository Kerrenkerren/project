const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const movie1 = prompt('Один из последних просмотренных фильмов?', ''),
  rating1 = prompt('На сколько оцените его?', ''),
  movie2 = prompt('Один из последних просмотренных фильмов?', ''),
  rating2 = prompt('На сколько оцените его?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


personalMovieDB.movies[movie1] = rating1;
personalMovieDB.movies[movie2] = rating2;

console.log(personalMovieDB);