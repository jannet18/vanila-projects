const ratingEls = document.querySelectorAll('.ratings-container');
const btnEl = document.getElementById('btn');

const container = document.querySelector('.container');

let selectedRating = '';
// function removeActive(){
//     ratingEls.forEach(function (ratingEl){
//         ratingEl.classList.remove('active');
//     })
// }

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click', function (e){
        ratingEls.forEach((ratingEl) => {
            ratingEl.classList.remove('active');
        })
        // removeActive();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add('active');
        e.target.parentNode.classList.add("active");
    });
    
});


btnEl.addEventListener('click', function () {
    if (selectedRating !== ''){
container.innerHTML = `<strong>Thank you!</strong>
<br>
<br>
<strong>Feedback: ${selectedRating}</strong>
<p>We'll use your feedback to improve our customer support.</p>
`;
    }
});

