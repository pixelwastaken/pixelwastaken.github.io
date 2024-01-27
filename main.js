
window.onload = function () {
    const buttons = document.querySelectorAll(".play-game-b");
    alert(buttons);
    alert(buttons[0]);
    for (let e of buttons) {
        alert(e)

        let gameid = e.parentElement.id
        
        
        e.onclick = function () {
            alert(gameid)
            window.location.href = "/" + gameid
        };
    }
};
