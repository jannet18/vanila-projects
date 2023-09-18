// classList - gets all the classes in the target
// METHODS
// contains - checks classList for a particular class 
// add - add a class 
// remove - removes a class
// toggle - toggles/swaps existing classes


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function () {
    // console.log(links.classList.contains('show-links'));
    // console.log(links.classList.contains('links'));

    // ***** add and remove methods **** //
// if (links.classList.contains("show-links")){
//     links.classList.remove('show-links');
// } else {
//     links.classList.add("show-links");
// }

//  **** toggle method ***** //
links.classList.toggle("show-links");
});