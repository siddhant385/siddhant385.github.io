
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
// var pythonpercent = Number(getElementById('python').innerHTML)
// var csspercent = Number(getElementById('css').innerHTML)
// var dockerpercent = Number(getElementById('docker').innerHTML)
// var htmlpercent = Number(getElementById('html').innerHTML)
// var javascriptpercent = Number(getElementById('js').innerHTML)



// var csspercent = getElementById('')
function Progress(id,percent){
    var progress = new ProgressBar.Line('.'+id, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#ffc800',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#00000'},
      to: {color: '#ffc800'},
    });
    console.log(percent)
    progress.animate(percent)
  
}
  Progress('python-percent',document.getElementById('python-percent').innerHTML.split('%')[0]/100)
  Progress('css-percent',document.getElementById('css-percent').innerHTML.split('%')[0]/100)
  Progress('docker-percent',document.getElementById('docker-percent').innerHTML.split('%')[0]/100)
  Progress('html-percent',document.getElementById('html-percent').innerHTML.split('%')[0]/100)
  Progress('javascript-percent',document.getElementById('javascript-percent').innerHTML.split('%')[0]/100)
  Progress('bash-percent',document.getElementById('bash-percent').innerHTML.split('%')[0]/100)
  
  
  
