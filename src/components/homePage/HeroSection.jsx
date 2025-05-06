import { SearchForm } from '../SearchForm';

export function HeroSection({ setSearchResults, setSearchText }) {
  return (
    <div className="bg-[url('/public/bg-hero.jpg')] bg-cover bg-center font-roboto">
      <div className="bg-bg-black px-10 py-12 sm:px-24 lg:py-24 lg:px-32">
        <h1 className="font-boska text-yellow-400 text-[32px] mb-2 text-center font-bold lg:text-[40px] lg:text-left">
           {/* Changed text color to yellow-400 */}
          Find your next stay
        </h1>
        <SearchForm
          setSearchResults={setSearchResults}
          setSearchText={setSearchText}
        />
      </div>
    </div>
  );
}
