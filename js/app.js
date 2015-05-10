var backgrounds = [
    "url(http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/njf4aaxacxezk49ooyw2.png)",
    "url(http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_900,w_1200/sagxt7wwlqk6cf9j3jhg.jpg)",
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