import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// the input component will be used to create the search bar

const Input = ({ onChange, className, placeholder, button, onSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // eslint-disable-next-line no-restricted-globals
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <form className="input-form">
      <input
        className={`input white-back ${className}`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {button && (
        <div className="input-submit light-back flex-center-all">
          <img
            src={`${process.env.PUBLIC_URL}/assets/ic_Search@2x.png`}
            alt="search"
            className="input-submit-icon"
            onClick={onSubmit}
          />
        </div>
      )}
    </form>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  button: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default Input;
