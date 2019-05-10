let btn = document.querySelector('#flip_content');
let content = document.querySelector('#card');
btn.addEventListener('click', () => {
  content.classList.toggle('flip');
});