const trailer = document.getElementById('trailer')

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
  }

  trailer.animate(keyframes, { duration: 800, fill: 'forwards' })
}

const getTrailerClass = (type) => {
  switch (type) {
    case 'twitch':
      return 'fa-brands fa-twitch'
    case 'twitter':
      return 'fa-brands fa-twitter'
    case 'insta':
      return 'fa-brands fa-instagram'
    case 'video':
      return 'fa-solid fa-play'
    default:
      return 'fa-solid fa-link'
  }
}

window.onmousemove = (e) => {
  const interactable = e.target.closest('.interactable')
  interacting = interactable !== null

  const icon = document.getElementById('trailer-icon')

  animateTrailer(e, interacting)

  trailer.dataset.type = interacting ? interactable.dataset.type : ''

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type)
  }
}
