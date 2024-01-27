
window.onload = function () {
    const buttons = document.querySelectorAll(".play-game-b");
    alert(buttons);
    alert(buttons[0]);
    for (let e of buttons) {
        alert(e)
        
        e.onclick = function () {
            alert(e.innerHTML);
        };
    }
};
