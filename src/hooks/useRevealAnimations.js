import { useEffect } from 'react';

// Recreates the original reveal-on-scroll behavior using IntersectionObserver.
export function useRevealAnimations(pageClassName) {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    if (!revealElements.length) {
      return undefined;
    }

    let threshold = 0.1;
    let stagger = 80;

    if (pageClassName === 'page-home') {
      threshold = 0.12;
    } else if (pageClassName === 'page-products') {
      threshold = 0.08;
      stagger = 70;
    }

    // Reset classes so reveals can run again on route navigation.
    revealElements.forEach((element) => element.classList.remove('visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * stagger);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [pageClassName]);
}
