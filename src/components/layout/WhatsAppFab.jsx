import { WhatsAppIcon } from '../shared/SocialIcons';

// Floating WhatsApp action button present on every page.
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/27671761716?text=Hi%20Alluring%20Scents!"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

export default WhatsAppFab;
