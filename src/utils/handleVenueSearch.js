export async function handleVenueSearch(
  inputValue,
  setSearchResults,
  setSearchText,
  setIsLoading,
  setNoResults,
  setIsError
) {
  setSearchText(inputValue);
  const url = `https://v2.api.noroff.dev/holidaze/venues/search?_bookings=true&q=${inputValue}`;

  try {
    setIsLoading(true);
    const response = await fetch(url, {
      method: 'GET',
    });
    const result = await response.json();
    setSearchResults(result.data);

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
}
