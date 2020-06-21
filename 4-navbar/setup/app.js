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
    if(links.classList.contains("show-links"))
    links.classList.remove("show-links") 

    else
    links.classList.add("show-links")
})