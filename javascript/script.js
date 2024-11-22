
var typed = new Typed('#passionate', {
    strings: ['<strong>passionate</strong>^5000', '<strong>Enthusiastic</strong>^5000','<strong>Zealous</strong>^5000','<strong>Devoted</strong>^5000'],
    typeSpeed: 100,
    loop:true,
    smartBackspace: true,
    backDelay: 700,
    backSpeed: 100,
    // fadeOut: true,
    // fadeOutClass: 'typed-fade-out',
    // fadeOutDelay: 500,

    
  
});

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})

// var typed = new Typed('#heading', {
//     strings: ['<strong>WORLD</strong>^5000', '<strong>SITE</strong>^5000'],
//     typeSpeed: 200,
//     loop:true,
//     smartBackspace: true,
//     showCursor: true,
//     cursorChar: '_',
//     autoInsertCss: true,
//     backSpeed:100,
// });


