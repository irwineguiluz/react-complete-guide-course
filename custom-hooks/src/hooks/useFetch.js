import { useEffect, useState } from 'react';

export function useFetch(fetchFn, fetchInitialValue) {
  const [fetchedData, setFetchedData] = useState(fetchInitialValue);
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    fetchedData,
    error,
    isFetching,
  }
}
