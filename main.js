const buttons = document.getElementsByClassName("play-game-b");

for (let e of buttons) {
    e.onclick = function () {
        alert(e.innerHTML);
    };
}