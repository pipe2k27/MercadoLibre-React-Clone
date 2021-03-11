import React from 'react';
import './styles.css';

// just a little component for the home screen
const HomeScreen = () => {
  return (
    <div className="home">
      <h1 className="home-title">Desafio Mercado Libre</h1>
      <p className="home-name">Por Felipe Perarnau</p>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo.jpeg`}
        alt="mercado libre"
        className="home-logo"
      />
    </div>
  );
};

export default HomeScreen;
