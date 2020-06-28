const btns = document.querySelectorAll(".tab-btn")
const content = document.querySelectorAll(".content")
const about = document.querySelector(".about")

about.addEventListener('click',function(e)
{
    const id = e.target.dataset.id

    if(id)
    {
        btns.forEach(function(btn){
           
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            content.forEach(function(item){
                item.classList.remove("active")
            })

            const element = document.getElementById(id)
            element.classList.add("active")
    }
})

/*btns.forEach(function(btn){
    btn.addEventListener('click',function(e)
    {
        btns.forEach(function(btn){
            btn.classList.remove("active")
        })
       
      
        content.forEach(function(item)
        {
            if (btn.dataset.id === item.id)
            {
                btn.classList.add("active")
                item.classList.add("active")
            }

            else
            {
            
                item.classList.remove("active")
            }

        })

       
    }
    )
})*/