const buttons = document.getElementsByClassName("play-game-b");
alert(buttons);
for (let e of buttons) {
    e.onclick = function () {
        alert(e.innerHTML);
    };
}