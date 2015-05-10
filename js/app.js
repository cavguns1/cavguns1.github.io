var backgrounds = [
    "url(https://octodex.github.com/images/privateinvestocat.jpg)",
    "url(https://octodex.github.com/images/jetpacktocat.png)",
    "url(https://octodex.github.com/images/luchadortocat.png)"
], 
    index = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgrounds[Math.floor(Math.random()*7)];

    index++;

    if (index === 3) {
        index = 0;
    }
}

setInterval(changeBackground, 2000);