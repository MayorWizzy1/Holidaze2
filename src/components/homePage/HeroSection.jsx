import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export function HeroSection({ setSearchResults, setSearchText }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchText(inputValue);

    const url = `https://v2.api.noroff.dev/holidaze/venues/search?_bookings=true&q=${inputValue}`;

    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'GET',
      });
      const result = await response.json();
      setSearchResults(result.data);
      console.log(result.data);

      if (result.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearInput = () => {
    setInputValue('');
    setNoResults(false);
  };

  return (
    <div className="bg-[url('/public/bg-hero.jpg')] bg-cover bg-center font-roboto">
      <div className="bg-bg-black px-10 py-12 sm:px-24 lg:py-24 lg:px-32">
        <h1 className="font-boska text-white text-[32px] mb-2 text-center font-bold lg:text-[40px] lg:text-left">
          Find your next stay
        </h1>
        <form
          onSubmit={handleSearch}
          className="lg:bg-white lg:flex lg:items-center lg:gap-2 lg:p-10 lg:rounded-[10px] lg:w-3/5"
        >
          <div className="relative bg-white rounded-[10px] py-3 mb-2 md:w-1/2 md:mx-auto lg:border lg:border-outline lg:mb-0 lg:w-3/4">
            <PlaceOutlinedIcon className="absolute left-4 text-black !w-5" />
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                setNoResults(false);
              }}
              type="text"
              placeholder="Where are you going?"
              className="w-full pl-10 placeholder:text-black placeholder:text-sm relative z-10 focus-visible:outline-0"
            />
            {isError && !isFocused && (
              <p className="absolute bottom-[-60%] text-sm text-error">
                {isError}
              </p>
            )}
            {noResults && (!isFocused || inputValue === '') && (
              <p className="absolute top-1/2 right-10 -translate-y-1/2 text-sm text-error">
                No results found.
              </p>
            )}
            {inputValue && (
              <CloseIcon
                className="absolute right-4 text-black !w-5 cursor-pointer z-[11]"
                onClick={clearInput}
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue text-white cursor-pointer rounded-[10px] py-3 w-full font-medium block md:w-1/2 md:mx-auto lg:w-1/4 transition-all duration-300 hover:bg-white hover:text-blue hover:border disabled:cursor-not-allowed"
            disabled={isLoading || inputValue === ''}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
