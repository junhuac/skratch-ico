export default function startTimer(parent) {

    var end = new Date('03/15/2018 11:59 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.querySelector(`.${parent} .countdown`).innerHTML = 'EXPIRED!';
        }
        var days = Math.floor(distance / _day);
        days = addLeading0(days);
        var hours = Math.floor((distance % _day) / _hour);
        hours = addLeading0(hours);
        var minutes = Math.floor((distance % _hour) / _minute);
        minutes = addLeading0(minutes);
        var seconds = Math.floor((distance % _minute) / _second);
        seconds = addLeading0(seconds);

        document.querySelector(`.${parent} .countdown`).innerHTML = '<span class="days-text">' + days + ':';
        document.querySelector(`.${parent} .countdown`).innerHTML += '<span class="hours-text">' + hours + ':';
        document.querySelector(`.${parent} .countdown`).innerHTML += '<span class="minutes-text">' + minutes + ':';
        document.querySelector(`.${parent} .countdown`).innerHTML += '<span class="seconds-text">' + seconds;

        function addLeading0(number) {
            if(number.toString().length === 1) {
                return "0" + number;
            } else {
                return number;
            }
        }
    }

    showRemaining();

    // window.timer = setInterval(showRemaining, 1000);
}
