import React from 'react';
import '../css/Product.css';

function Product({ product }) {
  const { id, title, price, image, description } = product;
  console.log(product);

  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <div>
        <p style={{ textAlign: 'center' }}>{title}</p>
        <h3 style={{ textAlign: 'center' }}>{price} $</h3>
      </div>
      <div className="button-div">
        <button className="detail-button">Detaya Git</button>
      </div>
    </div>
  );
}

export default Product;
