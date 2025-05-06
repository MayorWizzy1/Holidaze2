import { useState } from 'react';
import { HeroSection } from '../components/homePage/heroSection';
import { MostPopularSection } from '../components/homePage/MostPopularSection';
import { NewlyAddedSection } from '../components/homePage/NewlyAddedSection';
import { TrendingDestinationSection } from '../components/homePage/TrendingDestinationSection';
import { SearchResultSection } from '../components/homePage/SearchResultSection';
import { CallToActionSection } from '../components/homePage/CallToActionSection';

export function Home({
  authChanged,
  setSearchResults,
  setSearchText,
  searchText,
  searchResults,
}) {
  return (
    <div className="overflow-hidden">
      <HeroSection
        setSearchResults={setSearchResults}
        setSearchText={setSearchText}
      />
      {searchResults.length > 0 && (
        <SearchResultSection
          searchResults={searchResults}
          searchText={searchText}
        />
      )}
      <NewlyAddedSection />
      <MostPopularSection />
      <TrendingDestinationSection />
      <CallToActionSection authChanged={authChanged} />
    </div>
  );
}
