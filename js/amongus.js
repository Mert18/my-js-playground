'use strict'

/* Selectors */

var startbtn = document.querySelector('.start');
var boxes1 = document.querySelectorAll('.box');
var boxarray = Array.from(boxes1);

var boxes2 = document.querySelectorAll('.boxt');


/* Functions */
function getRandomArray(a, b) {
    while (a.length < b) {
        var r = Math.floor(Math.random() * 9);
        if (a.indexOf(r) === -1) a.push(r);
    }
}




startbtn.addEventListener('click', () => {
    /* first phase*/
    var a = [];
    var b = [];
    getRandomArray(a, 4);
    getRandomArray(b, 4);

    for (let i = 0; i < 4; i++) {
        boxes1[a[i]].classList.add('blacked');
        setTimeout(() => {
            boxes1[a[i]].classList.remove('blacked');
        }, 1000)
    }

    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            boxes1[b[i]].classList.add('blacked');
            setTimeout(() => {
                boxes1[b[i]].classList.remove('blacked');
            }, 1000)
        }
    }, 2000)

    /* second phase  */

    for (const box of boxes2) {
        box.addEventListener('click', () => {
            box.classList.add('clickd');
            setTimeout(() => {
                box.classList.remove('clickd');
            }, 300)
        })
    }



})

