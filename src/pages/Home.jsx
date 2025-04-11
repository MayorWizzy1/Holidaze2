import { HeroSection } from '../components/homePage/heroSection';
import { MostPopularSection } from '../components/homePage/MostPopularSection';
import { NewlyAddedSection } from '../components/homePage/NewlyAddedSection';

export function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <NewlyAddedSection />
      <MostPopularSection />
    </div>
  );
}
