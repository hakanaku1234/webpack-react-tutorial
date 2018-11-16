import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title }) => {
  return (
    <div>
      <div>{ title } world</div>
      <input type="text" />
    </div>
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired
}

export default Input;
