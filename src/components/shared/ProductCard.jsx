// Shared fragrance card used in featured and full catalogue layouts.
function ProductCard({ product, badge, className = 'product-card reveal', hidden = false }) {
  return (
    <div className={className} data-gender={product.gender} hidden={hidden}>
      <div className={`product-img-wrap ${product.imageWrapClass ?? 'bg-1'}`}>
        <span className="feat-emoji">
          <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
        </span>
        <span className="product-badge badge-featured">{badge ?? product.badge}</span>
      </div>
      <div className="product-body">
        <div className="product-name">{product.name}</div>
        <div className="product-gender">{product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}</div>
        <div className="product-notes">
          <div className="note-row"><span className="note-label">Top Notes</span><span className="note-val">{product.topNotes}</span></div>
          <div className="note-row"><span className="note-label">Heart Notes</span><span className="note-val">{product.heartNotes}</span></div>
          <div className="note-row"><span className="note-label">Base Notes</span><span className="note-val">{product.baseNotes}</span></div>
          <div className="note-row"><span className="note-label">Mood</span><span className="note-val">{product.mood}</span></div>
        </div>
        <div className="product-meta">
          <div>
            <div className="product-price">R 500</div>
            <div className="product-size">100ml EDP</div>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <a
          href={`https://wa.me/27671761716?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(product.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm btn-block"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
