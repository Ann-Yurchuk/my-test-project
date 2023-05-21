import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ isCheked, response }) => {
  return (
    <Btn type="button" onClick={response} isCheked={isCheked}>
      {' '}
      {isCheked ? 'Following' : 'Follow'}
    </Btn>
  );
};

Button.propTypes = {
  response: PropTypes.func.isRequired,
};

export default Button;
