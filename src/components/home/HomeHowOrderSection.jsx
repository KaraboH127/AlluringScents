// Home order-process summary section.
function HomeHowOrderSection() {
  return (
    <section className="how-order">
      <div className="container">
        <div className="how-header reveal">
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">How to <em>Order</em></h2>
          <p className="section-body">A straightforward route from first message to final delivery, designed to feel polished from start to finish.</p>
        </div>

        <div className="steps-row">
          <div className="step-item reveal">
            <div className="step-num">01</div>
            <div className="step-emoji">Inquiry</div>
            <div className="step-heading">Send Your Order</div>
            <p className="step-text">Message us with the fragrance you want and we will confirm availability right away.</p>
          </div>
          <div className="step-item reveal">
            <div className="step-num">02</div>
            <div className="step-emoji">Payment</div>
            <div className="step-heading">Make Payment</div>
            <p className="step-text">Deposit or EFT once we send the total and banking details for your order.</p>
          </div>
          <div className="step-item reveal">
            <div className="step-num">03</div>
            <div className="step-emoji">Proof</div>
            <div className="step-heading">Confirm Payment</div>
            <p className="step-text">Send proof of payment on WhatsApp so we can verify quickly and begin processing.</p>
          </div>
          <div className="step-item reveal">
            <div className="step-num">04</div>
            <div className="step-emoji">Dispatch</div>
            <div className="step-heading">Receive Your Order</div>
            <p className="step-text">We pack with care, dispatch your fragrance, and keep you updated until it arrives.</p>
          </div>
        </div>

        <div className="paxi-banner reveal">
          <div className="pi">PAXI</div>
          <p><strong>PAXI delivery note:</strong> Delivery through PAXI is available at the client's own cost. We share collection details once the order is confirmed.</p>
        </div>
      </div>
    </section>
  );
}

export default HomeHowOrderSection;
