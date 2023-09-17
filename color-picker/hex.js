const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// hex is a combination of # and 5 chars that can either be 0 - 9 or A - F
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // initialize array to store the color generated randomly
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        // increament the iteration
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
   
})

function getRandomNumber() {
    return (Math.floor(Math.random() * hex.length));
}``