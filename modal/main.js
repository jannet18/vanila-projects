// select Dom attributes
const openModal = document.querySelector(".modal-btn");
const bannerModal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector('.close-btn');

openModal.addEventListener('click', function () {
bannerModal.classList.add("open-modal");
});

closeBtn.addEventListener('click', function () {
    bannerModal.classList.remove('open-modal');
})

