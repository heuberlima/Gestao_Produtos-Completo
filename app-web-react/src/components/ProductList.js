// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../services/productService';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza de que deseja excluir este produto?");
    if (confirmDelete) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleFormSubmit = () => {
    setEditingProduct(null);
    loadProducts();
  };

  const handleCloseForm = () => {
    setEditingProduct(null);
  };

  return (
    <div className="table-container">
      <h3>Lista de Produtos</h3>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>{product.quantidade}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEdit(product)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <button className="btn btn-primary mt-3" onClick={() => setEditingProduct({})}>
        Adicionar Produto
      </button>
      {editingProduct && (
        <ProductForm product={editingProduct} onSubmit={handleFormSubmit} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default ProductList;
