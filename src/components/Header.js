import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Cocktail Café</Link>
            <nav>
            <Link to="/cocktails-list">List of Cocktails</Link>
            </nav>
        </header>
    );
};

export default Header;