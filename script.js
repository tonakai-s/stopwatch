"use strict"

let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.stop.onclick = () => stop();
document.form_main.reset.onclick = () => reset();

function start() {
    stop();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function stop() {
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    milisecond = 0;

    document.getElementById('hour').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('miliseconds').textContent = '000';
}

function timer() {
    if ((milisecond += 10) == 1000) {
        milisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').textContent = returnData(hour);
    document.getElementById('minutes').textContent = returnData(minute);
    document.getElementById('seconds').textContent = returnData(second);
    document.getElementById('miliseconds').textContent = returnData(milisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}