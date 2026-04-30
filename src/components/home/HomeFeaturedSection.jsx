import { Link } from 'react-router-dom';
import ProductCard from '../shared/ProductCard';
import { featuredProducts } from '../../data/products';

// Home featured products section.
function HomeFeaturedSection() {
  return (
    <section className="featured">
      <div className="container">
        <div className="section-header-row reveal">
          <div>
            <span className="section-label">Collection Edit</span>
            <h2 className="section-title">Featured <em>Fragrances</em></h2>
          </div>
          <Link to="/products" className="btn btn-outline-blue btn-md">View All Products</Link>
        </div>

        <div className="feat-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} badge={product.badge} />
          ))}
        </div>

        <div className="reveal featured-cta">
          <Link to="/products" className="btn btn-primary btn-lg">View All Products</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturedSection;
