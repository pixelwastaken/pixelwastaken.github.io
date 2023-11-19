const buttons = document.getElementsByClassName("play-game-b");
alert("well well well");
for (let e of buttons) {
    e.onclick = function () {
        alert(e.innerHTML);
    };
}