'use strict'

var colorize = document.querySelectorAll('.box');
const whiteboxes = Array.from(colorize)



console.log(whiteboxes)
for (let i = 0; i < 1; i++) {
    doIt();
}
function doIt() {
    setInterval(function () {
        var rand = Math.floor(Math.random() * colorize.length);
        if (whiteboxes[rand].style.backgroundColor != 'red') {
            whiteboxes[rand].style.backgroundColor = 'red';
        }
    }, 1000)
}
