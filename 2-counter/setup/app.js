
let value = document.querySelector("#value")


document.querySelector(".decrease").onclick = function()
  {
    value.textContent = Number(value.textContent) - 1
    checkVal()
  }


  document.querySelector(".increase").onclick = function()
  {
    value.textContent = Number(value.textContent) + 1
    checkVal()
  }


  document.querySelector(".reset").onclick = function()
  {
    value.textContent = 0
    checkVal()

  }



  function checkVal()
{
    if(Number(value.textContent) > 0)
    {
        value.style.color = "green"
    }  

    else if (Number(value.textContent) < 0)
    {
        value.style.color = "red"
    }  

    else
    {
        value.style.color = "black"
    }
}