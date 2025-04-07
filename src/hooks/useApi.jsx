import { useEffect, useState } from 'react';

export function useApi(url, options = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url, options]);

  return { data, isLoading, isError };
}
