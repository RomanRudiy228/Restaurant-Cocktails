import Header from "./Header";
import Footer from "./Footer";

const Layot = ({ children }) => {
    return (
        <div className="layot">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layot;