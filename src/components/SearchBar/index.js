import React, { useState } from 'react';
import Input from '../Input';
import './styles.css';

const SearchBar = ({ dataSetter }) => {
  const [searchTerm, setSeacrchTerm] = useState('');

  const submitSearch = async () => {
    const res = await fetch(`http://localhost:8000/products/${searchTerm}`);
    const products = await res.json();
    dataSetter(products);
  };

  return (
    <div className="search-bar yellow-back">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Logo_ML@2x.png`}
        alt="mercado libre"
        className="search-bar-logo"
      />
      <Input
        placeholder="Nunca pares de buscar"
        button
        onChange={(e) => setSeacrchTerm(e)}
        onSubmit={() => {
          submitSearch();
        }}
      />
    </div>
  );
};

export default SearchBar;
