// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const btn2 =   document.getElementsByClassName("nav-toggle")
const btn =  document.querySelector(".nav-toggle")
const links = document.querySelector("ul")
console.log(btn2)
btn.addEventListener('click',function()
{
    if(links.className === "links")
    links.className = "links show-links"

    else
    links.className = "links"
})