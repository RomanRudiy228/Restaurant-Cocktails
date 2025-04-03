import { useState, useEffect } from "react";

export function useCocktailsList() {
  const [cocktails, setCocktails] = useState([]);
  const [topCocktails, setTopCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        const data = await res.json();
        setCocktails(data.drinks);

        const topIds = ["11007","11000","11006"];
        const topData = await Promise.all (
            topIds.map(id => 
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json())
            )
        );

        setTopCocktails(topData.map(d => d.drinks[0]));
      } catch (err) {
        setError("Error of fetching cocktails");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { cocktails, topCocktails, loading, error };
}