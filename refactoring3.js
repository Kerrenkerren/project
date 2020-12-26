/*callback функции
объекты, деструктуризация объектов
массивы и псевдомассивы
передача по ссылке и по значению, spread operator 
основы ооп, прототипно ориентированное наследование
3) в методе writeYourGenres
запретите пользователю нажимать отмену или оставлять пустую строку; если он это сделал, возврат к тому же вопросу.
Если все жанры введены
метод forEach, выводим в консоль сообщения:
'Любимый жанр #(номер по порядку начиная с 1) - это (название из массива)'*/

//let numberOfFilms;
let genre;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let movie = prompt('Один из последних просмотренных фильмов?', ''),
                rating = prompt('На сколько оцените его?', '');

            if (movie != null && rating != null && movie.length < 50 && movie != '' && rating != '') {
                personalMovieDB.movies[movie] = rating;
            } else {
                console.log('Error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы - классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы - киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },


    writeYourGenres: function () {

        for (let num = 1; num <= 3; num++) {
            let genre = prompt(`Ваш любимый жанр под номером ${num}`, '');

            if (genre === '' || genre === null) {
                console.log('ololo');
                num--;
            } else {
                personalMovieDB.genres[num - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach(function (item, i, genres) {
            console.log(`Любимый жанр # ${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function () {

        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB(hidden);
//personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();



/*
personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр # ${i + 1} - это ${item}`);
});
*/


//
//Еще один способ решения 3 задания

function writeYourGenres() {

    for (let num = 1; num < 2; num++) {
        let genres = prompt('Введите ваши любимые жанры через запятую');
           if genre === '' || genre == null {
               console.log('Вы ввели некоректные данные или не ввели их вовсе');
               i--;
           } else {
               personalMovieDB.genres = genres.split();
               personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach(function (item, i, genres) {
        console.log(`Любимый жанр # ${i + 1} - это ${item}`);
    });