var navbar = document.querySelector('.navbar')

var miPresento = document.querySelector('.mi-presento')



window.addEventListener('scroll', function(){
    
    startpos = -50 
    var scrollPos = this.window.scrollY / 10
    var actpos = -155 + scrollPos
    console.log(scrollPos)


    miPresento.style = 'transform: translateX('+ actpos +'%);'
})
    
    // window.addEventListener('scroll', function(){
    //     if (this.window.screen.width > 1000)
    //     {
    //         console.log(window.screen.width)
    //             if (window.pageYOffset < 990)
    //             {
    //                 navbar.style.display = "none"

    //             }
    //             else
    //             {
    //                 navbar.style.display = "block"
    
    //             }
    //         }
    //     else
    //     {
    //         navbar.style.display = "none"
    //     }
    // })


