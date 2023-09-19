// traversing the DOM, moving up and down the DOM
// it’s the act of selecting an element from another element.
const questBtn = document.querySelectorAll('.question-btn');
// for each takes a call back function
questBtn.forEach(function (btn) {
    // passing e as an arguement since its more than one button
   btn.addEventListener('click', function(e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
   });
});