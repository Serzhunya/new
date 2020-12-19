/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';


let numberOfFilms;

function showNumberFilms(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while(numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

showNumberFilms();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {
       
    },
    actors : {

    },
    genres : [],
    privat: false,
};

// const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
// const stars1 = +prompt('На сколько оцените его?', 'От 1 до 10');
// const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// const stars2 = +prompt('На сколько оцените его?', 'От 1 до 10');

let lastFilm;
let stars;

for(let i = 0 ; i < 2 ; i++){
    lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    stars = +prompt('На сколько оцените его?', 'От 1 до 10');
    if(lastFilm.length < 50 && lastFilm != null && lastFilm != '', stars != null && stars != ''){
        personalMovieDB.movies[lastFilm] = stars;
    } else {
        i--;
    }
    }

if(numberOfFilms < 10 ){
    alert("Просмотрено довольно мало фильмов") ;
}
else if(10 < numberOfFilms < 30 ){
    alert("Вы классический зритель");
}
else if (numberOfFilms < 30){
    alert("Вы киноман");
}
else{
    alert("Ошибка");
}

let y = 0
// while(y < 2){
//     lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//     stars = +prompt('На сколько оцените его?', 'От 1 до 10');
//     y++;
//     if(lastFilm != null && stars !=null && stars != '' && lastFilm !='' &&lastFilm.length < 50){
//         personalMovieDB.movies[lastFilm] = stars;
//     }else{
//         alert("error");
//         y--;
//     }
// }


function showMyDB() {
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
for(let i = 0; i < 3 ; i++ ){
    let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
    personalMovieDB.genres[i] = genre;
}
}

writeYourGenres();