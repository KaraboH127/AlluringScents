document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeroVideo();
  initProductFilters();
  initFaq();
  initRevealAnimations();
});

function initNav() {
  const nav = document.getElementById('mainNav');
  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) {
    return;
  }

  const setMenuState = (isOpen) => {
    hamburger.classList.toggle('open', isOpen);
    mobileNav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  setMenuState(false);

  hamburger.addEventListener('click', () => {
    setMenuState(!mobileNav.classList.contains('open'));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav.classList.contains('open')) {
      setMenuState(false);
    }
  });
}

function initHeroVideo() {
  const heroVideo = document.querySelector('.hero-video');
  if (!heroVideo) {
    return;
  }

  const hero = heroVideo.closest('.hero');
  const markVideoReady = () => {
    if (hero) {
      hero.classList.add('video-ready');
    }
  };

  const attemptPlay = () => {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.setAttribute('playsinline', '');
    heroVideo.setAttribute('webkit-playsinline', '');

    const playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(markVideoReady).catch(() => {});
    }
  };

  if (heroVideo.readyState >= 2) {
    markVideoReady();
    attemptPlay();
  } else {
    heroVideo.addEventListener('loadeddata', markVideoReady, { once: true });
    heroVideo.addEventListener('canplay', markVideoReady, { once: true });
  }

  heroVideo.addEventListener('loadedmetadata', attemptPlay, { once: true });
  heroVideo.addEventListener('canplay', attemptPlay);
  heroVideo.addEventListener('pause', () => {
    if (!document.hidden) {
      attemptPlay();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      attemptPlay();
    }
  });

  window.addEventListener('focus', attemptPlay);
  window.addEventListener('pageshow', attemptPlay);
  window.addEventListener('resize', attemptPlay, { passive: true });

  ['touchstart', 'pointerdown'].forEach((eventName) => {
    document.addEventListener(eventName, attemptPlay, { once: true, passive: true });
  });

  attemptPlay();
}

function initProductFilters() {
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  if (!filterBtns.length) {
    return;
  }

  const cards = Array.from(document.querySelectorAll('.product-card'));
  const countText = document.querySelector('.count-text');

  const updateVisibleCount = (filter) => {
    const visibleCards = cards.filter((card) => !card.hidden).length;
    if (!countText) {
      return;
    }

    if (filter === 'all') {
      countText.innerHTML = `Showing <strong>all ${visibleCards}</strong> fragrances`;
      return;
    }

    const label = filter.charAt(0).toUpperCase() + filter.slice(1);
    const suffix = visibleCards === 1 ? 'fragrance' : 'fragrances';
    countText.innerHTML = `Showing <strong>${visibleCards} ${label}</strong> ${suffix}`;
  };

  const applyFilter = (filter) => {
    cards.forEach((card) => {
      const gender = (card.dataset.gender || '').toLowerCase();
      const matches = filter === 'all' || gender === filter;
      card.hidden = !matches;
    });

    updateVisibleCount(filter);
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((button) => button.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter || 'all');
    });
  });

  applyFilter(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
}

function initFaq() {
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));
  if (!faqItems.length) {
    return;
  }

  const closeFaqItem = (item) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    item.classList.remove('open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
    if (answer) {
      answer.style.maxHeight = null;
      answer.setAttribute('aria-hidden', 'true');
    }
  };

  const openFaqItem = (item) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    item.classList.add('open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
    if (answer) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      answer.setAttribute('aria-hidden', 'false');
    }
  };

  faqItems.forEach((item, index) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) {
      return;
    }

    const answerId = answer.id || `faq-answer-${index + 1}`;
    answer.id = answerId;
    button.setAttribute('type', 'button');
    button.setAttribute('aria-controls', answerId);
    button.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(closeFaqItem);

      if (!isOpen) {
        openFaqItem(item);
      }
    });
  });
}

function initRevealAnimations() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) {
    return;
  }

  let threshold = 0.1;
  let stagger = 80;
  const body = document.body;

  if (body.classList.contains('page-home')) {
    threshold = 0.12;
  } else if (body.classList.contains('page-products')) {
    threshold = 0.08;
    stagger = 70;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * stagger);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  revealEls.forEach((el) => observer.observe(el));
}
