const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
  };

  trailer.animate(keyframes, { duration: 800, fill: "forwards" });
};

const getTrailerClass = (type) => {
  switch (type) {
    case "twitch":
      return "fa-brands fa-twitch";
    case "twitter":
      return "fa-brands fa-twitter";
    case "insta":
      return "fa-brands fa-instagram";
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-link";
  }
};

const getTrailerColor = (type) => {
  switch (type) {
    case "twitch":
      return "rgba(100, 65, 164, 0.7)";
    case "twitter":
      return "rgba(29, 160, 242, 0.7)";
    case "insta":
      return "rgba(247, 119, 55, 0.7)";
    case "link":
      return "rgba(83, 130, 232, 0.7)";
    case "video":
      return "red";
    default:
      return "black";
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");
  const trailer = document.getElementById("trailer");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  trailer.style.backgroundColor = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
    trailer.style.backgroundColor = getTrailerColor(interactable.dataset.type);
  }
};
