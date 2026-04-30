import { useMemo, useState } from 'react';
import ProductCard from '../shared/ProductCard';
import { products } from '../../data/products';

const filterOptions = ['all', 'male', 'female', 'unisex'];

// Products list section with filter controls.
function ProductsGridSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProducts = useMemo(() => {
    if (activeFilter === 'all') {
      return products;
    }

    return products.filter((product) => product.gender === activeFilter);
  }, [activeFilter]);

  const visibleCount = visibleProducts.length;

  return (
    <>
      <div className="filter-bar">
        <div className="container">
          <div className="filter-inner">
            <span className="filter-label">Filter</span>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`.trim()}
                data-filter={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="count-bar">
            <p className="count-text" aria-live="polite">
              {activeFilter === 'all' ? (
                <>Showing <strong>all {visibleCount}</strong> fragrances</>
              ) : (
                <>
                  Showing <strong>{visibleCount} {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}</strong> {visibleCount === 1 ? 'fragrance' : 'fragrances'}
                </>
              )}
            </p>
            <a href="https://wa.me/27671761716?text=Hi!%20I%20need%20help%20choosing%20a%20perfume." target="_blank" rel="noopener noreferrer" className="btn btn-green btn-sm">Need help choosing?</a>
          </div>

          <div className="products-grid" id="productsGrid">
            {products.map((product) => {
              const isVisible = activeFilter === 'all' || product.gender === activeFilter;
              return <ProductCard key={product.id} product={product} hidden={!isVisible} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsGridSection;
