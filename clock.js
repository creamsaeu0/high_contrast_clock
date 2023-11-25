const clock = document.getElementById('clock');

var displaySecond = false; //display second when the user clicked the clock

function displayTime(hour, min, sec) {
    if (!displaySecond) { 
        clock.innerText = `${hour > 9 ? hour : `0${hour}`}:${min > 9 ? min : `0${min}`}`
    } else {
        clock.innerText = `${hour > 9 ? hour : `0${hour}`}:${min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`
    }

}

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    displayTime(hour, minute, second);
}

if(clock) {
    clock.addEventListener('mouseout', function() {
        displaySecond = false;
        clearInterval(runClock);
        getTime();
        runClock = setInterval(getTime, 900);
    });
}

    if(clock) {
        clock.addEventListener('mouseover', function() {
            displaySecond = true;
            clearInterval(runClock);
            getTime();
            runClock = setInterval(getTime, 1000);
        });
}

getTime();
runClock = setInterval(getTime, 1000);
