// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const btn2 =   document.getElementsByClassName("nav-toggle")
const btn =  document.querySelector(".nav-toggle")
const links = document.querySelector("ul")

btn.addEventListener('click',function()
{ 
    links.classList.toggle("show-links")
})