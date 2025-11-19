console.log(window);

const blink = document.getElementById('blink')
let count = 0

setInterval(function () {
    count++
    console.log(count);
    if (count % 2 === 1) {
        blink.textContent = 'Clignotant...'
    } else {
        blink.textContent = ''
    }
}, 500)