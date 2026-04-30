// Home story section.
function StorySection() {
  return (
    <section className="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-visual reveal">
            <div className="story-corner-1"></div>
            <div className="story-corner-2"></div>
            <div className="story-visual-inner">
              <div className="story-big-emoji">
                <img className="story-big-logo" src="/Assets/images/Alluring_scents_logo.jpg" alt="Alluring Scents logo" />
              </div>
              <div className="story-accent-bar"></div>
              <div className="story-big-emoji story-big-emoji-sm">Edition 01</div>
            </div>
            <div className="story-visual-badge">
              <p>"A fragrance is more than a scent. It is a memory, mood, and seduction."</p>
              <span>Alluring Scents</span>
            </div>
          </div>

          <div className="story-text reveal">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Born from <em>Desire</em><br />for the unforgettable</h2>
            <p>In 2024, <strong>Thato Padi</strong> and <strong>Katlego Kennedy</strong> turned a shared obsession into a perfume house defined by atmosphere, intimacy, and quiet confidence.</p>
            <p>Alluring Scents is built on one belief: <strong>every person deserves a signature scent that feels like a private language</strong>. The collection pairs elegance with accessibility, so luxury never feels distant.</p>
            <p>The motto <strong>"Savour the Seduction"</strong> is an invitation to slow down and wear fragrance with intention. Each bottle is designed to leave a mark without saying too much.</p>
            <p>From the first spray to the final whisper of base notes, the goal is simple: make the experience feel cinematic, personal, and impossible to forget.</p>

            <div className="founders-row">
              <div className="founder-card">
                <div className="founder-name">Thato Padi</div>
                <div className="founder-role">Co-Founder</div>
              </div>
              <div className="founder-card">
                <div className="founder-name">Katlego Kennedy</div>
                <div className="founder-role">Co-Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
