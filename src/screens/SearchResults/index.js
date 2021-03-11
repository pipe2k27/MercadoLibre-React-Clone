import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/Breadcrumb';
import Loader from '../../components/Loader';
import Product from './components/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

// search results component will query ML's database through api and display up to 4 results at a time

// useQuery hook lets component acces query params in url
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const SearchResults = () => {
  const [data, setData] = useState();
  let query = useQuery();

  // this event listener makes sure the window reloads and shows correct results
  // when navigating backwards or foward in the browser
  window.addEventListener('popstate', function (event) {
    window.location.reload();
  });

  const term = query.get('search');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/api/items?q=${term}`);
      const products = await res.json();
      setData(products);
    };
    fetchData();
  });
  return (
    <div>
      {data ? (
        <div className="search-results">
          <BreadCrumb
            categories={data.categories}
            className="search-results-breadcrumb"
          />
          <div className="search-results-box">
            {data.items.length > 0 ? (
              data.items.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <div className="text-center mid margin-vertical-large ">
                <FontAwesomeIcon
                  icon={faSearchMinus}
                  style={{ fontSize: 74 }}
                />
                <p>No se encontraron productos para: </p>
                <p style={{ fontSize: 24 }}>{term}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SearchResults;
