// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../services/productService';

const ProductForm = ({ product, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({ id: '', nome: '', quantidade: '' });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id || '',
        nome: product.nome || '',
        quantidade: product.quantidade || '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product && product.id) {
      await updateProduct(product.id, formData);
    } else {
      await createProduct(formData);
    }
    onSubmit();
  };

  return (
    <div className="form-container">
      <h3>{product && product.id ? 'Editar Produto' : 'Adicionar Produto'}</h3>
      <form onSubmit={handleSubmit}>
        {product && product.id && (
          <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              className="form-control"
              readOnly
            />
          </div>
        )}
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-success">
          {product && product.id ? 'Atualizar' : 'Adicionar'}
        </button>
        <button type="button" className="btn btn-secondary ml-2" onClick={onClose}>
          Fechar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
