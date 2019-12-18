let chi = document.querySelectorAll('.subs__timer__global:nth-child(2n+1)')
console.log(chi)

$(document).ready(function() {
  $('.meadia').on('click', function() {
   let src = 'https://www.youtube.com/embed/SJ7Q6Gd1rJE?autoplay=1&rel=0'
    $('#youtube').attr('src', src)
    $('.modal').toggleClass('overlay')
  })
  function modalHide() {
    $('#youtube').attr('src', '')
    $('.modal').toggleClass('overlay')
    
  }
  $('.overlay').on('click', modalHide)
})  