import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ReferencesSection from '@/components/sections/ReferencesSection';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ReferencesSection />
    </>
  );
}
