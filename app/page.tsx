import HeroSection from '../components/HeroSection';
import TestCategories from '../components/TestCategories';
import CLIASection from '../components/CLIASection';
import PersonalizedInsightsSection from '../components/PersonalizedInsightsSection';
import SubscribeSection from '../components/SubscribeSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import AsSeenOnSection from '../components/AsSeenOnSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestCategories />
      <CLIASection />
      <PersonalizedInsightsSection />
      <SubscribeSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <AsSeenOnSection />
      <Footer />
    </>
  );
}
