const sidebarbtn = document.querySelector(".sidebar-toggle")
const sidebar = document.querySelector(".sidebar")
const closesidebar = document.querySelector(".close-btn")

sidebarbtn.addEventListener('click',function(){

    sidebar.classList.toggle("show-sidebar")

})

closesidebar.addEventListener('click',function(){

sidebar.classList.remove("show-sidebar")

})