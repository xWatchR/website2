const text = document.querySelector('.text')
const button = document.getElementById('nav-toggle')

const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === 'true' ? 'false' : 'true'
}

function playAnimationEvery10Seconds() {
  setInterval(() => {
    text.classList.add('animate')
  }, 5000)

  text.addEventListener('animationend', () => {
    text.classList.remove('animate')
  })
}

playAnimationEvery10Seconds()
