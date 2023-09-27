const  observer = new IntersectionObserver(entries =>
    {
        entries.forEach((entry)=>
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });




    const  observerY = new IntersectionObserver(entries =>
        {
            entries.forEach((entry)=>
            {
                if(entry.isIntersecting)
                {
                    entry.target.classList.add('showY');
                }else{
                    entry.target.classList.remove('showY');
                }
            });
        });
    



const hiddenElements= document.querySelectorAll('.Hidden');
hiddenElements.forEach((el)=>(observer.observe(el)));





