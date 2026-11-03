export function initHomeInteractions() {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

  const animationFrames = new Set();
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.target);
      const step = Math.max(1, Math.round(target / 60));
      let current = 0;
      const tick = () => {
        current += step;
        if (current >= target) {
          element.textContent = target + (target >= 98 ? '' : '+');
        } else {
          element.textContent = current;
          const frame = requestAnimationFrame(tick);
          animationFrames.add(frame);
        }
      };
      tick();
      observer.unobserve(element);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(element => counterObserver.observe(element));

  const track = document.getElementById('testiTrack');
  const buttons = [...document.querySelectorAll('.testiBtn')];
  const slideCount = track?.children.length || 0;
  let index = 0;
  const visibleSlides = () => {
    if (matchMedia('(min-width: 64rem)').matches) return 3;
    if (matchMedia('(min-width: 40rem)').matches) return 2;
    return 1;
  };
  const move = () => {
    if (!track || !slideCount) return;
    index = Math.min(index, Math.max(0, slideCount - visibleSlides()));
    track.style.transform = `translateX(-${index * (100 / visibleSlides())}%)`;
  };
  const onButtonClick = (event) => {
    const positions = slideCount - visibleSlides() + 1;
    if (positions <= 0) return;
    index = (index + Number(event.currentTarget.dataset.dir) + positions) % positions;
    move();
  };
  buttons.forEach(button => button.addEventListener('click', onButtonClick));
  window.addEventListener('resize', move);
  const timer = slideCount ? setInterval(() => {
    index = (index + 1) % (slideCount - visibleSlides() + 1);
    move();
  }, 6000) : null;

  return () => {
    window.removeEventListener('resize', move);
    revealObserver.disconnect();
    counterObserver.disconnect();
    animationFrames.forEach(cancelAnimationFrame);
    buttons.forEach(button => button.removeEventListener('click', onButtonClick));
    if (timer) clearInterval(timer);
  };
}
