let chi = document.querySelectorAll('.subs__timer__global:nth-child(2n+1)')
console.log(chi)

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
  const seconds = $('.subs__timer__item__ss')
  const minutes = $('.subs__timer__item__mm')
  const hours = $('.subs__timer__item__hh')
  const days = $('.subs__timer__item__dd')

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

      // function toRender(units) {
      //   $(this) = units
      //   console.log(this.units)
      //   if (this.countDownWatch.units < 10){
      //     return this.units.html(`0${this.countDownWatch.units}s`)
      //   } else {
      //     return this.units.html(`${this.countDownWatch.units}s`)
      //   }
      // }

      toRender(seconds)
      seconds.html(`${countDownWatch.seconds}m`)
      minutes.html(`${countDownWatch.minutes}m`)
      hours.html(`${countDownWatch.hours}s`)
      days.html(`${countDownWatch.days}d`)
  }, tick)
})  