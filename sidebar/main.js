// select DOM attributes to focus on
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector(".sidebar");

// add event listener

sidebarToggle.addEventListener('click', function () {
    // console.log(sidebar.classList);
    // if (sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // } else {
    //     sidebar.classList.add("show-sidebar");
    // }
    // TOGGLE METHOD
    sidebar.classList.toggle('show-sidebar');
});
//  close sidebar 
closeBtn.addEventListener('click', function () {
sidebar.classList.remove("show-sidebar");
});

