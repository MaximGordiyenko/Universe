let btn = document.querySelector('#flip_content');
let content = document.querySelector('#card');
btn.onclick = function() {
    content.classList.toggle('flip');
};