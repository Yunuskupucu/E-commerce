import React from 'react';
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const { id, title, price, image, description } = product;
  const navigate = useNavigate();
  console.log(product);

  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <div>
        <p style={{ textAlign: 'center', height: '60px' }}>{title}</p>
        <h3 style={{ textAlign: 'center' }}>{price} $</h3>
      </div>
      <div className="button-div">
        <button
          onClick={() => navigate('/product-detail/' + id)}
          className="detail-button"
        >
          Detaya Git
        </button>
      </div>
    </div>
  );
}

export default Product;
