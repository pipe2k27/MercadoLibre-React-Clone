import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import BreadCrumb from '../../components/Breadcrumb';
import './styles.css';

// this component will make a request to the api through product id and then display the full product details and purchase CTA

const Item = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const { id } = useParams();
  //use params hook lets component acces id in url

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(`http://localhost:8000/api/items/${id}`);
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        setProduct(data);
      } else {
        alert('error: producto no encontrado');
        setLoading(false);
        setError('El producto es inexistente');
      }
    };
    fetcher();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <p className="text-center margin">{error}</p>}
      {product && (
        <div>
          <div>
            <BreadCrumb
              categories={product.category}
              className="product-breadcrumb"
            />
            <div className="product-box center">
              <div className="product-top-section">
                <div className="product-picture-box">
                  <img
                    src={product.item.picture}
                    alt={product.title}
                    className="product-picture"
                  />
                </div>
                <div className="product-price-box">
                  <p className="product-vendidos">
                    {product.item.condition} - {product.item.sold_quantity}{' '}
                    Vendidos
                  </p>
                  <h2 className="product-title">{product.item.title}</h2>
                  <p className="product-price">
                    $
                    {!product.item.price.decimals
                      ? product.item.price.amount
                      : `${product.item.price.amount},
                ${product.item.price.decimals}`}
                  </p>
                  <div className="product-button">Comprar</div>
                </div>
              </div>
              <div className="product-description-box">
                <p className="product-description-title">
                  Descripcion del producto
                </p>
                <p className="product-description">
                  {product.item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Item;
