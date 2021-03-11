import React from 'react';
import Loader from 'react-loader-spinner';
import './styles.css';
const LoadingLoader = () => {
  return (
    <div className="center loader white">
      <h2>Cargando</h2>
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  );
};

export default LoadingLoader;
