import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-container">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;