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

  const communityVideoCards = [...document.querySelectorAll('.community-video-card')];
  const communityVideoThumbnails = [...document.querySelectorAll('.community-video-poster')];
  communityVideoThumbnails.forEach(video => {
    video.addEventListener('loadeddata', () => {
      video.currentTime = 0;
      video.pause();
    }, { once: true });
  });
  const onCommunityVideoClick = event => {
    const card = event.currentTarget;
    const video = card.querySelector('.community-video-poster');
    if (!video || video.controls) return;
    document.querySelectorAll('.community-video-player').forEach(player => {
      player.pause();
    });
    video.className = 'community-video-player';
    video.controls = true;
    card.querySelector('.community-video-play')?.remove();
    video.play().catch(() => {
      video.controls = true;
    });
  };
  communityVideoCards.forEach(card => card.addEventListener('click', onCommunityVideoClick));

  const coachGallery = document.querySelector('.coach-gallery');
  const galleryItems = coachGallery ? [...coachGallery.querySelectorAll('.coach-gallery-item')] : [];
  const galleryDots = coachGallery ? [...coachGallery.querySelectorAll('.coach-gallery-dot')] : [];
  let galleryTimer = null;
  let galleryRotation = 0;
  let gallerySlide = 0;
  const mobileGallery = matchMedia('(max-width: 39.9375rem)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const setMobileGallerySlide = (index) => {
    gallerySlide = (index + galleryItems.length) % galleryItems.length;
    galleryItems.forEach((item, itemIndex) => {
      item.style.transform = `translateX(${(itemIndex - gallerySlide) * 100}%)`;
    });
    galleryDots.forEach((dot, dotIndex) => {
      const active = dotIndex === gallerySlide;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };
  let removeGalleryTouch = null;
  if (galleryItems.length > 1 && mobileGallery.matches) {
    coachGallery.classList.add('gallery-mobile-carousel');
    setMobileGallerySlide(0);
    galleryDots.forEach(dot => dot.addEventListener('click', () => {
      setMobileGallerySlide(Number(dot.dataset.galleryIndex));
    }));
    let pointerStartX = 0;
    const onPointerDown = event => {
      pointerStartX = event.clientX;
      coachGallery.setPointerCapture?.(event.pointerId);
    };
    const onPointerUp = event => {
      const distance = event.clientX - pointerStartX;
      if (Math.abs(distance) < 40) return;
      setMobileGallerySlide(gallerySlide + (distance < 0 ? 1 : -1));
    };
    coachGallery.addEventListener('pointerdown', onPointerDown);
    coachGallery.addEventListener('pointerup', onPointerUp);
    removeGalleryTouch = () => {
      coachGallery.removeEventListener('pointerdown', onPointerDown);
      coachGallery.removeEventListener('pointerup', onPointerUp);
    };
    if (!reducedMotion.matches) {
      galleryTimer = setInterval(() => {
        setMobileGallerySlide(gallerySlide + 1);
      }, 4200);
    }
  } else if (galleryItems.length > 1 && !reducedMotion.matches) {
    const rotateGallery = () => {
      galleryRotation = (galleryRotation + 1) % 4;
      coachGallery.classList.remove('gallery-rotation-0', 'gallery-rotation-1', 'gallery-rotation-2', 'gallery-rotation-3');
      coachGallery.classList.add(`gallery-rotation-${galleryRotation}`);
    };
    coachGallery.classList.add('gallery-rotation-0');
    galleryTimer = setInterval(rotateGallery, 4200);
  }

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
    communityVideoCards.forEach(card => card.removeEventListener('click', onCommunityVideoClick));
    communityVideoThumbnails.forEach(video => video.pause());
    if (galleryTimer) clearInterval(galleryTimer);
    if (removeGalleryTouch) removeGalleryTouch();
    galleryDots.forEach(dot => dot.replaceWith(dot.cloneNode(true)));
    buttons.forEach(button => button.removeEventListener('click', onButtonClick));
    if (timer) clearInterval(timer);
  };
}
