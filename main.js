const buttons = document.querySelectorAll(".play-game-b");
alert(buttons);
alert("what");
for (let e of buttons) {
    alert(e.innerHTML)
    
    e.onclick = function () {
        alert(e.innerHTML);
    };
}
