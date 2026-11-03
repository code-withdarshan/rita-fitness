function initMenu() {
  const menuButton = document.getElementById('menuBtn');
  const closeButton = document.getElementById('closeMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  if (!menuButton || !closeButton || !menu || !backdrop) return () => {};

  function setOpen(open, restoreFocus = true) {
    menu.classList.toggle('open', open);
    backdrop.classList.toggle('open', open);
    menu.toggleAttribute('inert', !open);
    menu.setAttribute('aria-hidden', String(!open));
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
    if (open) closeButton.focus();
    else if (restoreFocus) menuButton.focus();
  }

  const toggle = () => setOpen(!menu.classList.contains('open'));
  const close = () => setOpen(false);
  const closeForLink = () => setOpen(false, false);
  const onKeyDown = (event) => {
    if (!menu.classList.contains('open')) return;
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...menu.querySelectorAll('button, a[href]')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };
  const onResize = () => {
    if (window.innerWidth >= 1024 && menu.classList.contains('open')) setOpen(false, false);
  };

  menuButton.addEventListener('click', toggle);
  closeButton.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  const links = [...menu.querySelectorAll('a')];
  links.forEach(link => link.addEventListener('click', closeForLink));
  document.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onResize);

  return () => {
    menuButton.removeEventListener('click', toggle);
    closeButton.removeEventListener('click', close);
    backdrop.removeEventListener('click', close);
    links.forEach(link => link.removeEventListener('click', closeForLink));
    document.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('resize', onResize);
    document.body.classList.remove('menu-open');
  };
}

export function initAboutInteractions() {
  return initMenu();
}

export function initHomeInteractions() {
  const cleanupMenu = initMenu();
  const nav = document.getElementById('nav');
  const onScroll = () => {
    const threshold = 1.875 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    nav?.classList.toggle('scrolled', window.scrollY > threshold);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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
    cleanupMenu();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', move);
    revealObserver.disconnect();
    counterObserver.disconnect();
    animationFrames.forEach(cancelAnimationFrame);
    buttons.forEach(button => button.removeEventListener('click', onButtonClick));
    if (timer) clearInterval(timer);
  };
}
