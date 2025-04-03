import { useState, useEffect } from "react";

export function useCocktailDet(id) {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setCocktail(data.drinks[0]);
      } catch (err) {
        setError("Error of fetching cocktail details");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  return { cocktail, loading, error };
}