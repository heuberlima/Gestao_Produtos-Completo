// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/pcontroller/produtos'; // Substitua pela URL do seu backend

// Listar todos os produtos
export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Obter um produto por ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Criar um novo produto
export const createProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

// Atualizar um produto
export const updateProduct = async (id, product) => {
  const response = await axios.put(`${API_URL}/${id}`, product);
  return response.data;
};

// Excluir um produto
export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
