addEventListener(`load`, function () {
    function makeStars() {
        for (let i = 0; i < 500; i++) {
            //Создаем звезды путем увеличения количества div элементов c класом star
            document.querySelector('.stars').innerHTML += '<div class="star"></div>';
        }
        //все новосозданые звезды выбираем и присваеваем переменной stars
        let stars = document.querySelectorAll('.star');

    }
    makeStars();
});