import { useParams } from "react-router-dom";
import { useCocktailDet } from "../hooks/useCocktailDet";
import "../styles/CocktailDetails.css";
import Layout from "../components/Layout";

const CocktailDetails = () => {
    const { id } = useParams();
    const { cocktail, loading, error } = useCocktailDet(id);

    if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", marginTop: "50px" }}>{error}</p>;
    if (!cocktail) return <p style={{ textAlign: "center", marginTop: "50px" }}>Incorrect name of cocktail</p>;

    return (
        <Layout>
            <div className="cocktail-det-page">
                <div className="cocktail-det-card">
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <div className="cocktail-det-info">
                        <h1>{cocktail.strDrink}</h1>
                        <p><strong>Category:</strong> {cocktail.strCategory}</p>
                        <p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
                        <p><strong>Glass:</strong> {cocktail.strGlass}</p>
                        <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CocktailDetails;