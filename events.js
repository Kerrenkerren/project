'use strict';

//document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promo = document.querySelectorAll('.promo__adv img'),
          backgroundPromo = document.querySelector('.promo__bg'),
          promoGenre = backgroundPromo.querySelector('.promo__genre'),
          promoContent = document.getElementsByClassName('promo__content'),
          promoInteractive = document.getElementsByClassName('promo__interactive'),
          promoInteractiveList = document.querySelector('.promo__interactive-list'),
          promoInteractiveItem = promoInteractiveList.getElementsByClassName('promo__interactive-item'),
          inputForm = document.querySelector('.adding__input'),
          confirmButton = document.querySelector('.add button'),
          checkbox = document.querySelector('.add input[type="checkbox"]'),
          addform = document.querySelector('form.add');
    

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {

        promoGenre.textContent = 'драма';
    
        backgroundPromo.style.backgroundImage = 'url("img/bg.jpg")';
    };
      
    
    const sortArr = (arr) => {
          arr.sort();
    };

    promoInteractiveList.innerHTML = '';

    movieDB.movies.forEach((film, i) => {

         promoInteractiveList.innerHTML +=
         `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
    });
    
    
    const confirmAnswer = (event) => {
    
    movieDB.movies.push(inputForm.value);

    sortArr(movieDB.movies);
    
    
        if (inputForm.value.length > 21) {
            inputForm.value = inputForm.value.substr(0, 21) + '...';
        }
    
        promoInteractiveList.innerHTML +=
        `<li class="promo__interactive-item">${movieDB.movies.length} ${inputForm.value}
            <div class="delete"></div>
        </li>`;
        event.preventDefault();
    
        inputForm.value = '';
    };
       
    confirmButton.addEventListener('click', confirmAnswer);
    
    
    
    const tickCheckbox = (event) => {
         console.log('Добавляем любимый фильм');
     };
    
    checkbox.addEventListener('click', tickCheckbox);
    
    
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
           btn.parentElement.remove();
           movieDB.movies.splice(i, 1);
        });
    });

deleteAdv(promo);
makeChanges();
sortArr(movieDB.movies);

