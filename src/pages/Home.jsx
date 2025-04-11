import { HeroSection } from '../components/homePage/heroSection';
import { NewlyAddedSection } from '../components/homePage/NewlyAddedSection';

export function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <NewlyAddedSection />
    </div>
  );
}
