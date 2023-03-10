const trailer = document.getElementById('trailer')

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
  }

  trailer.animate(keyframes, { duration: 0, fill: 'forwards' })
}

const getTrailerClass = (type) => {
  switch (type) {
    case 'twitch':
      return 'fa-brands fa-twitch'
    case 'twitter':
      return 'fa-brands fa-twitter'
    case 'insta':
      return 'fa-brands fa-instagram'
    case 'discord':
      return 'fa-brands fa-discord'
    default:
      return 'fa-solid fa-link'
  }
}

const getTrailerColor = (type) => {
  switch (type) {
    case 'twitch':
      return 'rgba(100, 65, 164, 0.7)'
    case 'twitter':
      return 'rgba(29, 160, 242, 0.7)'
    case 'insta':
      return 'radial-gradient(circle at 30% 107%, rgba(253, 244, 151, 0.7) 0%, rgba(253, 244, 151, 0.7) 5%, rgba(253, 88, 73, 0.7) 45%, rgba(214, 36, 158, 0.7) 60%, rgba(40, 89, 235, 0.7) 90%)'
    case 'link':
      return 'rgba(83, 130, 232, 0.7)'
    case 'discord':
      return 'rgba(114, 137, 218, 0.7)'
    default:
      return 'black'
  }
}

window.onmousemove = (e) => {
  const interactable = e.target.closest('.interactable')
  interacting = interactable !== null

  const icon = document.getElementById('trailer-icon')
  const trailer = document.getElementById('trailer')

  animateTrailer(e, interacting)

  trailer.dataset.type = interacting ? interactable.dataset.type : ''
  trailer.style.background = interacting ? interactable.dataset.type : ''

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type)
    trailer.style.background = getTrailerColor(interactable.dataset.type)
  }
}
