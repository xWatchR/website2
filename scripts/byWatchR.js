const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let interval = null

document.getElementById('byWatchR').onmouseover = (event) => {
  let iteration = 0

  clearInterval(interval)

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random() * 36)]
      })
      .join('')

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval)
    }

    iteration += 1 / 3
  }, 50)
}

document.getElementById('welcome').onmouseover = (event) => {
  let iteration = 0

  clearInterval(interval)

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index]
        }
        return letters[Math.floor(Math.random() * 36)]
      })
      .join('')

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval)
    }

    iteration += 1 / 3
  }, 50)
}
