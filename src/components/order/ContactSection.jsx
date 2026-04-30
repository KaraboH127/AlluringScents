import { InstagramIcon, WhatsAppIcon } from '../shared/SocialIcons';

// Contact details and direct WhatsApp box.
function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">We are always <em>here</em> for you</h2>
            <p className="section-body">Questions, recommendations, or orders - the fastest route is always a direct message.</p>

            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-emoji contact-icon" aria-hidden="true">
                  <WhatsAppIcon />
                </div>
                <div>
                  <div className="contact-label">WhatsApp</div>
                  <div className="contact-val">067 176 1716 - Preferred channel</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-emoji contact-icon" aria-hidden="true">
                  <InstagramIcon />
                </div>
                <div>
                  <div className="contact-label">Instagram</div>
                  <div className="contact-val">@_alluringscents_</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-emoji">Time</div>
                <div>
                  <div className="contact-label">Response Time</div>
                  <div className="contact-val">We usually reply within 1-3 hours during business hours.</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-emoji">Team</div>
                <div>
                  <div className="contact-label">Founders</div>
                  <div className="contact-val">Thato Padi and Katlego Kennedy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="wa-box">
              <div className="wa-box-title">Ready to order?</div>
              <p className="wa-box-sub">Open a chat, tell us what you want, and we will guide you through the rest.</p>
              <div className="wa-box-num">+27 67 176 1716</div>
              <a href="https://wa.me/27671761716?text=Hi%20Alluring%20Scents!%20I'd%20like%20to%20place%20an%20order." rel="noopener noreferrer" target="_blank" className="btn btn-whatsapp btn-lg btn-inline btn-center">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
