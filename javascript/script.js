const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// animation

const tl = gsap.timeline();

tl.from("header", {
  opacity: 0,
  duration: 1.2,
  y: -100,
});
tl.from(".hero", {
  opacity: 0,
  duration: 1.2,
  y: 100,
});
