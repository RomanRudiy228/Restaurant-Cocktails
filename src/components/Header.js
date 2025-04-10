import { Link } from "react-router-dom";
import "../styles/Header.css"

const Header = () => {
    return (
      <header>
        <a href="/" className="logo">CocktailCafé</a>

        <div className="search-container">
            <input
              type="text"
              placeholder="Search cocktails..."
              className="search-input"
            />
            <i className='bx bx-search search-icon'></i>
        </div>

        <div className="nav-buttons">
          <Link to="/cocktails-list" className="nav-cocktails">All Cocktails</Link>

          <div className="cart-wrapper">
            <Link to="/cart" className="cart-button">
              🛒 Cart
            </Link>
            <span className="cart-count">2</span>
          </div>
        </div>
    </header>
  );
};

export default Header;