//Событие, что происходит при загрузке экрана браузера бляголаря тикому собитию как `load`
addEventListener(`load`, function () {
    //Функция что создает звезды и делает их живыми
    function makeStars() {
        for (let i = 0; i < 200; i++) {
            //Создаем звезды путем увеличения количества div элементов c класом star
            document.querySelector('.stars').innerHTML += '<div class="star"></div>';
        }
        //все новосозданые звезды выбираем и присваеваем переменной stars
        let stars = document.querySelectorAll('.star');
        //Умножаем звезды и рапологаем их по екрану
        for (let j = 0; j < stars.length; j++) {
            //Размещаем звезды с лева на право случайным образом. Область заполнения 100%
            stars[j].style.left = (Math.random() * 100) + "%";
            stars[j].style.top = (Math.random() * 100) + "%";
            //создаем размер звезды произвольной велечены
            let size = Math.random() * 4;
            //Высота звезды
            stars[j].style.height = size + "px";
            //Ширина звезды
            stars[j].style.width = size + "px";
            //Делаем мерцание в случайной последовательности
            let animate = (Math.random() * 2) + 1;
            //Получаю доступ к стилям звезды и анимирую ее путем добавления стилей для мерцания через цикл что использовал выше
            stars[j].style.animation = "twinkle " + animate + "s infinite";
        }
    }
    //Вызываю функцию
    makeStars();
});