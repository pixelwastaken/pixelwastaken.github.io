
window.onload = function () {
    const buttons = document.querySelectorAll(".play-game-b");

    for (let e of buttons) {

        let gameid = e.parentElement.id
        
        
        e.onclick = function () {
            window.location.href = "/" + gameid
        };
    }
};
