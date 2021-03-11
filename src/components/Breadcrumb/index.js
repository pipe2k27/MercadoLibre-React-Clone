import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// Bread crub recieves category array and arranges them for display from most general to most specific

const BreadCrumb = ({ categories, className }) => {
  return (
    <div className={`breadcrumb ${className}`}>
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

BreadCrumb.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default BreadCrumb;
