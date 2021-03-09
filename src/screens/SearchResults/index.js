import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumb from './components/breadcrumb';
import Product from './components/product';
import './styles.css';

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
      const res = await fetch(`http://localhost:8000/items?q=${term}`);
      const products = await res.json();
      setData(products);
    };
    fetchData();
  }, []);
  return (
    <div className="search-results center">
      {data && (
        <div>
          <BreadCrumb categories={data.categories} />
          <div className="search-results-box">
            {data !== '' &&
              data.items.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
