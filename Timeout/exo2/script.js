console.log(window);

const countdown = document.getElementById('countdown')
let count


function reverseCount() {
    count -= 1;
    document.getElementById("content").innerHTML = count;
    if (count === 0) {
        clearInterval(interval)
        document.getElementById("content").innerHTML = "Go !";
    }
}

const interval = setInterval(reverseCount, 1000)

reverseCount(count = 6)

