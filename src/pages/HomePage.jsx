import HomeHero from '../components/home/HomeHero';
import StorySection from '../components/home/StorySection';
import HomeHowOrderSection from '../components/home/HomeHowOrderSection';
import HomeFeaturedSection from '../components/home/HomeFeaturedSection';
import HomeCtaBand from '../components/home/HomeCtaBand';
import { useBodyPageClass } from '../hooks/useBodyPageClass';
import { useRevealAnimations } from '../hooks/useRevealAnimations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

// Home route built from section-level components.
function HomePage() {
  useBodyPageClass('page-home');
  useRevealAnimations('page-home');
  useDocumentMeta({
    title: 'Alluring Scents - Savour the Seduction',
    description: 'Premium luxury perfumes by Alluring Scents. Founded by Thato Padi and Katlego Kennedy. Savour the Seduction.'
  });

  return (
    <>
      <HomeHero />
      <StorySection />
      <HomeHowOrderSection />
      <HomeFeaturedSection />
      <HomeCtaBand />
    </>
  );
}

export default HomePage;
