var animation = bodymovin.loadAnimation({
  container: document.getElementById("hero-animation"),
  renderer: "svg",
  autoplay: false,
  loop: true,
  path: "js/data.json"
});

animation.play();
