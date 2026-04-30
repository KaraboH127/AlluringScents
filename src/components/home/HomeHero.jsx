import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { HeartIcon, WhatsAppIcon } from '../shared/SocialIcons';

// Home hero section with background video and primary call-to-actions.
function HomeHero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heroVideo = videoRef.current;

    if (!hero || !heroVideo) {
      return undefined;
    }

    const markVideoReady = () => {
      hero.classList.add('video-ready');
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

    const onVisibleAttempt = () => {
      if (!document.hidden) {
        attemptPlay();
      }
    };

    heroVideo.addEventListener('loadedmetadata', attemptPlay, { once: true });
    heroVideo.addEventListener('canplay', attemptPlay);
    heroVideo.addEventListener('pause', onVisibleAttempt);
    document.addEventListener('visibilitychange', onVisibleAttempt);
    window.addEventListener('focus', attemptPlay);
    window.addEventListener('pageshow', attemptPlay);
    window.addEventListener('resize', attemptPlay, { passive: true });

    const touchStartListener = () => attemptPlay();
    const pointerDownListener = () => attemptPlay();

    document.addEventListener('touchstart', touchStartListener, { once: true, passive: true });
    document.addEventListener('pointerdown', pointerDownListener, { once: true, passive: true });

    attemptPlay();

    return () => {
      heroVideo.removeEventListener('canplay', attemptPlay);
      heroVideo.removeEventListener('pause', onVisibleAttempt);
      document.removeEventListener('visibilitychange', onVisibleAttempt);
      window.removeEventListener('focus', attemptPlay);
      window.removeEventListener('pageshow', attemptPlay);
      window.removeEventListener('resize', attemptPlay);
      document.removeEventListener('touchstart', touchStartListener);
      document.removeEventListener('pointerdown', pointerDownListener);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-video-wrap">
        <video className="hero-video" autoPlay muted loop preload="auto" aria-hidden="true" ref={videoRef}>
          <source src="/Assets/video/Hero-Video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-bg-fallback"></div>
      <div className="hero-overlay"></div>
      <div className="hero-grain"></div>
      <div className="hero-ring hero-ring-1"></div>
      <div className="hero-ring hero-ring-2"></div>
      <div className="hero-ring hero-ring-3"></div>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">South Africa - Est. 2024 - Premium fragrances</p>
          <h1 className="hero-title">
            <em>Alluring</em>
            <strong>Scents</strong>
          </h1>
          <p className="hero-motto">Savour the Seduction</p>
          <p className="hero-intro">A perfume house with a sharper point of view: rich blends, clean presentation, and a signature trail that lingers long after the room forgets everything else.</p>
          <div className="hero-ctas">
            <Link to="/products" className="btn btn-green btn-lg">
              <HeartIcon />
              Shop Now
            </Link>
            <a href="https://wa.me/27671761716?text=Hi%20Alluring%20Scents!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
              <WhatsAppIcon width="16" height="16" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <p className="hero-aside-label">Current Edit</p>
          <div className="hero-aside-card">
            <span className="hero-aside-kicker">Signature Collection</span>
            <h2>Eight scents curated to feel magnetic, modern, and unmistakably yours.</h2>
          </div>
          <div className="hero-stat-row">
            <div className="hero-stat">
              <span>01</span>
              <p>Luxury blends built for presence, memory, and mood.</p>
            </div>
            <div className="hero-stat">
              <span>ZA</span>
              <p>Curated in South Africa with a cleaner, fashion-led point of view.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Discover</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default HomeHero;
