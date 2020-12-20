let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

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
    
    if (movie != null && rating != null && movie.length < 50 && movie != '' && rating != '') {
        personalMovieDB.movies[movie] = rating;
        console.log ('Done');
    } else {
        console.log ('Error');
        i--;
    }
}

console.log(personalMovieDB);