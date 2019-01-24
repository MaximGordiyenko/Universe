let flipFront = document.querySelector('#flip_front');
let contentFront = document.querySelector('#card');
let flipBack = document.querySelector('#flip_back');
let contentBack = document.querySelector('#card');
flipFront.onclick = function () {
    contentFront.classList.toggle('flip');
    // if (this.style.display === `block`) {
    //     this.style.display = `none`;
    //     flipFront.style.display = `block`;
    // }else {
    //     this.style.display = `block`;
    //     flipFront.style.display = `none`;
    // }

};
flipBack.onclick = function () {
    contentBack.classList.toggle('flip');
    // flipFront.style.display = `block`;
    // this.style.display = `none`;
};
