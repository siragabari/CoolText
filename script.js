"use-strict";
window.addEventListener('load', start);

function start() {
    const cooltext = document.getElementById("cooltext");
    const characters = cooltext.innerHTML.split('');
    cooltext.innerHTML = "";
    for(let i=0; i<characters.length; i++) {
        createSpan(characters[i], i);
    }
}

function createSpan(character, i) {
    let span = document.createElement('span');
    span.innerHTML = character;
    if (character === " ") {
        span.classList.add("space");
    } else {
        span.classList.add("character");
    }
    span.classList.add("text");
    span.style.animationDelay = 0.05*i + "s";
    span.classList.add("animated");
    document.body.appendChild(span);
}




