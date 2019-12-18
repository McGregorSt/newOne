$(document).ready(function() {
  $('.media__player svg').on('click', function() {
   let src = 'https://www.youtube.com/embed/SJ7Q6Gd1rJE?autoplay=1&rel=0'
    $('#youtube').attr('src', src)
    $('.modal').toggleClass('overlay')
  })
  function modalHide() {
    $('#youtube').attr('src', '')
    $('.modal').toggleClass('overlay')
    
  }
  $('.overlay').on('click', modalHide)

  const initialWatch = {
    seconds: 15,
    minutes: 30,
    hours: 20,
    days: 5
  }
  
  const countDownWatch = {
    seconds: initialWatch.seconds,
    minutes: initialWatch.minutes,
    hours: initialWatch.hours,
    days: initialWatch.days
  }

  const seconds = $('.timer__item--ss')
  const minutes = $('.timer__item--mm')
  const hours = $('.timer__item--hh')
  const days = $('.timer__item--dd')

  const tick = 1000
  let sec = setInterval(() => {
    countDownWatch.seconds -= 1000 / 1000
    if (countDownWatch.seconds < 0){  
      countDownWatch.minutes -= 1
      countDownWatch.seconds = 59
      if (countDownWatch.minutes < 0) {
        countDownWatch.hours -= 1
        countDownWatch.minutes = 59
        if (countDownWatch.hours < 0) {
          countDownWatch.days -= 1
          countDownWatch.hours = 23
        }
      }
    } else if (
      countDownWatch.days === 0 &&
      countDownWatch.hours === 0 &&
      countDownWatch.minutes === 0 &&
      countDownWatch.seconds === 0 
      ) {
        clearInterval(sec)
      }

      seconds.html(countDownWatch.seconds < 10 ? `0${countDownWatch.seconds}s` : `${countDownWatch.seconds}s`)
      minutes.html(countDownWatch.minutes < 10 ? `0${countDownWatch.minutes}m` : `${countDownWatch.minutes}m`)
      hours.html(countDownWatch.hours < 10 ? `0${countDownWatch.hours}h` : `${countDownWatch.hours}h`)
      days.html(countDownWatch.days < 10 ? `0${countDownWatch.days}d` : `${countDownWatch.days}d`)
  }, tick)

    let windowWidth = window.screen.width
    const menuItem = $('.footer__menu--item')
    let faq = menuItem[0]
    let termsOfUse = menuItem[1]
    let contactUs = $('.footer__contact--a')

    if (windowWidth < 415) {
      $('.email__content--button').html('')
      faq.innerText = 'Terms of Use'
      termsOfUse.innerText = 'FAQ'
      contactUs[0].innerText = 'hello@stay.io'
    }
})  