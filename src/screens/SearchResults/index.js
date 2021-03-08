import React, { useEffect, useState } from 'react';
import Product from './components/product';
import './styles.css';

const SearchResults = ({ data }) => {
  return (
    <div className="search-results center">
      <div className="search-results-box">
        {data !== '' &&
          data.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default SearchResults;
