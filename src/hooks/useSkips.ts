import { useState, useEffect } from 'react';
import { Skip } from '../types/skip';
import { fetchSkips } from '../services/api';

export const useSkips = (postcode: string, area?: string) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSkips = async () => {
      try {
        setLoading(true);
        const data = await fetchSkips(postcode, area);
        setSkips(data.sort((a, b) => a.size - b.size));
        setError(null);
      } catch (err) {
        setError('Failed to load skip options. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};