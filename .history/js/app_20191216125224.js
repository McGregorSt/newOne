let chi = document.querySelectorAll('.subs__timer__global:nth-child(2n+1)')
console.log(chi)

$(document).ready(function() {
  console.log('ready?')
  let $playButton = $('.media__player svg')
  console.log($playButton)
  $playButton.click(console.log('click'))
})