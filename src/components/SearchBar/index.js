import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input';
import './styles.css';

const SearchBar = () => {
  const [searchTerm, setSeacrchTerm] = useState('');
  const history = useHistory();

  const submitSearch = () => {
    history.push(`/items?search=${searchTerm}`);
    window.location.reload();
  };

  const goHome = () => {
    history.push('/');
    window.location.reload();
  };

  return (
    <div className="search-bar yellow-back">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Logo_ML@2x.png`}
        alt="mercado libre"
        className="search-bar-logo"
        onClick={goHome}
      />
      <Input
        placeholder="Nunca pares de buscar"
        button
        onChange={(e) => setSeacrchTerm(e)}
        onSubmit={submitSearch}
      />
    </div>
  );
};

export default SearchBar;
