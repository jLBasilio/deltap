import { DBFunction, UseFetch } from '@src/types';
import { useEffect, useState } from 'react';

const useFetch = (DB_FUNC: DBFunction, ...params: any[]): UseFetch => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromDB(): Promise<any> {
      try {
        const result = await DB_FUNC(...params);
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }

    setLoading(true);
    void fetchFromDB();
    return () => {};
  }, []);

  return { data, loading, error };
};

export default useFetch;
