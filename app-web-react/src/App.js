// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductList from './components/ProductList';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h2>Manutenção de Produtos</h2>
      <br/>
      <ProductList />
    </div>
  );
}

export default App;
