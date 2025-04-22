import { useState } from 'react';
import { HeroSection } from '../components/homePage/heroSection';
import { MostPopularSection } from '../components/homePage/MostPopularSection';
import { NewlyAddedSection } from '../components/homePage/NewlyAddedSection';
import { TrendingDestinationSection } from '../components/homePage/TrendingDestinationSection';
import { SearchResultSection } from '../components/homePage/SearchResultSection';

export function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="overflow-hidden">
      <HeroSection
        setSearchResults={setSearchResults}
        setSearchText={setSearchText}
      />
      {searchResults.length > 0 && (
        <SearchResultSection results={searchResults} searchText={searchText} />
      )}
      <NewlyAddedSection />
      <MostPopularSection />
      <TrendingDestinationSection />
    </div>
  );
}
