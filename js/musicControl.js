//Create constructor new with audio file
let sound = new Audio('music/sky-view-sound.ogg');
//Load music when page open
window.addEventListener(`load`,  () => {
    //built-in function play()
    sound.play(); //todo: resolve problem with Promise
}, false);
//condition for playing music
function plays() {
    return sound.paused ? sound.play() : sound.pause();
}