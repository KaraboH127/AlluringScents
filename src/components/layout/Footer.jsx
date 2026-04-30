import { Link } from 'react-router-dom';
import { InstagramIcon, WhatsAppIcon } from '../shared/SocialIcons';

// Shared footer used across all routes.
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img className="brand-mark footer-brand-mark" src="/Assets/images/Alluring_scents_logo.jpg" alt="Alluring Scents logo" />
              <div className="footer-brand-copy">
                <div className="footer-brand-name">Alluring <span>Scents</span></div>
                <div className="footer-tagline">Savour the Seduction</div>
              </div>
            </div>
            <p className="footer-desc">Premium fragrances curated with intent and delivered across South Africa since 2024.</p>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Navigation</div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/order">Order &amp; Delivery</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <a href="https://wa.me/27671761716" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <WhatsAppIcon />
              <span>WhatsApp Us</span>
            </a>
            <a href="https://www.instagram.com/_alluringscents_/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">&copy; 2026 Alluring Scents. All rights reserved.</span>
          <span className="footer-founders">Founded by Thato Padi and Katlego Kennedy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
