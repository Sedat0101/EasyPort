let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.slide-item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.slide-item')
    document.querySelector('.slide').prepend(items[items.length-1]) 
})


window.addEventListener("scroll", changeBg)

  function changeBg() {
    let navbar = document.getElementById("navi")
      if(window.scrollY  < 100 ) {
        navbar.classList.remove ("nav-color")
      } else {
        navbar.classList.add("nav-color")
      }
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  items:1,
  lazyLoad:true,
  loop:true,
  smartSpeed: 800,
  dragEndSpeed: 800,
  onInitialized: addNumbers,
  onTranslated: addNumbers  
});

function addNumbers(event) {
  let items = event.item.count
  let dots = $(".owl-dot")

  dots.each(function(index) {
    $(this).find("span").text(index + 1)
  })
}

$(".carousel2").owlCarousel({
  items:1,
  lazyLoad:true,
  loop:true,
  smartSpeed: 800,
  dragEndSpeed: 800,
  onInitialized: function(event) {addNumbers(event, 2)},
  onTranslated: function(event) {addNumbers(event, 2)}
})

function addNumbers(event, carouselIndex) {
  let dots = $(event.target).find(".owl-dot")
  dots.each(function(index) {
    $(this).find("span").text(index + 1)
  })
}