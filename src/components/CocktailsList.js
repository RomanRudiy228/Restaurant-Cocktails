import { Link } from "react-router-dom";
import { useCocktailsList } from "../hooks/useCocktailsList";
import Layout from "./Layout";
import "../styles/CocktailList.css";

const CocktailsList = () => {
  const { cocktails, loading, error } = useCocktailsList();

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px" }}>{error}</p>;

  return (
    <Layout>
      <div className="cocktails-list-container">  
        <h1>🍹 All Cocktails</h1>
        <div className="cocktails-list-grid">
          {cocktails.map(cocktail => (
            <div className="cocktail-list-card" key={cocktail.idDrink}>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <p>{cocktail.strDrink}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CocktailsList;