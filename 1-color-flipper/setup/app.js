const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];




  document.getElementById("btn").onclick = function()
  {
    const index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index];
    let colour = document.getElementsByClassName("color");
    colour[0].innerHTML = colors[index];
    colour[0].style.color = colors[index];
  }
  
