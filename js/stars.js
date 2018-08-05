addEventListener(`load`, function () {
    function makeStars() {
        for (let i = 0; i < 500; i++) {
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

        }
    }
    makeStars();
});