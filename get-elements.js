/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelector('.promo__adv'),
      img = promo.querySelectorAll('img'),
      promoTitle = promo.getElementsByClassName('promo__adv-title'),
      backgroundPromo = document.querySelector('.promo__bg'),
      promoGenre = backgroundPromo.querySelector('.promo__genre'),
      //newPromoGenre = document.createTextNode('ДРАМА'),
      promoContent = document.getElementsByClassName('promo__content'),
      promoInteractive = document.getElementsByClassName('promo__interactive'),
      promoInteractiveTitle = document.querySelector('.promo__interactive-title'),
      promoInteractiveList = document.querySelector('.promo__interactive-list'),
      promoInteractiveItem = promoInteractiveList.getElementsByClassName('promo__interactive-item');

//promoGenre.replaceWith(newPromoGenre);

promoGenre.textContent = 'драма';

promo.removeChild(promoTitle[0]);
promo.removeChild(img[0]);
promo.removeChild(img[1]);
promo.removeChild(img[2]);


/*
promo.forEach(item => {
    item.remove();
});

promo.forEach(function (item){
      item.remove();
});
*/


//backgroundPromo.style.cssText = `background: url(../img/bg.jpg); center; background-position: top`;
backgroundPromo.style.backgroundImage = 'url("img/bg.jpg")';

promoInteractiveList.removeChild(promoInteractiveItem[4]);
promoInteractiveList.removeChild(promoInteractiveItem[3]);
promoInteractiveList.removeChild(promoInteractiveItem[2]);
promoInteractiveList.removeChild(promoInteractiveItem[1]);
promoInteractiveList.removeChild(promoInteractiveItem[0]);


//promoInteractiveList.innerHTML = '';

/*
function addElements() {
    const newLi = document.createElement('li'),
          newLi2 = document.createElement('li'),
          newLi3 = document.createElement('li'),
          newLi4 = document.createElement('li'),
          newLi5 = document.createElement('li');

    newLi.innerText = 'Логан';
    newLi2.innerText = 'Лига справедливости';
    newLi3.innerText = 'Ла-ла лэнд';
    newLi4.innerText = 'Одержимость';
    newLi5.innerText = 'Скотт Пилигрим против...';

    promoInteractiveList.prepend(newLi);
    promoInteractiveList.prepend(newLi2);
    promoInteractiveList.prepend(newLi3);
    promoInteractiveList.prepend(newLi4);
    promoInteractiveList.prepend(newLi5);
}

addElements();
*/


movieDB.movies.sort();

//console.log(promoInteractiveList.innerHTML)

movieDB.movies.forEach((film, i) => {
     promoInteractiveList.innerHTML +=`
     <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>`;
});

//a = a + 1;
//a +=1;