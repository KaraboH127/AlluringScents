import ProductsHero from '../components/products/ProductsHero';
import ProductsGridSection from '../components/products/ProductsGridSection';
import { useBodyPageClass } from '../hooks/useBodyPageClass';
import { useRevealAnimations } from '../hooks/useRevealAnimations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

// Products route showing filterable fragrance catalogue.
function ProductsPage() {
  useBodyPageClass('page-products');
  useRevealAnimations('page-products');
  useDocumentMeta({
    title: 'Products - Alluring Scents',
    description: 'Browse the full Alluring Scents collection of premium luxury perfumes.'
  });

  return (
    <>
      <ProductsHero />
      <ProductsGridSection />
    </>
  );
}

export default ProductsPage;
