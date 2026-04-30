import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../shared/SocialIcons';

// Home closing CTA band.
function HomeCtaBand() {
  return (
    <div className="cta-band">
      <div className="container">
        <h2>Ready to find your signature scent?</h2>
        <p>Reach us directly and we will help you choose a fragrance that fits your mood, your style, and the way you want to be remembered.</p>
        <div className="cta-band-btns">
          <a
            href="https://wa.me/27671761716?text=Hi%20Alluring%20Scents!%20I%20need%20help%20choosing%20a%20fragrance."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white btn-lg"
          >
            <WhatsAppIcon width="16" height="16" />
            Chat on WhatsApp
          </a>
          <Link to="/products" className="btn btn-primary btn-lg">Browse Products</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCtaBand;
