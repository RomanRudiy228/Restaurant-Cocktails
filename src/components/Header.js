import { Link } from "react-router-dom";
import "../styles/Header.css"

const Header = () => {
    return (
      <header>
        <a href="/" className="logo">CocktailCafé</a>

        <div className="search-container">
          <input type="text" placeholder="Search cocktails..." />
          {/* <button><Search size={20} /></button> */}
        </div>

        <div className="nav-buttons">
          <Link to="/cocktails-list" className="nav-cocktails">All Cocktails</Link>
          <a href="/cart" className="cart-icon">
          {/* <ShoppingCart size={24} /> */}
          <span>2</span>
          </a>
        </div>
    </header>
  );
};

export default Header;