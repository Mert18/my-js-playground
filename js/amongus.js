'use strict'

/* Selectors */

var startbtn = document.querySelector('.start');
var boxes1 = document.querySelectorAll('.box');
var boxarray = Array.from(boxes1);

var boxes2 = document.querySelectorAll('.boxt');
var box2array = Array.from(boxes2);

var wrapper2 = document.querySelector('.box-wrappert');


/* Functions */
function getRandomArray(a, b) {
    while (a.length < b) {
        var r = Math.floor(Math.random() * 9);
        if (a.indexOf(r) === -1) a.push(r);
    }
}

function arraysEqual(a1, a2) {
    return JSON.stringify(a1) == JSON.stringify(a2);
}




startbtn.addEventListener('click', () => {
    /* first phase*/
    const a = [];
    getRandomArray(a, 4);
    a.sort((a, b) => a - b);

    for (let i = 0; i < 4; i++) {
        boxes1[a[i]].classList.add('blacked');
        setTimeout(() => {
            boxes1[a[i]].classList.remove('blacked');
        }, 1000)
    }

    /* second phase  */
    var clicked = [];
    for (const box of box2array) {
        box.addEventListener('click', () => {
            box.classList.add('clickd');
            clicked.push(Number(box.id.slice(-1) - 1))
            if (clicked.length === 4) {
                clicked.sort((a, b) => a - b)
                if (arraysEqual(a, clicked)) {
                    wrapper2.classList.add('true');
                    setTimeout(() => {
                        wrapper2.classList.remove('true');
                    }, 1000)
                } else {
                    wrapper2.classList.add('false');
                    setTimeout(() => {
                        wrapper2.classList.remove('false');
                    }, 1000)
                    return false;
                }
            }


            setTimeout(() => {
                box.classList.remove('clickd');
            }, 300)
        })
    }



})

