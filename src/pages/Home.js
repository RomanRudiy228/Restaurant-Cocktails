import { Link } from "react-router-dom";
import { useCocktailsList } from "../hooks/useCocktailsList";
import "../styles/Home.css";
import Layout from "../components/Layout";

const Home = () => {
    const { topCocktails, loading, error } = useCocktailsList();

    if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", marginTop: "50px" }}>{error}</p>;

    return (
        <Layout>
            <div className="home-main-container">
                <div className="home-header">
                    <h1>Welcome to our Cocktail Café!</h1>
                    <h2>🔥 Top Cocktails</h2>
                </div>

                <div className="home-cocktails-grid">
                    {topCocktails.map(cocktail => (
                        <div key={cocktail.idDrink} className="home-cocktail-card">
                            <Link to={`/cocktail/${cocktail.idDrink}`}>
                                <img
                                    src={cocktail.strDrinkThumb}
                                    alt={cocktail.strDrink}
                                    className="home-cocktail-img"
                                />
                                <h3 className="home-cocktail-name">{cocktail.strDrink}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Home;