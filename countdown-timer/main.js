const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let futureDate = new Date(2023, 10, 25, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth + 1, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on  ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime (){
    const today = new Date().getTime();
    console.log(today);
    const t = futureTime - today;

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = t / oneDay;
days = Math.floor(days);

let hours = Math.floor((t % oneDay) / oneHour);

let minutes = Math.floor((t % oneHour) / oneMinute);

let seconds = Math.floor((t % oneMinute) / 1000);

// set values arrays
const values = [days, hours, minutes, seconds];

function format(item){
    if (item < 10){
        return (item = `0${item}`);
    }
    return item;
}

items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
});

// set countdown
let countdown = setInterval(getRemainingTime, 1000);
if (t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`;
}

}
getRemainingTime();
 

