// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// scrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const link = document.querySelector('.links');

navToggle.addEventListener('click', function (){
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = link.getBoundingClientRect().height;
    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navbar = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function (){
    const   navbarHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;
    if (scrollHeight > navbarHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 800){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('scroll-link');

scrollLinks.forEach(function(link){
link.addEventListener('click', function(e) {
    e.preventDefault();
// access a specific link using getAttribute
const id = e.currentTarget.getAttribute('href').slice(1);
// console.log(id);
const element = document.getElementById(id);

// calculate the heights
const navbarHeight = navbar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
const fixedNav = navbar.classList.contains('fixed-nav');
let position = element.offsetTop - navbarHeight;
// console.log(position);

if (!fixedNav){
    position = position - navbarHeight;
}
if (navbarHeight > 82){
    position = position + containerHeight;
}
window.scrollTo({
    left: 0,
    top: position,
});

linksContainer.style.height = 0;
});
}); 