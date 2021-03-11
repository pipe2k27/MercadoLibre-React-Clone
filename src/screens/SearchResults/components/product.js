import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

// this component will render a product to be displayed in search results

const Product = ({ product, className }) => {
  const [animation, setAnimation] = useState(false);
  const history = useHistory();
  const { price, picture, free_shipping, title, state, id } = product;
  const { amount, decimals } = price;

  const onSelect = () => {
    setAnimation(true);
    setTimeout(() => {
      history.push(`/items/${id}`);
    }, 300);
  };
  return (
    <div
      className={`search-results-product search-results-product-animation-${animation} ${className}`}
      onClick={onSelect}
    >
      <div className="search-results-image-box">
        <img src={picture} alt="product" className="search-results-image" />
      </div>
      <div className="relative">
        <div className="flex-center-vertical search-results-price-box">
          <p className="search-results-price">
            ${!decimals ? amount : `${amount},${decimals}`}
          </p>
          {free_shipping && (
            <img
              className="search-results-shipping"
              src={`${process.env.PUBLIC_URL}/assets/ic_shipping@2x.png`}
              alt="free shipping"
            />
          )}
        </div>
        {free_shipping && (
          <p className="search-results-shipping-text"> Envío gratis!</p>
        )}
        <p className="search-results-title">{title}</p>
      </div>
      <p className="search-results-state">{state}</p>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="search-result-icon icon-1"
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        className="search-result-icon icon-2"
      />
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    price: PropTypes.shape({
      amount: PropTypes.string,
      decimals: PropTypes.string,
    }),
    picture: PropTypes.string,
    free_shipping: PropTypes.bool,
    title: PropTypes.string,
    state: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default Product;
