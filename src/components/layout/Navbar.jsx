import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from '../shared/SocialIcons';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/order', label: 'Order & Delivery' }
];

// Shared top navigation with sticky behavior and a mobile menu.
function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const navClassName = isScrolled ? 'scrolled' : '';

  return (
    <>
      <nav id="mainNav" className={navClassName}>
        <Link className="nav-brand" to="/">
          <img className="brand-mark nav-brand-mark" src="/Assets/images/Alluring_scents_logo.jpg" alt="Alluring Scents logo" />
          <span className="brand-copy">
            <span className="nav-brand-name">Alluring <span>Scents</span></span>
            <span className="nav-brand-tagline">Savour the Seduction</span>
          </span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/27671761716?text=Hi!%20I'd%20like%20to%20place%20an%20order%20with%20Alluring%20Scents."
          target="_blank"
          rel="noopener noreferrer"
          className="nav-wa"
        >
          <WhatsAppIcon />
          Order Now
        </a>

        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`.trim()}
          id="hamburger"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobileNav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`.trim()} id="mobileNav">
        {navItems.map((item) => (
          <NavLink
            key={`mobile-${item.to}`}
            to={item.to}
            end={item.end}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="https://wa.me/27671761716"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-wa-link"
          onClick={() => setIsMenuOpen(false)}
        >
          <WhatsAppIcon />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  );
}

export default Navbar;
