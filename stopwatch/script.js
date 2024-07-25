var stopwatch = document.getElementById("stopwatch");
var startbtn = document.getElementById("start-btn");
vartimeoutId = 0;

var ms = 0;
var min = 0;
var sec = 0;

function start(flag) {
    if (flag) {
        startbtn.disabled = true;
    }


    timeoutId = setTimeout(function () {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);

        ms++;
        if (ms == 10) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        stopwatch.innerHTML = min + ":" + sec + ":" + ms;
        start();
    }, 10);
}
function pause() {
    clearTimeout(timeoutId);
    startbtn.disabled = false;
}
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00'
    startbtn.disabled = false;
}
