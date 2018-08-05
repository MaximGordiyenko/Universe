window.addEventListener('mousemove', mouseFollow);

function mouseFollow(event) {
    let cursor = document.querySelector(".cursor");
    cursor.style.position = `absolute`;
    cursor.style.top = event.clientY - -15 + "px";
    cursor.style.left = event.clientX - 2 + "px";
}