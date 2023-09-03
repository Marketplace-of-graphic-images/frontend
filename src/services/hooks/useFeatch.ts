import { useEffect, useState } from 'react';
/* eslint-disable */
export default function useFetch(url, request) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true);
          const response = request();
          setData(response.data);
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false);
        }
      }());
  }, [url]);

  return { data, error, loading };
}
