import React from 'react';
import './styles.css';

const Product = ({ product }) => {
  return (
    <div className="search-results-product">
      <div className="search-results-image-box">
        <img
          src={product.picture}
          alt="product"
          className="search-results-image"
        />
      </div>
      <div>
        <div className="flex-center-vertical search-results-price-box">
          <p className="search-results-price">${product.price}</p>
          {product.freeShipping && (
            <img
              className="search-results-shipping"
              src={`${process.env.PUBLIC_URL}/assets/ic_shipping@2x.png`}
              alt="free shipping"
            />
          )}
        </div>
        <p className="search-results-title">{product.title}</p>
      </div>
      <p className="search-results-state">{product.state}</p>
    </div>
  );
};

export default Product;
