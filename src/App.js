import  React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CocktailsList from "./components/CocktailsList";
import SelectedCocktail from "./pages/selecetedCocktail";
import './App.css';

const App = () => {
  useEffect(() => {
      if (window.location.pathname !== "/") {
          window.location.replace("/"); 
      }
  }, []);
  
    return (
      <Router>
          <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cocktails-list' element={<CocktailsList />} />
                <Route path='/cocktail/:id' element={<SelectedCocktail />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          <Footer />  
      </Router>
    );
}

export default App;
