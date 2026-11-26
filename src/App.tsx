import { MotionConfig } from 'motion/react';
import { restaurantConfig } from './config/restaurantConfig';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { VisitSection } from './components/VisitSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen bg-[#171412] text-[#F6EBDD]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#F0A52E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#171412]"
        >
          Skip to main content
        </a>

        <Header
          brandName={restaurantConfig.brandName}
          navLinks={restaurantConfig.navLinks}
          orderingUrl={restaurantConfig.visit.orderingUrl}
        />

        <main id="main-content">
          <Hero
            headline={restaurantConfig.hero.headline}
            supportingLine={restaurantConfig.hero.supportingLine}
            primaryCta={restaurantConfig.hero.primaryCta}
            secondaryCta={restaurantConfig.hero.secondaryCta}
            image={restaurantConfig.hero.image}
            imageAlt={restaurantConfig.hero.imageAlt}
          />

          <MenuSection
            heading={restaurantConfig.menu.heading}
            categories={restaurantConfig.menu.categories}
            items={restaurantConfig.menu.items}
          />

          <StorySection
            heading={restaurantConfig.story.heading}
            body={restaurantConfig.story.body}
            image={restaurantConfig.story.image}
            imageAlt={restaurantConfig.story.imageAlt}
          />

          <VisitSection
            heading={restaurantConfig.visit.heading}
            fallbackMessage={restaurantConfig.visit.fallbackMessage}
            address={restaurantConfig.visit.address}
            openingHours={restaurantConfig.visit.openingHours}
            phone={restaurantConfig.visit.phone}
            directionsUrl={restaurantConfig.visit.directionsUrl}
            orderingUrl={restaurantConfig.visit.orderingUrl}
          />
        </main>

        <Footer
          brandName={restaurantConfig.brandName}
          navLinks={restaurantConfig.navLinks}
          instagramUrl={restaurantConfig.social.instagramUrl}
        />
      </div>
    </MotionConfig>
  );
}
