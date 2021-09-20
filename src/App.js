import './App.css';
import data from "./components/data/coffees.json"
import { Header } from './components/Header/Header';

import { useState } from 'react';
import { CoffeContext } from './components/context/CoffeContext';
import { ProductList } from './components/Product/ProductList';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categories, setCategories] = useState(0)
  const [coffeData, setCoffeData] = useState(data)
  

  const value = {
    searchTerm,
    setSearchTerm,
    categories,
    setCategories,
    coffeData,
    setCoffeData
 
  };
  return (
    <div className="app">
       <CoffeContext.Provider value={value}>
      <Header />
     <ProductList/>
      </CoffeContext.Provider>
    </div>
  );
}

export default App;
