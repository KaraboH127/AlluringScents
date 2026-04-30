// Payment methods section.
function PaymentSection() {
  return (
    <section className="payment">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Payment Options</span>
          <h2 className="section-title">We make it <em>simple</em></h2>
          <p className="section-body">Flexible payment methods for a smoother checkout experience.</p>
        </div>

        <div className="payment-grid">
          <div className="payment-card reveal">
            <div className="payment-icon">EFT</div>
            <div className="payment-title">Bank Transfer</div>
            <p className="payment-desc">Direct EFT payments are accepted once your order is confirmed. We send banking details and the final amount on request.</p>
          </div>
          <div className="payment-card reveal">
            <div className="payment-icon">Cash</div>
            <div className="payment-title">Cash Deposit</div>
            <p className="payment-desc">Cash deposits are welcome at major bank branches or ATMs. Send proof of deposit once payment has been made.</p>
          </div>
          <div className="payment-card reveal">
            <div className="payment-icon">App</div>
            <div className="payment-title">Instant EFT</div>
            <p className="payment-desc">Use your banking app for immediate payment confirmation and faster order processing.</p>
          </div>
        </div>

        <div className="payment-note reveal">
          <p><strong>Important:</strong> Always send proof of payment after checkout. Orders only move into processing once payment has been verified.</p>
        </div>
      </div>
    </section>
  );
}

export default PaymentSection;
