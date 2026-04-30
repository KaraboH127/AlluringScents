// Delivery information section.
function DeliverySection() {
  return (
    <section className="delivery">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Delivery Information</span>
          <h2 className="section-title">We deliver <em>nationwide</em></h2>
          <p className="section-body">Your order is packed carefully and dispatched across South Africa with updates along the way.</p>
        </div>

        <div className="delivery-grid">
          <div className="delivery-card reveal">
            <div className="del-icon">ZA</div>
            <div className="del-title">Where We Deliver</div>
            <p className="del-body">We deliver across South Africa, from major cities to smaller towns, using reliable courier options and collection-point delivery where needed.</p>
          </div>
          <div className="delivery-card reveal">
            <div className="del-icon">2-5D</div>
            <div className="del-title">Delivery Timeframe</div>
            <p className="del-body">Standard delivery usually takes 2-5 business days depending on your location. Remote areas may take slightly longer.</p>
          </div>
          <div className="delivery-card reveal">
            <div className="del-icon">Care</div>
            <div className="del-title">Packaging</div>
            <p className="del-body">Every bottle is packed securely so it arrives in excellent condition, whether it is for you or for gifting.</p>
          </div>
          <div className="delivery-card reveal">
            <div className="del-icon">Track</div>
            <div className="del-title">Order Updates</div>
            <p className="del-body">We keep you informed from payment confirmation to dispatch notification so the process never feels uncertain.</p>
          </div>
        </div>

        <div className="paxi-feature reveal">
          <div className="paxi-icon-big">PAXI</div>
          <div>
            <div className="paxi-feature-title">PAXI delivery available</div>
            <p className="paxi-feature-body">We also deliver through the PAXI network for convenient collection around South Africa. PAXI fees are charged at the client's own cost and are added once the order is confirmed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;
