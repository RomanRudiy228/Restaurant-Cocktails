import { Link } from "react-router-dom";
import { useCocktailsList } from "../hooks/useCocktailsList";

const CocktailsList = () => {
  const { cocktails, topCocktails, loading, error } = useCocktailsList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Wellcome to our cafe!</h1>    

      <h2>🔥 TOP Cocktails</h2>
      <ul>
        {topCocktails.map(cocktail => (
          <li key={cocktail.idDrink}>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="50" /> {cocktail.strDrink}
            </Link>
          </li>
        ))}
      </ul>

      <h2>🍹 All Cocktails</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.idDrink}>
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="50" /> {cocktail.strDrink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailsList;