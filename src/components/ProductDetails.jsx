import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { image, title, price, description } = selectedProduct;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div
      style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginTop: '40px' }}>
        <img style={{ width: '400px', height: '450px' }} src={image} />
      </div>
      <div style={{ marginTop: '40px', marginLeft: '50px' }}>
        <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
        <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
        <h2
          style={{
            fontSize: '45px',
            fontFamily: 'arial',
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: '#cb5555',
          }}
        >
          {price} $
        </h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CiCircleMinus onClick={decrement} style={{ fontSize: '40px' }} />
          <span
            style={{
              fontSize: '35px',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            {count}
          </span>
          <CiCirclePlus onClick={increment} style={{ fontSize: '40px' }} />{' '}
        </div>
        <div>
          <button
            style={{
              marginTop: '25px',
              border: 'none',
              padding: '15px',
              fontSize: '15px',
              backgroundColor: '#cb5555',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
