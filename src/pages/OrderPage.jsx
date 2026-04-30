import OrderHero from '../components/order/OrderHero';
import OrderStepsSection from '../components/order/OrderStepsSection';
import PaymentSection from '../components/order/PaymentSection';
import DeliverySection from '../components/order/DeliverySection';
import ContactSection from '../components/order/ContactSection';
import FaqSection from '../components/order/FaqSection';
import { useBodyPageClass } from '../hooks/useBodyPageClass';
import { useRevealAnimations } from '../hooks/useRevealAnimations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

// Order & delivery route.
function OrderPage() {
  useBodyPageClass('page-order');
  useRevealAnimations('page-order');
  useDocumentMeta({
    title: 'Order & Delivery - Alluring Scents',
    description: 'How to order from Alluring Scents, including payment methods, delivery information, and FAQs.'
  });

  return (
    <>
      <OrderHero />
      <OrderStepsSection />
      <PaymentSection />
      <DeliverySection />
      <ContactSection />
      <FaqSection />
    </>
  );
}

export default OrderPage;
