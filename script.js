// Create Clock
setInterval(time, 1000);

function time() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();

    // Remove 0 after it's more than 9
    if (hour < 10 ) {
        hour = "0" + hour;
    }
    else if (minute < 10 ) {
        minute = "0" + minute;
    }

    // Check situation if it is between AM or PM
    am_pm = "AM";
    if (hour >= 12) {
        hour = hour - 12;
        am_pm = "PM";
    }
    else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    // Format of time
    var currenTime = hour + ":" + minute + " " + am_pm;
    
    document.getElementById("clock").innerHTML = currenTime;
}

// Create Date

// Date object
var daily = new Date();

// Get month
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get day
var day = daily.getDay();

switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    
}


document.getElementById("date").innerHTML = daily.getDate() + ", " + day;
document.getElementById("month").innerHTML = month[daily.getMonth()];
// Create calculator

// Function to show number to calculator's screen when it's being clicked
function cal(num) {
    document.getElementById("result").value += num;
}

// Function to get result after calculation
function solve() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

// function to clear calculator's screen
function clr() {
    document.getElementById("result").value= "";
}

// Create Stopwatch
var seconds = 0;
var minutes = 0;
var hours = 0;
var showMilisecond = 0;
var showMinutes = 0;
var showSeconds = 0;
var showHours = 0;
var interval;
var status = "stopped";


function stopWatch() {
    seconds++;
    
    if(seconds == 60) {
        seconds = 0;
        minutes++;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        showSeconds = "0" + seconds;
    }
    else {
        showSeconds = seconds;
    }

    if(minutes < 10) {
        showMinutes = "0" + minutes;
    }
    else {
        showMinutes = minutes;
    }

    if(hours < 10) {
        showHours = "0" + hours;
    }
    else
    {
       showHours = hours;
    }

    document.getElementById("display").innerHTML = showHours + ":" + showMinutes + ":" + showSeconds;
}

// create function to start time 
function start() {
    if(status == "stopped") {

        // Create interval for 1 second 
        interval = setInterval(stopWatch, 1000);
        
        document.getElementById("stop").innerHTML = "Stop";
        status = "started";
    }
}

// create function to stop time 
function stop() {
    if (status == "started") {

        // Stop time 
        clearInterval(interval);
        
        document.getElementById("start").innerHTML = "Start";
        status = "stopped";
    }
}

// create function to reset time 
function reset() {
    
    // Stop time and reset it 
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Start";
}