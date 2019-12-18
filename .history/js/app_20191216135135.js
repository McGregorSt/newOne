let chi = document.querySelectorAll('.subs__timer__global:nth-child(2n+1)')
console.log(chi)

$(document).ready(function() {
  let $playButton = $('.media__player svg')
  let videoSrc = $('#player').attr('src')
  console.log(videoSrc)

  $($playButton).on('click', function(e) {
    console.log('event', e)
    $('.main').toggleClass('show-modal')
    $('#.main').toggleClass('show-player')
  })
})