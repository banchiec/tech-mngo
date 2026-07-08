import { useState, useEffect } from 'react';

export const useFetchRange = < T, >(url: string) => {
  const [data, setData] = useState<T| null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { cache: 'no-store' });
        
        if (!res.ok) {
          throw new Error('Error en la capa de infraestructura: No se pudieron recuperar los datos del servicio.');
        }
        
        const json: T = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido de red');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};