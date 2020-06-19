const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


document.getElementById("btn").onclick = function()
  {
    
    let colour = `#`
    for(let i = 0 ; i < 6 ; i++)
    {
      index = Math.floor(Math.random() * hex.length);
      colour = colour + hex[index]
    }
    
    document.body.style.backgroundColor = colour;
    let temp = document.getElementsByClassName("color")
    temp[0].innerHTML = colour;
    
  }