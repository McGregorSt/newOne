let chi = document.querySelectorAll('.subs__timer__global:nth-child(2n+1)')
console.log(chi)

$(document).ready(function() {
  let $playButton = $('.media__player svg')
  let videoSrc = $('#player').attr('src')
  console.log(videoSrc)

  $('.modal').on('click', function() {
    console.log('click')
  })
})