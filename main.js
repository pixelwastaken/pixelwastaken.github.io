const buttons = document.getElementsByClassName("play-game-b");
alert(buttons);
alert("what");
for (let e of buttons) {
    e.onclick = function () {
        alert(e.innerHTML);
    };
}