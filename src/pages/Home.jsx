import { HeroSection } from '../components/homePage/heroSection';
import { MostPopularSection } from '../components/homePage/MostPopularSection';
import { NewlyAddedSection } from '../components/homePage/NewlyAddedSection';
import { TrendingDestinationSection } from '../components/homePage/TrendingDestinationSection';

export function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <NewlyAddedSection />
      <MostPopularSection />
      <TrendingDestinationSection />
    </div>
  );
}
