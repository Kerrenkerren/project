let numberOfFilms;
let genre;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let movie = prompt('Один из последних просмотренных фильмов?', ''),
                rating = prompt('На сколько оцените его?', '');

            if (movie != null && rating != null && movie.length < 50 && movie != '' && rating != '') {
                personalMovieDB.movies[movie] = rating;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            alert('Вы - классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы - киноман');
        } /*else {
            alert('Произошла ошибка');
        }*/
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let num = 1; num <= 3; num++) {
            genre = prompt(`Ваш любимый жанр под номером ${num}`, '');
            personalMovieDB.genres[num - 1] = genre;
        }
    },

    toggleVisibleMyDB: function(){
        personalMovieDB.private = !personalMovieDB.private;
        return personalMovieDB;
    }
        /*if (personalMovieDB.private === false) {
           return personalMovieDB.private = true;
        } else {
           return personalMovieDB.private = false;
        }
    }
*/
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();