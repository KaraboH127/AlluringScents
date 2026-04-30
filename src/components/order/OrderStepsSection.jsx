// Order process deep-dive section.
function OrderStepsSection() {
  return (
    <section className="steps-full">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Step by Step</span>
          <h2 className="section-title">How ordering <em>works</em></h2>
          <p className="section-body">A smoother, more direct buying experience. Four steps from first message to fragrance in hand.</p>
        </div>

        <div className="steps-full-grid">
          <div className="step-full-card reveal">
            <div className="step-count">01</div>
            <div className="step-icon-lg">Inbox</div>
            <div className="step-title-lg">Send Your Order</div>
            <p className="step-body">Message us with the perfume you want, plus any preferences such as quantity, gifting, or occasion. We confirm availability right away.</p>
          </div>
          <div className="step-full-card reveal">
            <div className="step-count">02</div>
            <div className="step-icon-lg">Pay</div>
            <div className="step-title-lg">Make Payment</div>
            <p className="step-body">Once the order is confirmed, we send the total and banking details so you can make payment via the method that suits you best.</p>
          </div>
          <div className="step-full-card reveal">
            <div className="step-count">03</div>
            <div className="step-icon-lg">Proof</div>
            <div className="step-title-lg">Confirm Payment</div>
            <p className="step-body">Send proof of payment on WhatsApp. This allows us to verify quickly and begin processing without unnecessary delay.</p>
          </div>
          <div className="step-full-card reveal">
            <div className="step-count">04</div>
            <div className="step-icon-lg">Out</div>
            <div className="step-title-lg">Receive Your Order</div>
            <p className="step-body">After payment is confirmed, your fragrance is packed carefully, dispatched, and tracked until it reaches you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderStepsSection;
