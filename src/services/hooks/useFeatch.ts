import { useEffect, useState } from 'react';
/* eslint-disable */
export default function useFetch(request) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

        async function click () {
        try {
          setLoading(true);
          const response =  await request
          setData(response.data);
        } catch (err) {
          setError(error)
        } finally {
          setLoading(false);
        }
      }

  return { data, error, loading, click };
}
