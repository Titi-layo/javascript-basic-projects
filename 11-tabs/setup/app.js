const btns = document.querySelectorAll(".tab-btn")
const content = document.querySelectorAll(".content")

btns.forEach(function(btn){
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
})