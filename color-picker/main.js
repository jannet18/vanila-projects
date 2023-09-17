// initialize color variable
const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

// get DOM selectors
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// add an event to the selector
btn.addEventListener('click', function (){
    // pick a random color
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// function getRandomNumber() {
//     // math.floor round down to the nearest integer
//     return Math.floor(Math.random() * colors.length);
// }

