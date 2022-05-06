// showing skills on scroll + droping header's opacity

let progress = document.querySelectorAll('.progress span')
let section = document.querySelector('.skills')
let header = document.querySelector('header')

window.onscroll = function (){
    if(window.scrollY>=section.offsetTop) {
        progress.forEach(function(e){
            e.style.cssText=`width:${e.dataset.width}`
        })
    }
    if(scrollY) {
        header.style.cssText='opacity:.8'
    } else {
        header.style.cssText='opacity:1'
    }
}


// toggle the nav menu

let navToggle = document.querySelector('.hamburger')
let nav = document.querySelector('#nav-mobile')
let overlay = document.querySelector('.mobile-overlay')

navToggle.addEventListener('click',function() {
    nav.style.cssText='transform: scale(1,1)'
    overlay.style.cssText='display: block'
    document.body.style.cssText='overflow:hidden'
})

overlay.addEventListener('click',function(){
        nav.style.cssText='transform: scale(0,1)'
        overlay.style.cssText='display: none'
        document.body.style.cssText='overflow:auto'
    })