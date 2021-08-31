var navbar = document.querySelector('.navbar')

var sinistra = document.querySelector('.sinistra')
var destraUp = document.querySelector('.destraUp')
var destraDown = document.querySelector('.destraDown')


window.addEventListener('scroll', function(){
    

    startpos = -50 
    var scrollPos = this.window.scrollY / 10
    var sinistraAct = -50 + scrollPos
    var destraAct = -50 + scrollPos
    var destraDownAct = 100 - scrollPos
    
    if(scrollPos <= 50)
    {
        console.log(scrollPos)
         sinistra.style.left = ""+ sinistraAct  +"%"
         destraUp.style.top = "" + destraAct +"%"
         destraDown.style.top  = ""+ destraDownAct +"%"
     }
     else
     {
        sinistra.style.left = "0%"
        destraUp.style.top ="0.1%"
        destraDown.style.top="50%"
     }
})
    



