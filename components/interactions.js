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
  const communityVideos = communityVideoCards.map(card => card.querySelector('video')).filter(Boolean);
  const playedVideos = new WeakSet();
  const fullscreenVideos = new Set();
  const resetCommunityVideo = video => {
    const card = video.closest('.community-video-card');
    if (!card?.classList.contains('is-playing')) return;
    card.classList.remove('is-playing');
    card.classList.remove('is-mobile-expanded');
    document.body.classList.remove('video-open');
    playedVideos.delete(video);
    fullscreenVideos.delete(video);
    if (document.fullscreenElement === video) {
      document.exitFullscreen().catch(() => {});
    }
    if (video.webkitDisplayingFullscreen) {
      try { video.webkitExitFullscreen(); } catch {}
    }
    video.pause();
    video.controls = false;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.className = 'community-video-poster';
    video.load();
  };
  const onCommunityPlaying = event => playedVideos.add(event.currentTarget);
  const onCommunityPause = event => {
    const video = event.currentTarget;
    if (playedVideos.has(video)) resetCommunityVideo(video);
  };
  const onCommunityEnded = event => resetCommunityVideo(event.currentTarget);
  const onCommunityFullscreenEnd = event => resetCommunityVideo(event.currentTarget);
  const onFullscreenChange = () => {
    communityVideos.forEach(video => {
      if (document.fullscreenElement === video) fullscreenVideos.add(video);
      else if (fullscreenVideos.has(video)) resetCommunityVideo(video);
    });
  };
  const onCommunityVideoClick = event => {
    const card = event.currentTarget;
    if (event.target.closest('.community-video-close')) {
      resetCommunityVideo(card.querySelector('video'));
      card.querySelector('.community-video-play')?.focus();
      return;
    }
    const video = card.querySelector('.community-video-poster');
    if (!video || video.controls) return;
    communityVideos.filter(player => player !== video).forEach(resetCommunityVideo);
    card.classList.add('is-playing');
    video.className = 'community-video-player';
    video.controls = true;
    video.muted = false;
    const isMobileView = matchMedia('(max-width: 47.9375rem)').matches;
    if (isMobileView) {
      card.classList.add('is-mobile-expanded');
      document.body.classList.add('video-open');
      video.playsInline = true;
      video.setAttribute('playsinline', '');
    }
    if (isMobileView && typeof video.webkitEnterFullscreen === 'function') {
      try {
        video.webkitEnterFullscreen();
      } catch {
        // The screen-filling card remains available when native iPhone fullscreen is unavailable.
      }
    } else if (isMobileView && document.fullscreenEnabled && video.requestFullscreen) {
      try {
        video.requestFullscreen().catch(() => {
          // The screen-filling card remains available if the browser denies fullscreen.
        });
      } catch {
        // Keep playback available if fullscreen is unsupported in this context.
      }
    }
    const playback = video.play();
    playback.catch(() => resetCommunityVideo(video));
  };
  const onCommunityVideoKeyDown = event => {
    if (event.key !== 'Escape') return;
    const expandedCard = document.querySelector('.community-video-card.is-mobile-expanded');
    if (!expandedCard) return;
    resetCommunityVideo(expandedCard.querySelector('video'));
    expandedCard.querySelector('.community-video-play')?.focus();
  };
  communityVideoCards.forEach(card => card.addEventListener('click', onCommunityVideoClick));
  document.addEventListener('keydown', onCommunityVideoKeyDown);
  communityVideos.forEach(video => {
    video.addEventListener('playing', onCommunityPlaying);
    video.addEventListener('pause', onCommunityPause);
    video.addEventListener('ended', onCommunityEnded);
    video.addEventListener('webkitendfullscreen', onCommunityFullscreenEnd);
  });
  document.addEventListener('fullscreenchange', onFullscreenChange);

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
  const dotsContainer = document.getElementById('testiDots');
  const buttons = [...document.querySelectorAll('.testiBtn')];
  const slides = track ? [...track.children] : [];
  const slideCount = slides.length;
  const clones = [];
  let physicalIndex = slideCount;
  let logicalIndex = 0;
  let animating = false;
  let timer = null;
  const visibleSlides = () => {
    if (matchMedia('(min-width: 64rem)').matches) return 3;
    if (matchMedia('(min-width: 40rem)').matches) return 2;
    return 1;
  };
  const positionTrack = () => {
    track.style.transform = `translateX(-${physicalIndex * (100 / visibleSlides())}%)`;
  };
  const jumpToRealSlide = () => {
    physicalIndex = slideCount + logicalIndex;
    track.style.transition = 'none';
    positionTrack();
    void track.offsetWidth;
    track.style.transition = '';
  };
  const dots = slides.map((_, slideIndex) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'testi-dot';
    dot.dataset.reviewIndex = String(slideIndex);
    dot.setAttribute('aria-label', `Show review ${slideIndex + 1} of ${slideCount}`);
    return dot;
  });
  const updateDots = () => {
    dots.forEach((dot, dotIndex) => {
      dot.setAttribute('aria-current', dotIndex === logicalIndex ? 'true' : 'false');
    });
  };
  const moveBy = (amount) => {
    if (!track || slideCount < 2 || animating || amount === 0) return;
    logicalIndex = (logicalIndex + amount + slideCount) % slideCount;
    updateDots();
    if (reducedMotion.matches) {
      jumpToRealSlide();
      return;
    }
    animating = true;
    physicalIndex += amount;
    positionTrack();
  };
  const restartTimer = () => {
    if (timer) clearInterval(timer);
    timer = slideCount > 1 && !reducedMotion.matches
      ? setInterval(() => moveBy(1), 6000)
      : null;
  };
  const onButtonClick = (event) => {
    moveBy(Number(event.currentTarget.dataset.dir));
    restartTimer();
  };
  const onDotClick = (event) => {
    const dot = event.target.closest('button[data-review-index]');
    if (!dot || !dotsContainer.contains(dot)) return;
    const target = Number(dot.dataset.reviewIndex);
    const forward = (target - logicalIndex + slideCount) % slideCount;
    const backward = (logicalIndex - target + slideCount) % slideCount;
    moveBy(forward <= backward ? forward : -backward);
    restartTimer();
  };
  const onTransitionEnd = (event) => {
    if (event.target !== track || event.propertyName !== 'transform') return;
    if (physicalIndex < slideCount || physicalIndex >= slideCount * 2) jumpToRealSlide();
    animating = false;
  };
  const onResize = () => {
    if (!track || !slideCount) return;
    animating = false;
    jumpToRealSlide();
  };
  if (track && slideCount > 1) {
    const cloneSlide = (slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.inert = true;
      clones.push(clone);
      return clone;
    };
    track.prepend(...slides.map(cloneSlide));
    track.append(...slides.map(cloneSlide));
    jumpToRealSlide();
    updateDots();
    dotsContainer?.replaceChildren(...dots);
    buttons.forEach(button => button.addEventListener('click', onButtonClick));
    dotsContainer?.addEventListener('click', onDotClick);
    track.addEventListener('transitionend', onTransitionEnd);
    window.addEventListener('resize', onResize);
    restartTimer();
  }

  return () => {
    window.removeEventListener('resize', onResize);
    revealObserver.disconnect();
    counterObserver.disconnect();
    animationFrames.forEach(cancelAnimationFrame);
    communityVideoCards.forEach(card => card.removeEventListener('click', onCommunityVideoClick));
    document.removeEventListener('keydown', onCommunityVideoKeyDown);
    communityVideos.forEach(video => {
      video.removeEventListener('playing', onCommunityPlaying);
      video.removeEventListener('pause', onCommunityPause);
      video.removeEventListener('ended', onCommunityEnded);
      video.removeEventListener('webkitendfullscreen', onCommunityFullscreenEnd);
    });
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    communityVideos.forEach(video => video.pause());
    document.body.classList.remove('video-open');
    if (galleryTimer) clearInterval(galleryTimer);
    if (removeGalleryTouch) removeGalleryTouch();
    galleryDots.forEach(dot => dot.replaceWith(dot.cloneNode(true)));
    buttons.forEach(button => button.removeEventListener('click', onButtonClick));
    dotsContainer?.removeEventListener('click', onDotClick);
    dotsContainer?.replaceChildren();
    track?.removeEventListener('transitionend', onTransitionEnd);
    clones.forEach(clone => clone.remove());
    if (track) {
      track.style.transform = '';
      track.style.transition = '';
    }
    if (timer) clearInterval(timer);
  };
}
