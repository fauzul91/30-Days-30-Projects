var countDownDate = new Date("Dec 30, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result to the HTML elements with corresponding ids
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, stop the timer
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "EXPIRED";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
    }
}, 1000);
