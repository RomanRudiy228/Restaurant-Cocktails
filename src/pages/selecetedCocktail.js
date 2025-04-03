import { useParams } from "react-router-dom";
import { useCocktailDet } from "../hooks/useCocktailDet";

const SelectedCocktail = () => {
    const { id } = useParams();
    const { cocktail, loading, error } = useCocktailDet(id);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!cocktail) return <p>Incorrect name of cocktail</p>

    return (
        <div className="cocktail-details">
            <h1>{cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="300"></img>
            <p>{cocktail.strInstructions}</p>
        </div>
    );
}

export default SelectedCocktail;