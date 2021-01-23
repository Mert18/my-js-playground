
const button = document.querySelector('#remember-play');

button.addEventListener('click', () => {
    startGame(3);

})

function startGame(level) {
    let boxes = [];

    for (let i = 0; i < level; i++) {
        boxes.push(Math.trunc(Math.random() * 20));
    }
    for (let n = 0; n < boxes.length; n++) {
        const box = document.querySelector(`#box${boxes[n]}`);
        setTimeout(() => {
            box.style.backgroundColor = 'red'
        }, 1000)
        setTimeout(() => {
            box.style.backgroundColor = 'black'
        }, 2000)

    }

}