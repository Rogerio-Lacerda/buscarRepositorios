import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let json = null;
    try {
      setLoading(true);
      setData(null);
      setError(null);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      json = await response.json();
    } catch (e) {
      json = null;
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Error: erro ao fazer requisição');
      }
    } finally {
      setLoading(false);
      setData(json);
    }
  }, []);
  return { data, error, loading, request };
};

export default useFetch;
