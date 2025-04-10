import  React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import CocktailsList from "./components/CocktailsList";
import CocktailDetails from "./pages/CocktailDetails";
import './App.css';

const App = () => {
  useEffect(() => {
      if (window.location.pathname !== "/") {
          window.location.replace("/"); 
      }
  }, []);
  
    return (
      <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cocktails-list' element={<CocktailsList />} />
                <Route path='/cocktail/:id' element={<CocktailDetails />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
      </Router>
    );
}

export default App;
