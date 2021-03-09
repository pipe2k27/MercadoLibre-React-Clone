import React from 'react';
import './styles.css';

const BreadCrumb = ({ categories }) => {
  return (
    <div className="breadcrumb">
      {categories &&
        categories.map((e, index) => {
          if (index > 0) {
            return <span> > {e}</span>;
          }
          return <span>{e}</span>;
        })}
    </div>
  );
};

export default BreadCrumb;
